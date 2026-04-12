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
        Schema::create('alunos', function (Blueprint $table) {
            $table->id();
            $table->string("nome");
            $table->string("email")->unique();
            $table->string("senha", 400);
            $table->string("telefone", 25);
            $table->foreignId("turma_id");
            $table->timestamps();

            // foreign Id
            $table->foreign("turma_id")->references("id")->on("turmas");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alunos');
    }
};
