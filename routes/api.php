<?php

use Illuminate\Http\Request;

//Project
Route::group(["middleware" => "auth:api"], function(){
    Route::get('projects', 'ProjectController@index');
    Route::post('projects', 'ProjectController@store');
    Route::get('projects/{id}', 'ProjectController@show'); //Get the project and asscoiated tasks
    Route::put('projects/{project}', 'ProjectController@update');
    Route::delete('projects/{project}', 'ProjectController@destroy');
});

//Task
Route::group(["middleware" => "auth:api"], function(){
    Route::get('tasks', 'TaskController@index');
    Route::post('tasks', 'TaskController@store');
    Route::put('tasks/{task}', 'TaskController@markAsCompleted');
    Route::delete('tasks/{task}', 'TaskController@destroy');
});

//Auth
Route::post("/register", "AuthController@register");
Route::post("/login", "AuthController@login");

Route::group(["middleware" => "auth:api"], function(){
    Route::post("/logout", "AuthController@logout");
});