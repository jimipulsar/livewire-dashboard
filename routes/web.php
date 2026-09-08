<?php

use App\Http\Controllers\Auth\Admin\LoginAdminController;
use App\Http\Controllers\Auth\Admin\RegisterAdminController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::redirect('/', env('APP_ADMIN_URL'))->name('index');

Auth::routes();

Route::post('/login', [LoginController::class, 'login'])->name('customerLogin');
Route::post('/login', [LoginController::class, 'postLogin'])->name('customerLoginPost');

Route::any( env('APP_ADMIN_URL') . '/register', [RegisterAdminController::class, 'showRegistrationForm'])->name('registerAdmin');
Route::post(env('APP_ADMIN_URL') . '/register', [RegisterAdminController::class, 'register'])->name('registerAdminPOST');

Route::get(env('APP_ADMIN_URL'),[LoginAdminController::class, 'getLogin'])->name('adminLogin');
Route::post(env('APP_ADMIN_URL'), [LoginAdminController::class, 'postLogin'])->name('adminLoginPost');
