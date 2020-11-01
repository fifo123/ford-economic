import React from "react";

import Carro from "../../../assets/carro.jpg";
import SelecaoCarroInnerLabel from "../SelecaoCarroInnerLabel/";
import { CarSelectInfoGrid } from "./styles";

const SelecaoCarroDetalhes: React.FC = () => {
  return (
    <>
      <CarSelectInfoGrid>
        <SelecaoCarroInnerLabel
          title="KM TOTAL"
          detail="23747 Km"
          orientation={"center"}
        />
        <SelecaoCarroInnerLabel
          title="ATRIBUÍDO À"
          detail="Rosane Filha Guedes"
          orientation={"left"}
          paddingLeft={"9px"}
        />
      </CarSelectInfoGrid>
    </>
  );
};

export default SelecaoCarroDetalhes;
