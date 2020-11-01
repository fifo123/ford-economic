import React, { useEffect, useState } from "react";

import NavegacaoEntreCarro from "../NavegacaoEntreCarro";
import SelecaoCarroDetalhes from "../SelecaoCarroDetalhes";

import { CarNameSelected, SelecaoCarrosBotoes } from "./styles";

const CorpoSelecaoCarro: React.FC = () => {
  const carroMock = [
    {
      modelo: "FORD KA 2019",
      kmTotal: 23757,
      atribuido: "Rosane Filha Guedes",
      imagemCarro:
        "http://localhost:3000/get-image/?imagem=..%2Fassets%2Fford-ka-2021.jpg",
    },
    {
      modelo: "FORD MUSTANG GT",
      kmTotal: 1240,
      atribuido: "Rosane Filha Guedes Junior",
      imagemCarro:
        "http://localhost:3000/get-image/?imagem=1604241813037-ford_mustang.jpg",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  // setIndex(0);
  const totalCarros = carroMock.length;
  const [carro, setCarro] = useState<any>(carroMock[index]);

  function trocarCarroDireita() {
    console.log(index);

    if (index + 1 < totalCarros) {
      setIndex(index + 1);
      console.log(index);
    } else {
      setIndex(0);
    }

    console.log(index);

    setCarro(carroMock[index]);
  }

  function trocarCarroEsquerda() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(totalCarros - 1);
      console.log("index - 1: ", index - 1);
      console.log("totalCarros: ", totalCarros);
    }

    console.log(index);

    setCarro(carroMock[index]);
  }

  return (
    <>
      <NavegacaoEntreCarro
        imagem={carro.imagemCarro}
        seletorDireita={trocarCarroDireita}
        seletorEsquerda={trocarCarroEsquerda}
      />
      <CarNameSelected> {carro.modelo} </CarNameSelected>
      <SelecaoCarroDetalhes />
      <SelecaoCarrosBotoes>Selecionar</SelecaoCarrosBotoes>
      <SelecaoCarrosBotoes>Localizar</SelecaoCarrosBotoes>
    </>
  );
};

export default CorpoSelecaoCarro;
