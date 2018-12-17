import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Errror from './Components/Error';
import ForgotPassword from './Components/Auth/ForgotPassword';
import Create from './Components/Store/Create';
import Products from './Components/Store/Products';
import Categories from './Components/Store/Categories';
import Manager from './Components/Store/Manager';
// import Layout from './Components/Layout/Layout';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact strict component={Homepage} />
                    <Route path='/signup' exact strict component={Signup} />
                    <Route path='/login' exact strict component={Login} />
                    <Route path='/forgot-password' exact strict component={ForgotPassword} />
                    <Route path='/store/create' exact strict component={Create} />
                    <Route path='/store/manager' exact strict component={Manager} />
                    <Route path='/store/products' exact strict component={Products} />
                    <Route path='/store/categories' exact strict component={Categories} />
                    <Route path='*' exact strict component={Errror} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Router;