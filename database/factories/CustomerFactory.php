<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    public function definition()
    {
        return [
            'billing_name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'billing_address' => $this->faker->unique()->address(),
            'billing_phone' => $this->faker->unique()->phoneNumber(),
            'billing_city' => $this->faker->unique()->city(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'created_at'  => $this->faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31'),
            'updated_at'  => $this->faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-31'),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
