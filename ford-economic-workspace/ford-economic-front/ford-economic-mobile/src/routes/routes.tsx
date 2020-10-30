import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../pages/Login";
import MainMenu from "../pages/MainMenu";
import Sensores from "../pages/Sensores";
import Tips from "../pages/Tips";
import Compare from "../pages/Compare";
import Relatorios from "../pages/Relatorios";
import Economic from "../pages/Economic";
import Localizacao from "../pages/Localizacao";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={MainMenu} path="/main" exact />
      <Route component={Sensores} path="/sensores" exact />
      <Route component={Tips} path="/tips" exact />
      <Route component={Compare} path="/compare" exact />
      <Route component={Relatorios} path="/relatorios" exact />
      <Route component={Economic} path="/economic" exact />
      <Route component={Localizacao} path="/localizacao" exact />
    </BrowserRouter>
  );
};

export default Routes;
