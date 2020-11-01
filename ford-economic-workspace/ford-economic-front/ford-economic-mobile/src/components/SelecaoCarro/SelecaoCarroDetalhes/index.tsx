import React from "react";

import Carro from "../../../assets/carro.jpg";
import SelecaoCarroInnerLabel from "../SelecaoCarroInnerLabel/";
import { CarSelectInfoGrid } from "./styles";

const SelecaoCarroDetalhes: React.FC<{ kmTotal: number; atribuido: string }> = (
  props
) => {
  return (
    <>
      <CarSelectInfoGrid>
        <SelecaoCarroInnerLabel
          title="KM TOTAL"
          detail={props.kmTotal.toString() + " Km"}
          orientation={"center"}
        />
        <SelecaoCarroInnerLabel
          title="ATRIBUÍDO À"
          detail={props.atribuido}
          orientation={"left"}
          padding={"9px"}
        />
      </CarSelectInfoGrid>
    </>
  );
};

export default SelecaoCarroDetalhes;
