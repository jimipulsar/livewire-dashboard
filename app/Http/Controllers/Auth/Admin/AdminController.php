<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Asantibanez\LivewireCharts\Models\AreaChartModel;
use Asantibanez\LivewireCharts\Models\ColumnChartModel;
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

    public function dashboard()
    {
        $customers = Customer::all();

        $columnChartModel =
            (new PieChartModel())
                ->addSlice(__('home.users'), countCustomers(), '#f6ad55')
                ->addSlice(__('home.new_orders'), countOrders(), '#fc8181')
                ->addSlice(__('customer.orders.9'), countProducts(), '#90cdf4');

        // AREA CHART MODEL
        $lineChartModel = new ColumnChartModel();
        $lineChartModel->setTitle(__('Entrate mensili - anno ' . date('Y')))
            ->setAnimated(true)
            ->setSmoothCurve();
        //    $date = Carbon::parse($this->chartData)->locale('it_IT');
        //    dd( $date->translatedFormat('d F Y'));
        foreach (groupedTransaction() as $item) {
            $rand = str_pad(dechex(rand(0x000000, 0xFFFFFF)), 6, 0, STR_PAD_LEFT);
            $lineChartModel
                ->addColumn(__(str_replace(ucfirst(Carbon::today()->monthName), 'Questo mese', __($item['month']))), price($item['amount_paid']), '#' .$rand, [
                    'tooltip' => '€ ' . price($item['amount_paid']),
                ]);
        }

        return view('auth.admin.dashboard', [
            'customers' => $customers,
            'columnChartModel' => $columnChartModel,
            'lineChartModel' => $lineChartModel,

        ]);
    }
}
