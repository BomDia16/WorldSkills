<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class Event extends Model
{
    protected $table = 'events';

    protected $fillable = [
        'name',
        'description',
        'date',
        'start_time',
        'end_time',
        'type_id',
        'latitude',
        'longitude',
        'district_id',
        'access_link',
        'people_quantity',
        'created_by',
        'updated_by'
    ];

    public function inserir($dados) {
        $access_link = Str::slug($dados['name'], '-');

        $cadastrar = $this->create([
            'name'  => $dados['name'],
            'description'  => $dados['descricao'],
            'date'  => $dados['date'],
            'start_time'  => $dados['start_time'],
            'end_time'  => $dados['end_time'],
            'people_quantity'  => $dados['quantidade_pessoas'],
            'type_id'  => $dados['type_event'],
            'latitude'  => $dados['latitude'],
            'longitude'  => $dados['longitude'],
            'district_id'  => $dados['district'],
            'access_link' => $access_link,
            'created_by' => Auth::user()->id,
            'updated_by' => Auth::user()->id
        ]);

        $this->salvarImagem($dados['imagem']);

        if ($cadastrar) {
            return [
                'status' => 'success',
                'message' => 'Evento cadastrado com sucesso'
            ];
        } else {
            return [
                'status' => 'error',
                'message' => 'Erro ao cadastrar o evento'
            ];
        }
    }

    public function type() {
        return $this->belongsTo(EventType::class, 'type_id');
    }

    public function salvarImagem($imagem) {

    }
}
