import React from "react";

import LampWhite from "./../../../assets/lamp_white.svg";
import LampBlue from "./../../../assets/lamp_blue.svg";

import {
  ContainerSymbols,
  GridSymbols,
  SymbolImage,
  SymbolText,
} from "./styles";

const SymbolTips: React.FC<{ lampColor: Boolean }> = (props) => {
  return (
    <ContainerSymbols>
      <GridSymbols>
        <SymbolImage src={props.lampColor ? LampBlue : LampWhite} />
        <SymbolText> Dica </SymbolText>
      </GridSymbols>
    </ContainerSymbols>
  );
};

export default SymbolTips;
