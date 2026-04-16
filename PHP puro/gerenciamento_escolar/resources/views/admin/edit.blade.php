@extends('layout')

@section('titulo', 'Editar Admin ' . $admin->nome)

@section('content')
    <div class="flex flex-col items-center h-100 bg-gray-500">
        @if (session('error'))
            {{ session('error') }}
        @endif
        <form class="flex flex-col mt-10" action="{{ route('admin.update', $admin->id) }}" method="post">
            @csrf
            @method('put')

            <input type="text" name="nome" id="" class="bg-gray-400 border" placeholder="Nome" value="{{ $admin->nome }}">
            <input type="email" name="email" class="bg-gray-400 border mt-4" placeholder="Email" value="{{ $admin->email }}">
            
            <button type="submit" class=" hover:cursor-pointer hover:bg-gray-600 mt-10">Registrar</button>
        </form>

        <form action="{{ route('admin.teste') }}" method="post">
            @csrf
            <input type="text" name="cpf" id="">
            <button type="submit">Enviar</button>
        </form>
    </div>
@endsection