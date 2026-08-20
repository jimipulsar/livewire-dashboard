<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\SubOrder;
use App\Models\SubOrderItem;
use App\Models\Transaction;
use Faker\Provider\DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $this->customers = Customer::all();
        $this->products = Product::all();

        $status = ['processing',
            'pending',
            'completed',
            'decline'];
        for ($i = 1; $i <= 20; $i++) {
            $order = Order::create([
                'id' => $faker->unique()->numberBetween(1, 20),
                'order_number' => strtoupper(uniqid()),
                'is_paid' => (bool)rand(0, 1),
                'is_shipped' => (bool)rand(0, 1),
                'shipping_address' => $faker->unique()->address(),
                'shipping_phone' => $faker->unique()->phoneNumber(),
                'shipping_city' => $faker->unique()->city(),
                'shipping_province' => 'RM',
                'shipping_company' => 'Zara S.r.l.',
                'shipping_zipcode' => '00118',
                'shipping_country' => 'IT',
                'item_count' => $faker->numberBetween(1, 2),
                'grand_total' => mt_rand(99, 4999) / 100,
                'email' => $this->customers[rand(0, count($this->customers) - 1)]->email,
                'payment_method' => 'card',
                'customer_id' => $this->customers[rand(0, count($this->customers) - 1)]->id,
                'status' => $faker->randomElement($status),
                'created_at'  => $faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-' . Carbon::now()->day),
                'updated_at'  => $faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-' . Carbon::now()->day),
            ]);

            $product = Product::findOrFail($this->products[rand(0, count($this->products) - 1)]->id);


            $cart[$this->products[rand(0, count($this->products) - 1)]->id] = [
                "id" => $product->id,
                "name" => $product->item_name,
                "stock_qty" => $product->stock_qty,
                "quantity" => 1,
                "price" => $product->price,
                "Descrizione" => $product->Descrizione,
                "slug" => Str::slug($product->Descrizione),
                "img_01" => $product->img_01
            ];

            foreach ($cart as $item) {
                $order->items()->attach($item['id'], ['price' => $item['price'] * $item['quantity'], 'quantity' => $item['quantity']]);

            }
            $orderItems = $order->items;

            foreach ($orderItems->groupBy('order_id') as $prods) {

                $suborder = SubOrder::create([
                    'order_id' => $order->id,
                    'customer_id' => $order->customer_id,
                    'grand_total' => $order->grand_total,
                    'item_count' => $order->item_count,
                ]);

                foreach ($prods as $produz) {
                    $suborder->items()->attach($produz->id, ['price' => $produz->pivot->price, 'quantity' => $produz->pivot->quantity]);

                }

            }

        }
        $this->suborders = SubOrder::all();
        foreach ( $this->suborders as $ord) {
            $transaction = Transaction::create([
                'sub_order_id' => $ord->order_id,
                'transaction_id' => $ord->id,
                'amount_paid' => $ord->grand_total,
                'payer_email' => $order->customer->email,
                'payer_order_id' => $order->id,
                'customer_id' => $this->customers[rand(0, count($this->customers) - 1)]->id,
                'status' => 'completed',
                'created_at' => $faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-' . Carbon::now()->day),
                'updated_at' => $faker->dateTimeBetween('2026-01-01', '2026-' . Carbon::now()->month . '-' . Carbon::now()->day),
            ]);
        }


    }
}
