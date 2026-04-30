<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function login_view() {
        return view('index');
    }

    public function login(Request $request) {
        $dados = $request->all();

        // dd(Hash::make($dados['password']));

        $login = $this->user->login($dados);

        if (!$login) {
            dd($login);
            return redirect()
                    ->route('login_view')
                    ->with('error', 'Credenciais não batem com os nossos registros');
        }
        return redirect()->intended(route('home'));
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('admin.login_view');
    }

    /**
     * Display a listing of the resource.
     */
    public function home()
    {
        return view('welcome');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
