<?php

namespace Database\Seeders;

use App\Models\Visitor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Carbon;

class VisitorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Faker $faker): void
    {
        $faker = Faker::create();

        for ($i = 1; $i <= 20; $i++) {
            $randIP = mt_rand(0, 255) . "." . mt_rand(0, 255) . "." . mt_rand(0, 255) . "." . mt_rand(0, 255);

            Visitor::create([
                 'ip_address'  => $randIP,
                 'visited_at'  => $faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31'),
                'created_at'  => $faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31'),
                'updated_at'  => $faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31')
                ]);
        }
    }
}
