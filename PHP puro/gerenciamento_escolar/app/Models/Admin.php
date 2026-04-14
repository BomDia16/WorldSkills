<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

// #[Fillable(['nome', 'email', 'senha'])]
class Admin extends Model
{
    protected $table = 'admins';
    protected $fillable = ['nome', 'email', 'senha'];

    public function inserir($dados) {
        $cadastrar = $this->create([
            'nome'  => $dados['nome'],
            'email' => $dados['email'],
            'senha' => $dados['senha']
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
}
