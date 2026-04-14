<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->group(function () {
    Route::get("/login", [AdminController::class, 'login_view']);
    Route::post("/login", [AdminController::class, 'login'])->name('admin.login');

    Route::resource("/", AdminController::class);
});