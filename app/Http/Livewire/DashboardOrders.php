<?php

namespace App\Http\Livewire;

use App\Models\Order;
use Illuminate\Database\Eloquent\Builder;
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

    public function mount()
    {


    }

    /*
     * Reset pagination when doing a search
     */
    public function updated()
    {
        $this->resetPage();
    }

    public function render()
    {
        $orders = Order::with('items')->withCount('items');
        $this->applySearchFilter($orders->orderBy($this->sortColumnName, $this->sortDirection));
        $this->getData($orders);
        $getStatus = Order::with('items')->distinct('status')->pluck('status')->toArray();

        $orders = $orders->orderBy($this->sortByColumn(), $this->sortDirection())
            ->paginate($this->perPage);

        return view('livewire.dashboard-orders', [
            'orders' => $orders,
            'getStatus' => $getStatus
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
