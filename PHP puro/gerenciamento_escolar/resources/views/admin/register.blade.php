<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Registrar</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="h-screen flex justify-center items-center">
    <div class="flex flex-col items-center h-100 bg-gray-500">
        <h1>Registrar</h1>
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
    </div>
</body>
</html>