<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Product extends Model
{

    use HasFactory;

    protected $guarded = [];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];
    public function getRouteKeyName()
    {
        return 'slug';
    }


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function customers()
    {
        return $this->belongsTo(Customer::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
    public function brands()
    {
        return $this->belongsToMany(Brand::class);
    }
    public function attributes()
    {
        return $this->belongsToMany(Attribute::class);
    }

//    public function scopeSearch($query, $q)
//    {
//        if ($q == null) return $query;
//        return $query
//            ->where('item_name', 'LIKE', "%{$q}%");
//
//    }

//    public function tags()
//    {
//        return $this->morphToMany(Tag::class, 'taggable');
//    }
    public function wishlist()
    {
        return $this->hasMany(Wishlist::class);
    }
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->timezone('Europe/Rome')->format('Y-m-d H:i:s');
    }
}
