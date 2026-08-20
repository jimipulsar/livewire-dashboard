<?php

use App\Models\Brand;
use App\Models\Attribute;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\Wishlist;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;


if (!function_exists('getCart')) {
    function getCart()
    {
        return session()->get('cart');

    }
}
if (!function_exists('getNotifications')) {
    function getNotifications(): \Illuminate\Support\Collection
    {
        return DB::table('notifications')->orderBy('created_at', 'DESC')->get();

    }
}
if (!function_exists('getProducts')) {
    function getProducts()
    {
        $paginate = 15;
        return Product::orderBy('updated_at', 'DESC')->paginate($paginate);

    }
}
if (!function_exists('getBrands')) {
    function getBrands()
    {
        $paginate = 8;
        return DB::table('brands')->where('parent_id', '=', null)->get();
//        return Product::distinct()->get('item_name', 'Categoria', 'item_code', 'Descrizione', 'img_01', 'img_02', 'stock_qty', 'quantity ', 'Prezzo');

    }
}
if (!function_exists('getAttributes')) {
    function getAttributes()
    {
        $paginate = 8;
        return DB::table('attributes')->where('parent_id', '=', null)->get();


    }
}
if (!function_exists('getRandomProducts')) {
    function getRandomProducts()
    {
        return Product::with(['categories', 'brands'])->withCount('categories', 'brands')->where('published', '=', '1')->inRandomOrder()->paginate(15);

    }
}


if (!function_exists('getQuery')) {
    function getQuery()
    {
        return \request()->input('q');

    }
}
if (!function_exists('getCartCounter')) {
    function getCartCounter()
    {
        return count(Session::get('cart', array()));

    }
}
if (!function_exists('getCompareCounter')) {
    function getCompareCounter()
    {
        return count(Session::get('compare', array()));

    }
}
if (!function_exists('getLatestProducts')) {
    function getLatestProducts()
    {
        return Product::where('published', '=', '1')
            ->orderBy('created_at', 'desc')
            ->take(3)->get();

    }
}
if (!function_exists('lowHigh')) {

    function lowHigh()
    {
        $pagination = 10;
        return Product::orderBy('price', 'ASC')->paginate($pagination);

    }
}
if (!function_exists('productDetails')) {

    function productDetails($id)
    {
        return Product::query()
            ->leftJoin('category_product', 'category_product.product_id', '=', 'products.id')
            ->leftJoin('categories', 'categories.id', '=', 'category_product.category_id')
            ->leftJoin('brand_product', 'brand_product.product_id', '=', 'products.id')
            ->leftJoin('brands', 'brands.id', '=', 'brand_product.product_id')
            ->select('products.*', 'categories.*', 'category_product.*', 'brand_product.*', 'brands.*')
            ->where([
                ['category_product.product_id', '=', $id]
            ])
            ->first();
    }
}
if (!function_exists('productRelations')) {

    function productRelations($id)
    {
        return Product::query()
            ->leftJoin('category_product', 'category_product.product_id', '=', 'products.id')
            ->leftJoin('categories', 'categories.id', '=', 'category_product.category_id')
            ->select('products.*', 'categories.*', 'category_product.*')
            ->where([
                ['category_product.product_id', '=', $id]
            ])
            ->get()->toArray();
    }
}
if (!function_exists('productRelated')) {

    function productRelated($id)
    {
        return Product::query()
            ->leftJoin('category_product', 'category_product.product_id', '=', 'products.id')
            ->leftJoin('categories', 'categories.id', '=', 'category_product.category_id')
            ->select('products.*', 'categories.*', 'category_product.*')
            ->where([
                ['category_product.category_id', '=', $id],
            ])
            ->get()->take(3);
    }
}
if (!function_exists('productBrandDetails')) {

    function productBrandDetails($id)
    {
        return Product::query()
            ->leftJoin('brand_product', 'brand_product.product_id', '=', 'products.id')
            ->leftJoin('brands', 'brands.id', '=', 'brand_product.brand_id')
            ->select('products.*', 'brands.*', 'brand_product.*')
            ->where([
                ['brand_product.product_id', '=', $id]
            ])
            ->first();
    }
}
if (!function_exists('productAttributeDetails')) {

    function productAttributeDetails($id)
    {
        return Product::query()
            ->leftJoin('attribute_product', 'attribute_product.product_id', '=', 'products.id')
            ->leftJoin('attributes', 'attributes.id', '=', 'attribute_product.attribute_id')
            ->select('products.*', 'attributes.*', 'attribute_product.*')
            ->where([
                ['attribute_product.product_id', '=', $id]
            ])
            ->first();
    }
}
if (!function_exists('highLow')) {

    function highLow()
    {
        $pagination = 10;
        return Product::orderBy('price', 'DESC')->paginate($pagination);

    }
}
if (!function_exists('getCustomers')) {

    function getCustomers()
    {
        return DB::table('customers')->get();
    }
}
if (!function_exists('countProducts')) {

    function countProducts()
    {
        return DB::table('products')->count();
    }
}
if (!function_exists('countCustomers')) {

    function countCustomers()
    {
        return DB::table('customers')->count();
    }
}
if (!function_exists('countPreviousMonthCustomers')) {

    function countPreviousMonthCustomers()
    {
        return DB::table('customers')
            ->whereBetween('created_at',
                [Carbon::now()->subMonths()->startOfMonth(), Carbon::now()->subMonths()->endOfMonth()]
            )->count();
    }
}
if (!function_exists('countCurrentMonthCustomers')) {

    function countCurrentMonthCustomers()
    {
        return DB::table('customers')
            ->whereBetween('created_at',
                [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
            )->count();
    }
}
if (!function_exists('percentCustomers')) {

    function percentCustomers()
    {
        $diffCust = countCurrentMonthCustomers() - countPreviousMonthCustomers();
        if ($diffCust != null && countPreviousMonthCustomers() > 0) {
            return $diffCust / countCurrentMonthCustomers() * 100; //increase percent
        }

    }
}
if (!function_exists('countOrders')) {

    function countOrders()
    {
        return DB::table('orders')
//            ->whereBetween('created_at',
//                [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
//            )
            ->orderBy('created_at')
            ->count();
    }
}
if (!function_exists('sellProducts')) {

    function sellProducts()
    {
        return DB::table('transactions')
//            ->whereBetween('created_at',
//                [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
//            )
            ->where('status', '=', 'completed')->count();
    }
}

if (!function_exists('previousMonthTransactions')) {

    function previousMonthTransactions()
    {
        return DB::table('transactions')
            ->whereBetween('created_at',
                [Carbon::now()->subMonths()->startOfMonth(), Carbon::now()->subMonths()->endOfMonth()]
            )
            ->sum('amount_paid');
    }
}
if (!function_exists('currentMonthTransactions')) {

    function currentMonthTransactions()
    {
        return DB::table('transactions')
            ->whereBetween('created_at',
                [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
            )
            ->sum('amount_paid');
    }
}
if (!function_exists('percentTransactions')) {

    function percentTransactions()
    {
        $diffTransactions = currentMonthTransactions() - previousMonthTransactions();
        if ($diffTransactions != null && previousMonthTransactions() > 0) {
            return $diffTransactions / previousMonthTransactions() * 100; //increase percent
        }

    }
}

if (!function_exists('previousMonthOrders')) {

    function previousMonthOrders()
    {
        return DB::table('orders')
            ->whereBetween('created_at',
                [Carbon::now()->subMonths()->startOfMonth(), Carbon::now()->subMonths()->endOfMonth()]
            )
            ->count();
    }
}
if (!function_exists('currentMonthOrders')) {

    function currentMonthOrders()
    {
        return DB::table('orders')
            ->whereBetween('created_at',
                [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
            )
            ->count();
    }
}
if (!function_exists('percentOrders')) {

    function percentOrders()
    {
        $diffOrders = currentMonthOrders() - previousMonthOrders();

        if ($diffOrders != null && previousMonthOrders() > 0) {
            return $diffOrders / previousMonthOrders() * 100; //increase percent
        }

    }
}

if (!function_exists('previousMonthProducts')) {

    function previousMonthProducts()
    {
        return DB::table('products')
            ->whereBetween('created_at',
                [Carbon::now()->subMonths()->startOfMonth(), Carbon::now()->subMonths()->endOfMonth()]
            )
            ->count();
    }
}
if (!function_exists('currentMonthProducts')) {

    function currentMonthProducts()
    {
        return DB::table('products')
            ->whereBetween('created_at',
                [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
            )
            ->count();
    }
}
if (!function_exists('percentProducts')) {

    function percentProducts()
    {
        $diffProducts = currentMonthProducts() - previousMonthProducts();

        if ($diffProducts != null && previousMonthProducts() > 0) {
            return $diffProducts / previousMonthProducts() * 100; //increase percent
        }

    }
}

if (!function_exists('groupedTransaction')) {

    function groupedTransaction()
    {
        return Transaction::select(
            DB::raw('year(created_at) as year'),
            DB::raw('DATE_FORMAT(created_at, "%M") as month'),
            DB::raw('sum(amount_paid) as amount_paid')
        )
            ->orderBy('created_at')
            ->groupBy('year')
            ->groupBy('month')
            ->get()
            ->toArray();
    }
}
if (!function_exists('lastMonthTransaction')) {

    function lastMonthTransaction()
    {
        $old   = Carbon::today()->monthName;
        $new   = 'Mese corrente';
        return Transaction::select(
            DB::raw('year(created_at) as year'),
            DB::raw('DATE_FORMAT(created_at, "%M") as month'),
            DB::raw('sum(amount_paid) as amount_paid')
        )
            ->whereBetween('created_at',
                [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
            )
            ->orderBy('created_at')
            ->groupBy('year')
            ->groupBy('month')
            ->first()

            ->toArray();
    }
}
if (!function_exists('getCategories')) {

    function getCategories()
    {
        return DB::table('categories')->where('parent_id', '=', null)->get();
//        return DB::table('products')->orderBy('Prezzo', 'DESC')->get();
    }
}
if (!function_exists('getSubCategories')) {

    function getSubCategories()
    {
        return DB::table('categories')->where('parent_id', '!=', null)->pluck('name');
//        return Product::distinct()->get('SottoCategoria');
//        return DB::table('products')->orderBy('Prezzo', 'DESC')->get();
    }
}

if (!function_exists('getFavorites')) {

    function getFavorites()
    {
        if (auth()->check())
            return Wishlist::where("customer_id", "=", auth()->guard('customer')->user()->id)->orderby('created_at', 'desc')->get();

    }
}

if (!function_exists('jsonString')) {

    function jsonString()
    {

        $jsonStringEN = file_get_contents(database_path('/store/catEN.json'));
        $dataEN = json_decode($jsonStringEN, true);

        $jsonStringIT = file_get_contents(database_path('/store/catIT.json'));
        $dataIT = json_decode($jsonStringIT, true);

        return collect([
            'dataEN' => $dataEN,
            'dataIT' => $dataIT,
        ]);

    }
}
if (!function_exists('getParcel')) {

    function getParcel()
    {
        $parcels = array(
            array(
                'weight' => 5, // kg
                'height' => 40, // cm
                'length' => 40, // cm
                'width' => 40, // cm
            ));

        return collect([
            'parcels' => $parcels,

        ]);

    }
}

if (!function_exists('getImgDir')) {

    function getImgDir()
    {

        $IMG_01 = '/uploads/products/images_600/';
        $IMG_02 = '/uploads/products/images_tab/';
        $IMG_03 = '/uploads/products/images_300/';
        $Logo = '/uploads/products/loghi_thumb/';
        $PITTO = '/uploads/products/images_ptg/';
        $ICO = '/uploads/products/images_ico/';

        return collect([
            'IMG_01' => $IMG_01,
            'IMG_02' => $IMG_02,
            'IMG_03' => $IMG_03,
            'Logo' => $Logo,
            'PITTO' => $PITTO,
            'ICO' => $ICO,

        ]);

    }
}
if (!function_exists('price')) {

    /**
     * @param $format (product obj|string|decimal)
     * @return string
     */
    function price($format): string
    {
        return number_format(floatval($format->price ?? $format), 2, ',', '');
    }
}
if (!function_exists('removeDecimal')) {

    /**
     * @param $format (product obj|string|decimal)
     * @return string
     */
    function removeDecimal($format): string
    {
        return number_format(floatval($format->price ?? $format), 0, ',', '');
    }
}
if (!function_exists('priceView')) {

    /**
     * @param $format (product obj|string|decimal)
     * @return string
     */
    function priceView($format): string
    {
        return number_format(floatval($format->price ?? $format), 2, ',', '.');
    }
}
if (!function_exists('getNumbers')) {
    function getNumbers()
    {
        $total = 0;
        $cart = getCart();
        if (isset($cart)) {
            foreach (session()->get('cart') as $details) {
                $sub_total = $details['price'] * $details['quantity'];
                $total += $sub_total;
            }
        }

        $tax = config('cart.tax') / 100;
        $discount = session()->get('coupon')['discount'] ?? 0;
        $code = session()->get('coupon')['name'] ?? null;
        $newSubtotal = ($total - $discount);

        if ($newSubtotal < 0) {
            $newSubtotal = 0;
        }

        $newTax = $newSubtotal * $tax;
        $newTotal = $newSubtotal + 7.00;

        return collect([
            'tax' => $tax,
            'discount' => $discount,
            'code' => $code,
            'total' => $total,
            'newSubtotal' => $newSubtotal,
            'newTax' => $newTax,
            'newTotal' => $newTotal,
        ]);

    }
}
