@extends('layout')

@section('titulo', 'Admins')

@section('content')
    <a href="{{ route('admin.create') }}">Cadastrar admin</a>
    <div class="flex flex-col items-center h-100 bg-gray-500">
        <h1>Admins</h1>
        <table class="w-full text-sm text-left text-gray-500 border-collapse">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th class="px-6 py-3 border-b">Nome</th>
                <th class="px-6 py-3 border-b">Email</th>
                <th class="px-6 py-3 border-b">-</th>
            </tr>
            </thead>    
            <tbody>
                @forelse($admins as $admin)
                    <tr class="bg-white border-b hover:bg-gray-50">
                        <td class="px-6 py-4 font-medium text-gray-900">
                            {{ $admin->nome }}
                        </td>
                        <td class="px-6 py-4">
                            {{ $admin->email }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="{{ route('admin.edit', $admin->id) }}">Editar</a>
                        </td>
                    </tr>
                    
                @empty
                @endforelse
            </tbody>
        </table>
    </div>
@endsection