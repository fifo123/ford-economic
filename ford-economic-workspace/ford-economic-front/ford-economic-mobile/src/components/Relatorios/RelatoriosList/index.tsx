import React from "react";
import {
  ContainerRelatorios,
  DescricaoGraficos,
  PrimeiroGrafico,
  RelatoriosListGrid,
  SegundoGrafico,
} from "./styles";
import GraficoCima from "../../../assets/grafico1.png";
import GraficoBaixo from "../../../assets/grafico2.png";

const RelatoriosList: React.FC = () => {
  return (
    <>
      <ContainerRelatorios>
        <RelatoriosListGrid>
          <PrimeiroGrafico src={GraficoCima} width="347px" height="200px" />
          <DescricaoGraficos>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </DescricaoGraficos>
          <SegundoGrafico src={GraficoBaixo} width="347px" height="200px" />
        </RelatoriosListGrid>
      </ContainerRelatorios>
    </>
  );
};

export default RelatoriosList;
