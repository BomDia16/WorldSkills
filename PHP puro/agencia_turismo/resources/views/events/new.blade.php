<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Detalhes do Evento - Shan Yu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Importando os assets -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
</head>

<body>
<!-- Header Simples -->
<nav class="navbar bg-white shadow-sm px-5 py-3">
    <div class="container-fluid">
        <img src="assets/img/brand.png" alt="Shanyu">
        <div>
            <a class="me-4 text-dark text-decoration-none" href="{{ route('events.index') }}">Eventos</a>
            <a class="me-4 text-dark text-decoration-none" href="#">Pontos Turísticos</a>
            <a class="me-4 text-dark text-decoration-none" href="#">Minhas avaliações</a>
            <button class="btn btn-danger">Sair</button>
        </div>
    </div>
</nav>

<div class="container-fluid px-5 my-3">
    <div class="row g-4">
        <form action="{{ route('events.store') }}" method="post" style="display: flex; flex-direction:column">
            @csrf
            <label for="name" class="form-label">Nome</label>
            <input type="text" name="name" id="">

            <label for="descricao" class="form-label">Descrição</label>
            <input type="text" name="descricao" id="">

            <label for="date" class="form-label">Data</label>
            <input type="date" name="date" id="">

            <label for="start_time" class="form-label">Horário de Início</label>
            <input type="time" name="start_time" id="">

            <label for="end_time" class="form-label">Horário de Fim</label>
            <input type="time" name="end_time" id="">
            
            <label for="image" class="form-label">Imagem</label>
            <input type="file" name="image" id="" accept=".png,.jpg,.jpeg">

            <label for="folheto" class="form-label">Folheto</label>
            <input type="file" name="folheto" id="" accept=".pdf">

            <label for="type_event" class="form-label">Tipo de Evento</label>
            <select name="type_event" id="">
                @forelse($event_types as $type)
                    <option value="{{ $type->id }}">{{ $type->name }}</option>
                @empty
                @endforelse
            </select>

            <label for="latitude" class="form-label">Latitude</label>
            <input type="number" step="0.01" min="30.70" max="31.53" name="latitude" id="">

            <label for="longitude" class="form-label">Longitude</label>
            <input type="number" step="0.01" min="120.85" max="122.12" name="longitude" id="">

            <label for="district" class="form-label">Distrito</label>
            <select name="district" id="">
                @forelse($districts as $district)
                    <option value="{{ $district->id }}">{{ $district->name }}</option>
                @empty
                @endforelse
            </select>
            
            <label for="quantidade_pessoas" class="form-label">Quantidade Pessoas</label>
            <input type="number" min="100" name="quantidade_pessoas" id="">

            <br>

            <button type="submit">Enviar</button>
        </form>
    </div>
</div>


<script src="assets/js/bootstrap.min.js"></script>
</body>

</html>
