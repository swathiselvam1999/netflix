import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
import Signin from './App';
import Dashboard from './dashboard';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
);

