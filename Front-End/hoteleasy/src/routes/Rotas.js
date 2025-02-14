import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Telas de Authenticação
import Login from '../components/pages/Login.js';
import Register from '../components/pages/Register.js';

//Tela Home
import Home from '../components/pages/HomePage.js';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}