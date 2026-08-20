<?php

namespace Database\Seeders;

use App\Models\Attribute;
use App\Models\Category;
use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AttributesTableSeeder extends Seeder
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
            $code = $faker->sentence(1);
            $name = $faker->sentence(1);
            $slug = Str::slug($name);
            $attribute = Attribute::create([
                'code' => $code,
                'name' => $name,
                'slug' => $slug,
            ]);

            for ($j = 1; $j <= 2; $j++) {
                $code1 = $faker->sentence(1);
                $name1 = $faker->sentence(1);
                $slug1 = Str::slug($name1);
                $childAttribute = $attribute->childAttributes()->create([
                    'code' => $code1,
                    'name' => $name1,
                    'slug' => $slug1
                ]);

                for ($k = 1; $k <= 2; $k++) {
                    $code2 = $faker->sentence(1);
                    $name2 = $faker->sentence(1);
                    $slug2 = Str::slug($name2);
                    $childAttribute->childAttributes()->create([
                        'code' => $code2,
                        'name' => $name2,
                        'slug' => $slug2
                    ]);
                }
            }
        }
//        Attribute::create([
//            'code' => 'Taglia',
//            'name' => 'M',
//            'is_required' => 1,
//        ]);
//
//        // Create a color attribute
//        Attribute::create([
//            'code' => 'Colore',
//            'name' => 'Rosso',
//            'is_required' => 1,
//        ]);
    }
}
