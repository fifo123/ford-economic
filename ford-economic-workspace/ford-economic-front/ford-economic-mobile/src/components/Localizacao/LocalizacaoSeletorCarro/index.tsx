import React from "react";
import {
  CarroSeletorGrid,
  CarSelected,
  SeletorLocalizacaoDireito,
  SeletorLocalizacaoEsquerdo,
} from "./styles";
import LeftArrow from "../../../assets/left_arrow.svg";
import RightArrow from "../../../assets/right_arrow.svg";

const CarroSeletor: React.FC = () => {
  return (
    <>
      <CarroSeletorGrid>
        <SeletorLocalizacaoEsquerdo
          src={LeftArrow}
          width="30px"
          height="50px"
        />
        <CarSelected> Ford Territory 2020 </CarSelected>
        <SeletorLocalizacaoDireito
          src={RightArrow}
          width="30px"
          height="50px"
        />
      </CarroSeletorGrid>
    </>
  );
};

export default CarroSeletor;
