import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import React from 'react';
import Tutorial1 from './pages/tutoriais/Tutorial1.jsx';
import Tutorial2 from './pages/tutoriais/Tutorial2.jsx';
import Tutorial3 from './pages/tutoriais/Tutorial3.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/tutorial1' element={ <Tutorial1 /> } />
        <Route path='/tutorial2' element={ <Tutorial2 /> } />
        <Route path='/tutorial3' element={ <Tutorial3 /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
