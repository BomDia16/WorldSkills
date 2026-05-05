<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Event;
use App\Models\EventType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    private $event;

    public function __construct(Event $event) {
        $this->event = $event;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $events = Event::with('type')->get();

        return view("list_event", compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function new_event() {
        $admin = Auth::user()->is_admin;
        $event_types = EventType::get();
        $districts = District::get();

        // dd("gerw");
        // dd(Auth::user()->is_admin);
        // dd($admin);
        // dd($admin == 1);

        if ($admin == 1) {
            return view('events.new', compact('event_types', 'districts'));
        }

        return redirect()->route('home');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->all();

        $inserir = $this->event->inserir($dados);

        if ($inserir['status'] == 'success') {
            redirect()->route('events.index');
        }
        return redirect()->back();
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
