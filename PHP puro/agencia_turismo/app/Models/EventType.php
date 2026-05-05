<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventType extends Model
{
    protected $table = 'eventtypes';

    public function events() {
        return $this->hasMany(Event::class, 'type_id');
    }
}
