<?php

namespace App\Http\Livewire;

use App\Models\Visitor;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Livewire\Component;
use Livewire\WithPagination;

class Visitors extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';


    public $search;
    public $filters = [];
    public $perPage = 20;
    public $sort = 'created_at|desc';
    public $sortColumnName = 'created_at';
    public $sortDirection = 'desc';
    public $field;


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
        $logs = Visitor::where('ip_address', '!=', null);
        $this->applySearchFilter($logs->orderBy($this->sortColumnName, $this->sortDirection));
        $logs = $logs->paginate($this->perPage);
        if (!$logs) {
            abort(404);
        }

        return view('livewire.visitors', [
            'logs' => $logs
        ]);
    }
    private function applySearchFilter($logs)
    {
        if ($this->search) {
            return $logs->WhereRaw("ip_address LIKE \"%$this->search%\"")
                ->orWhereRaw("browser LIKE \"%$this->search%\"");

        }

        return null;
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


    public function loadMore20()
    {
        $this->perPage = 20;
    }

    public function loadMore50()
    {
        $this->perPage = 50;
    }

    public function loadMore100()
    {
        $this->perPage = 100;
    }
    public function pagination($items, $perPage = 20, $page = null, $options = [], $pageName = 'page')
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);

        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, [
            'path' => LengthAwarePaginator::resolveCurrentPath(),
            'pageName' => $pageName,
        ], $options);
    }
}
