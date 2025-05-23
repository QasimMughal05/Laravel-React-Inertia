<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
USe Inertia\Inertia;

use App\Http\Controllers\PageController;

// Route::get('/',function(){
//     return Inertia::render('Home');
// });

// Route::get('/',function(){
//     sleep(2);
//     return Inertia::render('Home', ['name' => 'Qasim Mughal']);
// });

Route::get('/',[PostController::class, 'index']);

Route::get('/aboutus', function() {
    return  inertia('About/AboutUs');
    
});
Route::resource('posts', PostController::class)->except('index');
