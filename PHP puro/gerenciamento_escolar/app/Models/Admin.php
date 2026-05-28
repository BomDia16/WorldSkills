<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;

// #[Fillable(['nome', 'email', 'senha'])]
class Admin extends Authenticatable
{
    protected $table = 'admins';
    protected $fillable = ['nome', 'email', 'senha'];

    public function getAuthPassword()
    {
        return $this->senha;
    }

    public function inserir($dados) {
        $cadastrar = $this->create([
            'nome'  => $dados['nome'],
            'email' => $dados['email'],
            'senha' => bcrypt($dados['senha'])
        ]);

        if ($cadastrar) {
            return [
                'status'    => true,
                'message'   => "Admin cadastrado com suceeso!"
            ];
        } else {
            return [
                'status'    => false,
                'message'   => "Falha ao cadastrar Admin!"
            ];
        }
    }

    public function login($dados) {
        $credenciais = [
            'email' => $dados['email'],
            'password' => $dados['senha']
        ];
        return Auth::guard('admin')->attempt($credenciais);
    }
}
