<?php

namespace App\Http\Livewire;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Livewire\Component;
use Livewire\WithPagination;

class AdminProduct extends Component
{

    use WithPagination;

    protected $paginationTheme = 'bootstrap';
    public $category;
    public $searchTerm;
    public $filters = [];
    public $perPage = 9;
    public $sort = 'updated_at|desc';
    public $sortColumnName = 'updated_at';
    public $sortDirection = 'desc';
    public $field;
    public $min;
    public $max;


    public function mount()
    {
        $this->min = Product::min('price');
        $this->max = Product::max('price');

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
        $min_price = Product::min('price');
        $max_price = Product::max('price');
        $products = Product::with('categories')->withCount('categories');

        $this->applySearchFilter($products->orderBy($this->sortColumnName, $this->sortDirection));

        $this->applyCategoryFilter($products);

        $products = $products->orderBy($this->sortByColumn(), $this->sortDirection())
            ->whereBetween('price', [$this->min, $this->max])
            ->paginate($this->perPage);

        return view('livewire.admin-product', [
            'products' => $products,
            'min_price' => $min_price,
            'max_price' => $max_price
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

    private function applySearchFilter($products)
    {
        if ($this->searchTerm) {
            return $products->whereRaw("item_name LIKE \"%$this->searchTerm%\"")
                ->orWhereRaw("item_code LIKE \"%$this->searchTerm%\"");

        }

        return null;
    }

    private function applyCategoryFilter($products)
    {
        if ($this->filters) {

            foreach ($this->filters as $filter) {
                $products->whereHas('categories', function ($query) use ($filter) {
                    $query->where('categories.id', $filter);

                });
            }

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
