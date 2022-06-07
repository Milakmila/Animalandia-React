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
    Route, 
    Navigate
  } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/perros' element={<Perros/>}></Route>

    <Route path='*' element={<Error404 />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
        </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);
