<?php

namespace Database\Seeders;

use App\Models\Brand;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 1; $i <= 2; $i++) {
            $name = $faker->sentence(1);
            $slug = Str::slug($name);
            $category = Brand::create([
                'name'        => $name,
                'slug' => $slug ,
            ]);

            for ($j = 1; $j <= 2; $j++) {
                $name1 = $faker->sentence(1);
                $slug1 = Str::slug($name1);
                $childCategory = $category->childBrands()->create([
                    'name'        =>   $name1 ,
                    'slug' =>   $slug1,
                ]);

                for ($k = 1; $k <= 2; $k++) {
                    $name2 = $faker->sentence(1);
                    $slug2 = Str::slug($name2);
                    $childCategory->childBrands()->create([
                        'name'        =>  $name2,
                        'slug' =>     $slug2,
                    ]);
                }
            }
        }
    }
}
