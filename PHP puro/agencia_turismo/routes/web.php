<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [UserController::class, 'login_view'])->name('login_view');
Route::post('/login', [UserController::class, 'login'])->name('login');

Route::middleware('auth:web')->group(function () {
    Route::get('/home', [UserController::class, 'home'])->name('home');

    // admin
    Route::prefix("/admin")->group(function () {
        Route::get("/events/new", [EventController::class, 'new_event'])->name('event.new');
        Route::resource("/events", EventController::class);
    });
});