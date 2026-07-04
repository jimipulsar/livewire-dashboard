<?php

namespace App\Http\Livewire;

use App\Models\Customer;
use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class SearchUser extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';
    public $searchUser;
    public $filters = [];
    public $perPage = 9;
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
    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function render()
    {
        $users = Customer::with('orders')->withCount('orders');

        $this->applySearchFilter($users->orderBy($this->sortColumnName, $this->sortDirection));

        $users = $users->orderBy($this->sortByColumn(), $this->sortDirection())
            ->paginate($this->perPage);

        return view('livewire.search-user', [
            'users' => $users
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

    private function applySearchFilter($users)
    {
        if ($this->searchUser) {
            return $users->whereRaw("billing_name LIKE \"%$this->searchUser%\"")
                ->orWhereRaw("email LIKE \"%$this->searchUser%\"");

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
}
