<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
     * @param  int|string $id
     * @return JsonResponse
     */
    public function show($id)
    {
        $service = Service::query()->findOrFail($id);
        return ServiceResource::make($service);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int|string $id
     * @return JsonResponse
     */
    public function update( ServiceRequest $request, $id)
    {
        $data = $request->validated();

        $service = Service::query()->findOrFail($id);
        $service->update($data);
        $service->refresh();

        return ServiceResource::make($service);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service $service
     * @param  int|string $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        $service = Service::query()->findOrFail($id);

        if ($service->orderService()->count() > 0) {
            return response()->json([
                'errors' => [
                    'message' => ['Não é possível excluir um serviço que está sendo usado em uma ordem de serviço.']
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $service->delete();

        return ServiceResource::make($service);
    }
}
