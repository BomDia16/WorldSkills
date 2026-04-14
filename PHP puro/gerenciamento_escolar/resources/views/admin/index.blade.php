<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Admins</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="h-screen flex justify-center items-center">
    <a href="{{ route('admin.create') }}">Admins cadastrados</a>
    <div class="flex flex-col items-center h-100 bg-gray-500">
        <h1>Admins</h1>
        <table class="w-full text-sm text-left text-gray-500 border-collapse">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th class="px-6 py-3 border-b">Nome</th>
                <th class="px-6 py-3 border-b">Email</th>
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
                    </tr>
                    
                @empty
                @endforelse
            </tbody>
        </table>
    </div>
</body>
</html>