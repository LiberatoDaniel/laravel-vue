<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderService extends Model
{
    protected $guarded = ['id'];

    // customer
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    // service
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
