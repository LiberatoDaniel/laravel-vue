<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'   => 'required|string|max:255',
            'active' => 'required|boolean',
        ];
    }

    public function messages()
    {
        return [
            'name.required'   => 'O campo nome é obrigatório',
            'active.required' => 'O campo ativo é obrigatório',
        ];
    }
}
