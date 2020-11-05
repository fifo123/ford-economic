import React, { useEffect, useState } from "react";

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
import api from "../../../services";
import { FeatureCompare } from "../feature-compare.interface";

const CorpoCompare: React.FC = () => {
  const [compare, setCompare] = useState<FeatureCompare>([]);

  useEffect(() => {
    api.get("/pages/compare/2").then((response) => {
      setCompare(response.data);
    });
  }, []);

  const [index, setIndex] = useState<number>(0);
  const [sensor, setSensor] = useState<any>(0);

  return (
    <>
      <LabelAvaliacaoTexto>Você rodou menos que a média</LabelAvaliacaoTexto>
      <AvaliacaoImagem src={Check} width="75px" height="75px" />
      <LabelDesempenho> Seu desempenho </LabelDesempenho>
      <GridSelectCompare>
        <LeftArrowImage src={LeftArrow} width="30px" height="50px" />
        <DetalhesCompare
          nomeSensor={compare.nome}
          porcentagem={compare.porcentagem}
          carro={compare.carro}
          imagem={compare.imagem}
        />
        <RightArrowImage src={RightArrow} width="30px" height="50px" />
      </GridSelectCompare>
    </>
  );
};

export default CorpoCompare;
