import React from "react";

import Lamp from "./../../../assets/lamp.svg";
import {
  ContainerSymbols,
  GridSymbols,
  SymbolImage,
  SymbolText,
} from "./styles";

const SymbolTips: React.FC = () => {
  return (
    <ContainerSymbols>
      <GridSymbols>
        <SymbolImage src={Lamp} />
        <SymbolText> Dica </SymbolText>
      </GridSymbols>
    </ContainerSymbols>
  );
};

export default SymbolTips;
