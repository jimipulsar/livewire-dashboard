<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    use HasFactory;
    protected $table = 'attributes';

    /**
     * @var array
     */
    protected $fillable = [
        'name', 'parent_id','slug','code','is_required', 'user_id'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function parentAttribute()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function childAttributes()
    {
        return $this->hasMany(self::class,  'parent_id');
    }
}
