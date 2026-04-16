<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('titulo')</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100">
    <div class="flex min-h-screen">
        
        <aside class="w-64 bg-slate-800 text-white shrink-0">
            <div class="p-6 text-2xl font-bold border-b border-slate-700">
                Gerenciamento Escolar
            </div>
            <nav class="mt-6">
                <a href="{{ route('admin.index') }}" class="block py-3 px-6 hover:bg-slate-700 transition">Admins</a>
                <a href="#" class="block py-3 px-6 hover:bg-slate-700 transition">Cursos</a>
                <a href="{{ route('professor.index') }}" class="block py-3 px-6 hover:bg-slate-700 transition">Professores</a>
                <a href="#" class="block py-3 px-6 hover:bg-slate-700 transition">Alunos</a>
                
                <form action="{{ route('admin.logout') }}" method="POST" class="mt-10">
                    @csrf
                    <button type="submit" class="w-full text-left py-3 px-6 text-red-400 hover:bg-slate-700 transition hover:cursor-pointer">
                        Sair
                    </button>
                </form>
            </nav>
        </aside>

        <main class="grow p-8">
            <header class="mb-8">
                <h1 class="text-3xl font-semibold text-gray-800">@yield('titulo')</h1>
            </header>

            <div class="bg-white rounded-lg shadow-sm p-6">
                @yield('content')
            </div>
        </main>

    </div>
</body>
</html>