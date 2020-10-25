import React from "react";
import {
  AvaliacaoImagem,
  DivTeste,
  GridSelectCompare,
  LabelAvaliacaoTexto,
  LabelDesempenho,
  LeftArrowImage,
  RightArrowImage,
} from "./styles";
import Check from "../../../assets/check.svg";
import LeftArrow from "../../../assets/left_arrow.svg";
import RightArrow from "../../../assets/right_arrow.svg";
import DetalhesCompare from "../DetalhesCompare";

const CorpoCompare: React.FC = () => {
  return (
    <>
      <LabelAvaliacaoTexto>
        Parabéns, você está acima da média
      </LabelAvaliacaoTexto>
      <AvaliacaoImagem src={Check} width="75px" height="75px" />
      <LabelDesempenho> Seu desempenho </LabelDesempenho>
      <GridSelectCompare>
        <LeftArrowImage src={LeftArrow} width="30px" height="50px" />
        <DetalhesCompare />
        <RightArrowImage src={RightArrow} width="30px" height="50px" />
      </GridSelectCompare>
    </>
  );
};

export default CorpoCompare;
