<?php

namespace Database\Seeders;

use App\Models\Area;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AreasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $areas = [
            ['nome' => 'Tecnologia da Informação'],
            ['nome' => 'Tecnologia da moda'],
            ['nome' => 'Automação Industrial'],
            ['nome' => 'Metal Mecânica'],
            ['nome' => 'Biotecnologia'],
            ['nome' => 'Eletromecânica']
        ];

        foreach ($areas as $area) {
            Area::create($area);
        }
    }
}
