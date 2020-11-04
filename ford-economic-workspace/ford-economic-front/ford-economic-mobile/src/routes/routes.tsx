import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import MainMenu from "../pages/MainMenu";
import Sensores from "../pages/Sensores";
import Tips from "../pages/Tips";
import Compare from "../pages/Compare";
import Relatorios from "../pages/Relatorios";
import Economic from "../pages/Economic";
import Localizacao from "../pages/Localizacao";
import SelecaoCarro from "../pages/SelecaoCarro"
;
const privateRoute = ({component: Component, ...rest}) => (
  <Route
     {rest}
     render ={...props =>
        isAuthenticated() ?(
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: from{props.location} }} />
        )
     }
   />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <PrivateRoute component={MainMenu} path="/main" exact />
      <PrivateRoute component={Sensores} path="/sensores" exact />
      <PrivateRoute component={Tips} path="/tips" exact />
      <PrivateRoute component={Compare} path="/compare" exact />
      <PrivateRoute component={Relatorios} path="/relatorios" exact />
      <PrivateRoute component={Economic} path="/economic" exact />
      <PrivateRoute component={Localizacao} path="/localizacao" exact />
      <PrivateRoute component={SelecaoCarro} path="/selecionar" exact />
    </BrowserRouter>
  );
};

export default Routes;
