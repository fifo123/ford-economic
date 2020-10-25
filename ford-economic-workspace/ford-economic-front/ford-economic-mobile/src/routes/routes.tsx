import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/Login";
import MainMenu from "../pages/MainMenu";
import Sensores from "../pages/Sensores";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={MainMenu} path="/main" exact />
      <Route component={Sensores} path="/sensores" exact />
    </BrowserRouter>
  );
};

export default Routes;
