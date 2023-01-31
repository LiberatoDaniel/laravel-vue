<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'          => $this->id ,
            'name'        => $this->name ,
            'email'       => $this->email ,
            'street'      => $this->street ,
            'number_home' => $this->number_home ,
            'complement'  => $this->complement ,
            'district'    => $this->district ,
            'city'        => $this->city ,
            'state'       => $this->state ,
            'created_at'  => $this->created_at ,
            'updated_at'  => $this->updated_at ,
        ];
    }
}
