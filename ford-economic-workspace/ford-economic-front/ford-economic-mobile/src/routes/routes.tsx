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
import SelecaoCarro from "../pages/SelecaoCarro";
import YourFordMenu from "../pages/YourFord/YourFordMenu";
import YourFordSelecionarCarro from "../pages/YourFord/YourFordSelecionarCarro";
import YourFordSelecionarCPrincipal from "../pages/YourFord/YourFordCaracteristicaPrincipal";
import YourFordSelecionarCSecundaria from "../pages/YourFord/YourFordCaracteristicasSecundarias";
import YourFordSelecionarUsoCarro from "../pages/YourFord/YourFordUsoCarro";
import YourFordFinalizacao from "../pages/YourFord/YourFordFinalizacao";

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
      <Route component={SelecaoCarro} path="/selecionar" exact />
      <Route component={YourFordMenu} path="/your-ford-menu" exact />
      <Route
        component={YourFordSelecionarCPrincipal}
        path="/your-ford-principal"
        exact
      />
      <Route
        component={YourFordSelecionarCarro}
        path="/your-ford-selecionar"
        exact
      />
      <Route
        component={YourFordSelecionarCSecundaria}
        path="/your-ford-secundaria"
        exact
      />
      <Route
        component={YourFordSelecionarUsoCarro}
        path="/your-ford-uso"
        exact
      />
      <Route
        component={YourFordFinalizacao}
        path="/your-ford-finalizacao"
        exact
      />
    </BrowserRouter>
  );
};

export default Routes;
