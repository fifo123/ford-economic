import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import MainMenu from '../pages/MainMenu';
import Tips from '../pages/Tips';

const Routes = () =>{
    return(
        <BrowserRouter>
          <Route component={Login} path="/" exact />
          <Route component={MainMenu} path="/main" exact />
          <Route component={Tips} path="/tips" exact />
        </BrowserRouter>
    )
}

export default Routes;