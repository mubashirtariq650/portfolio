<?php

use App\Http\Controllers\ProductController;
use App\Models\Product;
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

Route::get('/',[ProductController::class,'main'])->name('main');
Route::get('/about',[ProductController::class,'about'])->name('about');
Route::get('/contact',[ProductController::class,'contact'])->name('contact');
Route::get('/portfolio',[ProductController::class,'portfolio'])->name('portfolio');


