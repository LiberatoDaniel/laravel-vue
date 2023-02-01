<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderServiceRequest;
use App\Http\Resources\OrderServiceResource;
use App\OrderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return OrderServiceResource::collection( OrderService::query()->with(['customer', 'service'])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  OrderServiceRequest  $request
     * @return JsonResponse
     */
    public function store(OrderServiceRequest $request)
    {
        $data = $request->validated();

        $orderService = OrderService::query()->create($data);

        return OrderServiceResource::make($orderService->load(['customer', 'service']));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\OrderService  $orderService
     * @return JsonResponse
     */
    public function show(OrderService $orderService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OrderService  $orderService
     * @return JsonResponse
     */
    public function update(Request $request, OrderService $orderService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OrderService  $orderService
     * @return JsonResponse
     */
    public function destroy(OrderService $orderService)
    {
        //
    }
}
