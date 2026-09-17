<?php

namespace App\Http\Livewire;

use App\Models\Category;
use Livewire\Component;
use Livewire\WithPagination;

class AdminCategory extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';
    public $category;
    public $searchTerm;
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
    public function updated()
    {
        $this->resetPage();
    }

    public function render()
    {

        $categories = Category::with('products')->withCount('products');

        $this->applySearchFilter($categories->orderBy($this->sortColumnName, $this->sortDirection));


        $categories = $categories->orderBy($this->sortByColumn(), $this->sortDirection())
            ->paginate($this->perPage);

        return view('livewire.admin-category', [
            'categories' => $categories
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

    private function applySearchFilter($categories)
    {
        if ($this->searchTerm) {
            return $categories->whereRaw("name LIKE \"%$this->searchTerm%\"");

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
