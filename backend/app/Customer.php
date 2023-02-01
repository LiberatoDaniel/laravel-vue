<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $guarded = ['id'];

    // orderService
    public function orderService()
    {
        return $this->hasMany(OrderService::class);
    }
}
