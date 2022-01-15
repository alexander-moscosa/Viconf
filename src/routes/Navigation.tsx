import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from '../modules/login/pages/Login';
import { CreateViconf } from '../modules/createViconf/pages/CreateViconf';
import { Register } from '../modules/register/pages/Register';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='join' element={ <Login /> } />
                <Route path='create' element={ <CreateViconf />} />
                <Route path='register' element={ <Register />} />
                <Route path='/*' element={ <Navigate to='/join' replace /> } />
            </Routes>
        </BrowserRouter>
    )
}
