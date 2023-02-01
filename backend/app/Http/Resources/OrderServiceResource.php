<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderServiceResource extends JsonResource
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
            'id'                    => $this->id ,
            'service_id'            => $this->service_id ,
            'customer_id'           => $this->customer_id ,
            'customer_name'         => $this->whenLoaded( 'customer' , function() {
                return $this->customer->name;
            } ) ,
            'service_name'          => $this->whenLoaded( 'service' , function() {
                return $this->service->name;
            } ) ,
            'date_opened'           => $this->date_opened ,
            'created_at'            => $this->created_at ,
            'updated_at'            => $this->updated_at ,
            'date_opened_formatted' => ( new Carbon( $this->date_opened ) )->format( 'd/m/Y' ) ,
            'created_at_formatted'  => $this->created_at->format( 'd/m/Y' ) ,
            'updated_at_formatted'  => $this->updated_at->format( 'd/m/Y' ) ,
        ];
    }
}
