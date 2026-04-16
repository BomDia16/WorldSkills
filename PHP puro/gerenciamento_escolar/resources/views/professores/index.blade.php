@extends('layout')

@section('titulo', 'Professores')

@section('content')
    <a href="{{ route('professor.create') }}">Cadastrar professor</a>
    <div class="flex flex-col items-center h-100 bg-gray-500">
        <h1>Professores</h1>
        <table class="w-full text-sm text-left text-gray-500 border-collapse">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th class="px-6 py-3 border-b">Nome</th>
                <th class="px-6 py-3 border-b">Email</th>
                <th class="px-6 py-3 border-b">-</th>
            </tr>
            </thead>    
            <tbody>
                @forelse($professores as $professor)
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <td class="px-6 py-4 font-medium text-gray-900">
                            {{ $professor->nome }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $professor->email }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="{{ route('professor.edit', $professor->id) }}">Editar</a>
                        </td>
                    </tr>
                    
                @empty
                @endforelse
            </tbody>
        </table>
    </div>
@endsection