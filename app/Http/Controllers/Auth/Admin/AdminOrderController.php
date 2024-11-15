<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Mail\OrderMail;
use App\Mail\OrderShipped;
use App\Models\Notification;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\SubOrder;
use App\Models\SubOrderItem;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class AdminOrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('adminAuth');
    }

    public function index()
    {

        $orders = Order::where('is_paid', '1')->orderBy('updated_at', 'DESC')->paginate(10); // fix n + 1 issues

        return view('auth.admin.orders.index', [
            'orders' => $orders,
        ]);


    }


    public function show( $id)
    {

        $order = OrderItem::where('id', $id)->first();
        $orderInfo = Order::where('id', $id)->first();
        $currentNotice = Notification::where('read_at', '=', null)->first();

        if (!empty($currentNotice)) {
//                $currentNotice->read_at = Carbon::now();
//                $currentNotice->save();
            $currentNotice->delete();
        }

        if (!$orderInfo) {
            abort(404);
        }

        return view('auth.admin.orders.show', [
            'order' => $order,
            'orderInfo' => $orderInfo,
            'total' => getNumbers()->get('total'),
            'newTax' => getNumbers()->get('newTax'),
            'newTotal' => getNumbers()->get('newTotal'),
            'newSubtotal' => getNumbers()->get('newSubtotal'),
        ]);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function edit( $id)
    {
        $orderInfo = Order::findOrFail($id);
        return redirect()->route('adminOrders.show', ['orderInfo' => $orderInfo])->with('success', 'Order updated!');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */

    public function update( Request $request, $id)
    {

        $order = Order::where('id', $id)->first();

        $order->update([
            'is_shipped' => $request->has('is_shipped'),
        ]);

        if ($order->is_shipped == '1') {
            Mail::to($order->email)->send(new OrderShipped($order));

        }

        $order->is_paid = '1';
        $order->status = 'completed';


        $order->save();

        return redirect()->route('adminOrders.show', $order->id)->with('success', 'Shipping confirmed');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function cancelOrder( $id)
    {
        $orderId = Order::where('id', $id)->first();

        $orderId->status = "decline";
        $orderId->is_shipped = "0";
        $orderId->update();
        return redirect()->route('dashboard')->with('success', 'You have successfully cancelled an order');
    }
}
