<?php

namespace Database\Factories;

use App\Models\Visitor;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends Factory<Visitor>
 */
class VisitorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'visited_at'  => $this->faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31'),
            'created_at'  => $this->faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31'),
            'updated_at'  => $this->faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31'),
        ];
    }
}
