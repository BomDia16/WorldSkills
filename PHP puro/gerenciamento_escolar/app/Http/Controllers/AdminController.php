<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    private $admin;

    public function __construct(Admin $admin)
    {
        $this->admin = $admin;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admins = $this->admin->get();

        return view('admin.index', 
                    compact('admins'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("admin.register");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->all();

        if ($dados['senha'] != $dados['confirmarSenha']) {
            return redirect()
                    ->route("admin.create")
                    ->with("error", "As senhas não são iguais!");
        }

        $cadastrar = $this->admin->inserir($dados);
        return redirect()
                ->route("admin.create")
                ->with("error", $cadastrar['message']);
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

    public function login_view() 
    {
        return view("admin.login");
    }
}
