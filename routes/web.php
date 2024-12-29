<?php

use Illuminate\Support\Facades\Route;
USe Inertia\Inertia;

use App\Http\Controllers\PageController;

Route::get('/',function(){
    return Inertia::render('Home');
});

Route::get('/aboutus', function() {
    // dd("hello about us page");
    return  inertia('About/AboutUs');
});