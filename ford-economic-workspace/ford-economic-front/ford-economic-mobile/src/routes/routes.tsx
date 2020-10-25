import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import MainMenu from '../pages/MainMenu';

const Routes = () =>{
    return(
        <BrowserRouter>
          <Route component={Login} path="/" exact />
          <Route component={MainMenu} path="/main" exact />
        </BrowserRouter>
    )
}

export default Routes;