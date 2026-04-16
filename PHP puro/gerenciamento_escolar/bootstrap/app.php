<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->redirectGuestsTo(function (Request $request) {
            if ($request->is('admin') || $request->is('admin/*')) {
                return route('admin.login_view');
            }
            return route('login');
        });
    })
    ->withExceptions(function (Exceptions $exceptions) {
        
        // // Aqui configuramos o redirecionamento quando não estiver logado
        // $exceptions->redirectTo(function (Request $request) {
        //     // Se a requisição espera um JSON (como uma API), não redirecionamos
        //     if ($request->expectsJson()) {
        //         return null;
        //     }

        //     // Se o usuário tentou acessar qualquer rota que comece com 'admin'
        //     if ($request->is('admin') || $request->is('admin/*')) {
        //         return route('admin.login_view');
        //     }

        //     // Caso contrário, manda para o login padrão (se houver)
        //     return route('login');
        // });
    })->create();
