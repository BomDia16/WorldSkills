@extends('layout')

@section('titulo', 'Registrar Admins')

@section('content')
    <div class="flex flex-col items-center h-100 bg-gray-500">
        @if (session('error'))
            {{ session('error') }}
        @endif
        <form class="flex flex-col mt-10" action="{{ route('admin.store') }}" method="post">
            @csrf
            <input type="text" name="nome" id="" class="bg-gray-400 border" placeholder="Nome">
            <input type="email" name="email" class="bg-gray-400 border mt-4" placeholder="Email">
            <input type="password" name="senha" class="bg-gray-400 border mt-4" placeholder="Senha" id="">
            <input type="password" name="confirmarSenha" class="bg-gray-400 border mt-4" placeholder="Confirmar Senha" id="">
            <button type="submit" class=" hover:cursor-pointer hover:bg-gray-600 mt-10">Registrar</button>
        </form>

        <form action="{{ route('admin.teste') }}" method="post">
            @csrf
            <input type="text" name="cpf" id="">
            <button type="submit">Enviar</button>
        </form>
    </div>
@endsection