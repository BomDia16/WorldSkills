<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfessorController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->controller(AdminController::class)->group(function () {
    Route::get("/login", 'login_view')->name('login_view');
    Route::post("/login", 'login')->name('login');
    Route::post('/logout', 'logout')->name('logout');

    Route::post('/teste', 'teste')->name('teste');
});

Route::middleware('auth:admin')->resource("/admin", AdminController::class);
    
Route::prefix('professor')->name('professor.')->middleware('auth:admin')->controller(ProfessorController::class)->group(function () {
    Route::resource('/', ProfessorController::class);
});