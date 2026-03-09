import ReactDOM from 'react-dom/client';
import './style.css'
import Signin from './App.js';
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

