import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Home from './pages/home/home';
import Perros from './pages/perros/Perros';
import Error404 from './pages/error404/error404';
import {
    BrowserRouter, 
    Routes,
    Route
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
    <Routes>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/perros">
          <Perros />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
        </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);
