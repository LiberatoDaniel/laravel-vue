<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray( $request )
    {
        return [
            'id'                  => $this->id ,
            'name'                => $this->name ,
            'active'              => $this->active ,
            'created_at'          => $this->created_at ,
            'updated_at'          => $this->updated_at ,
            'created_at_formated' => $this->created_at->format( 'd/m/Y' ) ,
            'updated_at_formated' => $this->updated_at->format( 'd/m/Y' ) ,
        ];
    }
}
