<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return CustomerResource::collection(Customer::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CustomerRequest  $request
     * @return JsonResponse
     */
    public function store(CustomerRequest $request)
    {
        $data = $request->validated();

        $customer = Customer::query()->create($data);

        return CustomerResource::make($customer);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $customer = Customer::query()->findOrFail($id);
        return CustomerResource::make($customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  CustomerRequest  $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(CustomerRequest $request, $id)
    {
        $data = $request->validated();

        $customer = Customer::query()->findOrFail($id);
        $customer->fill($data)->save();

        return CustomerResource::make($customer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $customer = Customer::query()->findOrFail($id);
        $customer->delete();
        return CustomerResource::make($customer);
    }
}
