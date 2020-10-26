import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/Login";
import MainMenu from "../pages/MainMenu";
import Localizacao from "../pages/Localizacao";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={MainMenu} path="/main" exact />
      <Route component={Localizacao} path="/localizacao" exact />
    </BrowserRouter>
  );
};

export default Routes;
