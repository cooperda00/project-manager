<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'description', "user_id"];

    public function tasks() {
        return $this->hasMany(Task::class);
    }
}
