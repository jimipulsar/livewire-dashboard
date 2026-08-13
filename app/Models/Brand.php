<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{

    use HasFactory;
    protected $guarded = [];
    protected $table = 'brands';
    protected $fillable  = ['name', 'slug','parent_id', 'description','cover','link'];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function parentBrand()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function childBrands()
    {
        return $this->hasMany(self::class,  'parent_id');
    }

}
