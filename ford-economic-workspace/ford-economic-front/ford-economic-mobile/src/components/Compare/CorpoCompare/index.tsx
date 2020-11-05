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

const CorpoCompare: React.FC = () => {
  const sensorMock = [
    {
      nome: "Ar condicionado",
      porcentagem: 25.4,
      economia: 0.7,
      carro: "FORD MUSTANG GT",
      imagem: "../assets/ar-condicionado.svg",
    },
    {
      nome: "Uso geral",
      porcentagem: 23.4,
      economia: -3,
      carro: "FORD TERRITORY",
      imagem: "../assets/direcao.svg",
    },
    {
      nome: "Combustível",
      porcentagem: -23.4,
      economia: -2,
      carro: "FORD KA 2019",
      imagem: "../assets/combustivel.svg",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const totalSensores = sensorMock.length;
  const [sensor, setSensor] = useState<any>(sensorMock[index]);

  useEffect(() => {
    setSensor(sensorMock[index]);
  }, [index]);

  function trocarSensorDireita() {
    if (index + 1 < totalSensores) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function trocarSensorEsquerda() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(totalSensores - 1);
    }
  }

  return (
    <>
      <LabelAvaliacaoTexto>
        Parabéns, você está acima da média
      </LabelAvaliacaoTexto>
      <AvaliacaoImagem
        src={Check}
        width="75px"
        height="75px"
        onClick={trocarSensorEsquerda}
      />
      <LabelDesempenho> Seu desempenho </LabelDesempenho>
      <GridSelectCompare>
        <LeftArrowImage
          src={LeftArrow}
          width="30px"
          height="50px"
          onClick={trocarSensorEsquerda}
        />
        <DetalhesCompare
          nomeSensor={sensor.nome}
          economia={sensor.economia}
          porcentagem={sensor.porcentagem}
          carro={sensor.carro}
          imagem={sensor.imagem}
        />
        <RightArrowImage
          src={RightArrow}
          width="30px"
          height="50px"
          onClick={trocarSensorDireita}
        />
      </GridSelectCompare>
    </>
  );
};

export default CorpoCompare;
