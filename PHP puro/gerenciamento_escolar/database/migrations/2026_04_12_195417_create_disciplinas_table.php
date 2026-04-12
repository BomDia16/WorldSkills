<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('disciplinas', function (Blueprint $table) {
            $table->id();
            $table->string("nome")->unique();
            $table->foreignId("turma_id");
            $table->foreignId("professor_id");
            $table->timestamps();

            // foreign ids
            $table->foreign("turma_id")->references("id")->on("turmas");
            $table->foreign("professor_id")->references("id")->on("professores");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disciplinas');
    }
};
