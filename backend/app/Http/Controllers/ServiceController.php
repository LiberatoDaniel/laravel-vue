<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return ServiceResource::collection(Service::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function store(ServiceRequest $request)
    {
        $data = $request->validated();

        $service = Service::query()->create($data);

        return ServiceResource::make($service);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service $service
     * @return JsonResponse
     */
    public function show( Service $service)
    {
        return ServiceResource::make($service);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Service             $service
     * @return JsonResponse
     */
    public function update( ServiceRequest $request, Service $service)
    {
        $data = $request->validated();

        $service->update($data);

        return ServiceResource::make($service);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service $service
     * @return JsonResponse
     */
    public function destroy( Service $service)
    {
        $service->delete();

        return ServiceResource::make($service);
    }
}
