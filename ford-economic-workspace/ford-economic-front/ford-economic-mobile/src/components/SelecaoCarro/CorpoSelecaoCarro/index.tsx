import React from "react";

import NavegacaoEntreCarro from "../NavegacaoEntreCarro";
import SelecaoCarroDetalhes from "../SelecaoCarroDetalhes";

import { CarNameSelected, SelecaoCarrosBotoes } from "./styles";

const CorpoSelecaoCarro: React.FC = () => {
  return (
    <>
      <NavegacaoEntreCarro />
      <CarNameSelected> FORD TERRITORY 2020 </CarNameSelected>
      <SelecaoCarroDetalhes />
      <SelecaoCarrosBotoes>Selecionar</SelecaoCarrosBotoes>
      <SelecaoCarrosBotoes>Localizar</SelecaoCarrosBotoes>
    </>
  );
};

export default CorpoSelecaoCarro;
