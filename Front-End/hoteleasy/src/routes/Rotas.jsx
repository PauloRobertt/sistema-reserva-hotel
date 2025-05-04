import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Telas de Authenticação
import Login from '../pages/LoginPage/Login.jsx';
import Register from '../pages/RegisterPage/Register.jsx';

//Tela Home
import Home from '../pages/HomePage/HomePage.jsx';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}