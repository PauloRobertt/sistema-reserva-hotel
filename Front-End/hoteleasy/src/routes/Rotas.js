import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../components/pages/Login.js';
import Register from '../components/pages/Register.js';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}