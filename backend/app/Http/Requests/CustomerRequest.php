<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
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
            'name'        => 'required|string|max:255',
            'email'       => 'required|string|email|max:255|unique:customers',
            'street'      => 'required|string|max:255',
            'number_home' => 'required|numeric|min:1',
            'complement'  => 'required|string|max:255',
            'district'    => 'required|string|max:255',
            'city'        => 'required|string|max:255',
            'state'       => 'required|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'name.required'        => 'O campo nome é obrigatório',
            'email.required'       => 'O campo email é obrigatório',
            'email.unique'         => 'O email informado já está cadastrado ! Tente outro email !',
            'street.required'      => 'O campo rua é obrigatório',
            'number_home.required' => 'O campo número é obrigatório',
            'number_home.min'      => 'O campo número da casa deve ser maior que 0',
            'complement.required'  => 'O campo complemento é obrigatório',
            'district.required'    => 'O campo bairro é obrigatório',
            'city.required'        => 'O campo cidade é obrigatório',
            'state.required'       => 'O campo estado é obrigatório',
        ];
    }
}
