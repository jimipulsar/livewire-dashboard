<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Asantibanez\LivewireCharts\Models\AreaChartModel;
use Asantibanez\LivewireCharts\Models\PieChartModel;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;



class AdminController extends Controller
{


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('adminAuth')->except('logout');

    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        return redirect()->route('index');
    }

    public function adminLogout()
    {
        auth()->guard('admin')->logout();
        return redirect()->route('index')->with('success', 'Logged out successfully');
    }

    public function dashboard()
    {
        $customers = Customer::all();

        $columnChartModel =
            (new PieChartModel())
                ->addSlice('Users', countCustomers(), '#f6ad55')
                ->addSlice('Orders', countOrders(), '#fc8181')
                ->addSlice('Products', countProducts(), '#90cdf4');

        // AREA CHART MODEL
        $lineChartModel = new AreaChartModel();
        $lineChartModel->setTitle(__('Entrate mensili'));

        foreach (groupedTransaction() as $item) {
            $lineChartModel
                ->addPoint(__(str_replace(ucfirst(Carbon::today()->monthName), 'Mese Corrente', __($item['month']))) . ' ' . $item['year'], price($item['amount_paid']),
                    ['€' . price($item['amount_paid'])], '#fc8181');
        }

        return view('auth.admin.dashboard', [
            'customers' => $customers,
            'columnChartModel' => $columnChartModel,
            'lineChartModel' => $lineChartModel,

        ]);
    }
}
