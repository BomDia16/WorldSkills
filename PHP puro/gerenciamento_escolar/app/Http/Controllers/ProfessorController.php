<?php

namespace App\Http\Controllers;

use App\Models\Professor;
use Illuminate\Http\Request;

class ProfessorController extends Controller
{
    private $professor;

    public function __construct(Professor $professor)
    {
        $this->professor = $professor;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $professores = $this->professor->get();

        return view('professores.index', compact('professores'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('professores.register');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
