<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Customer::factory(50)->create();
        $this->call(UsersTableSeeder::class);
        $this->call(CustomerTableSeeder::class);

        $this->call(CategoriesTableSeeder::class);
        $this->call(AttributesTableSeeder::class);
        $this->call(BrandsTableSeeder::class);
//        Product::factory()->count(50)->create();

        $this->call(ProductsTableSeeder::class);
        $this->call(TransactionSeeder::class);

//        Tag::factory()->count(50)->create();
        $this->call(SliderTableSeeder::class);
        $this->call(CouponTableSeeder::class);
    }
}
