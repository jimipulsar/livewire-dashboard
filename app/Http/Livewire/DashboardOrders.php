<?php

namespace App\Http\Livewire;

use App\Models\Order;
use App\Models\Transaction;
use App\Models\Visitor;
use Asantibanez\LivewireCharts\Models\AreaChartModel;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Livewire\Component;
use Livewire\WithPagination;

class DashboardOrders extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';
    public $searchOrder;
    public $perPage = 10;
    public $sort = 'created_at|desc';
    public $sortColumnName = 'created_at';
    public $sortDirection = 'desc';
    public $field;
    public $filter = "";
    public $filters = [
        'processing' => false,
        'pending' => false,
        'completed' => false,
        'decline' => false,
    ];
    public $selected;
    public $ids = [];
    public $startDate;
    public $endDate;
    public $chartData = [];

    public function mount()
    {
//        $dateStart = Carbon::parse($this->startDate)->locale('it_IT');
//        $dateItStart = $dateStart->translatedFormat('d F Y');
//        $dateEnd= Carbon::parse($this->endDate)->locale('it_IT');
//        $dateItEnd = $dateEnd->translatedFormat('d F Y');
        $this->startDate = $startDate ?? now()->subMonths(12)->toDateString();
        $this->endDate = $endDate ?? now()->addDay(1)->toDateString();

    }

    public function render()
    {

        $orders = Order::with('items')->withCount('items');
        $this->applySearchFilter($orders->orderBy($this->sortColumnName, $this->sortDirection));
        $this->getData($orders);
        $getStatus = Order::with('items')->distinct('status')->pluck('status')->toArray();

        $orders = $orders->orderBy($this->sortByColumn(), $this->sortDirection())
            ->paginate($this->perPage);

        //SALES REPORT CHART
        $rangeChartModel = new AreaChartModel();
        $rangeChartModel->setTitle(__('Report Vendite' ))
            ->setAnimated(true)
            ->setSmoothCurve();

        foreach (rangeTransactions($this->startDate,$this->endDate) as $range) {

            $rangeChartModel
                ->addPoint(__(ucfirst(__($range['month']))) . ' ' . $range['year'], price($range['amount_paid']),
                    ['€' . price($range['amount_paid'])], '#fc8181');
        }

        //VISITORS CHART
        $visitorChartModel = new AreaChartModel();
        $visitorChartModel->setTitle(__('Visite giornaliere' ))
            ->setAnimated(true)
            ->setColor('#e69138')
            ->setSmoothCurve();

        foreach (groupedVisitors() as $visitor) {
            $visit =  DB::table('visitors')
                ->where('visited_at', '=', $visitor['date'])
                ->orderBy('created_at', 'asc')
                ->count();
            $visitorChartModel
                ->addPoint(__(ucfirst(__($visitor['day']))) . ' ' . __(ucfirst(__($visitor['month']))) . ' ' .  $visitor['year'], floor($visit),
                    '#fc8181');

        }

        $visitors = Visitor::selectRaw('DATE(created_at) as date, count(*) as visitors')
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get()
            ->toArray();

        return view('livewire.dashboard-orders', [
            'orders' => $orders,
            'getStatus' => $getStatus,
            'rangeChartModel' => $rangeChartModel,
            'visitors' => $visitors,
            'visitorChartModel' => $visitorChartModel,



        ]);


    }

    public function sortByColumn()
    {
        $sort = explode("|", $this->sort);

        if (!$sort[0]) {
            return;
        }

        return $sort[0];
    }

    public function sortDirection()
    {
        $sort = explode("|", $this->sort);

        return $sort[1] ?? 'asc';
    }

    public function getData($getStatus)
    {
        if ($this->filters['processing']) {
            return $getStatus->whereRaw("status LIKE \"%processing%\"");
        }
        if ($this->filters['pending']) {
            return $getStatus->whereRaw("status LIKE \"%pending%\"");
        }
        if ($this->filters['completed']) {
            return $getStatus->whereRaw("status LIKE \"%completed%\"");
        }
        if ($this->filters['decline']) {
            return $getStatus->whereRaw("status LIKE \"%decline%\"");
        }
    }

    private function applySearchFilter($orders)
    {
        if ($this->searchOrder) {
            return $orders->whereRaw("order_number LIKE \"%$this->searchOrder%\"")
                ->orWhereRaw("email LIKE \"%$this->searchOrder%\"")
                ->orWhereRaw("status LIKE \"%$this->searchOrder%\"");
        }

        return null;
    }


    public function sortBy($columnName)
    {
        if ($this->sortColumnName === $columnName) {
            $this->sortDirection = $this->swapSortDirection();
        } else {
            $this->sortDirection = 'asc';
        }

        $this->sortColumnName = $columnName;
    }

    public function swapSortDirection()
    {
        return $this->sortDirection === 'asc' ? 'desc' : 'asc';
    }

    public function setFilter(string $filter): DashboardOrders
    {
        $this->filter = $filter;
        return $this;
    }
}
