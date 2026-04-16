<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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
        if (!$admin = $this->admin->find($id)) {
            return redirect()->route('admin.index');
        }

        return view('admin.edit', compact('admin'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if (!$admin = $this->admin->find($id)) {
            return redirect()->route('admin.index');
        }

        $dados = $request->all();

        $editando = $admin->update($dados);

        if ($editando) {
            return redirect()->back()->with('error', "Admin editado com sucesso");
        }

        return redirect()->back()->with("error", 'Erro ao editar Admin');
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

    public function login(Request $request)
    {
        $dados = $request->all();

        $login = $this->admin->login($dados);

        if (!$login) {
            return redirect()
                    ->route('admin.login_view')
                    ->with('error', 'Credenciais não batem com os nossos registros');
        }
        return redirect()->intended(route('admin.index'));
    }

    public function logout()
    {
        auth()->guard('admin')->logout();
        return redirect()->route('admin.login_view');
    }

    public function teste(Request $request)
    {
        $dados = $request->all();
        $cpf = $dados['cpf'];
        $api = Http::get("viacep.com.br/ws/$cpf/json/");
        $response = $api->json();

        dd($response);
    }
}
