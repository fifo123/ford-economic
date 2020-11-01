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
      kmTotal: 1580,
      atribuido:
        "Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Habsburgo-Lorena e Bragança",
      imagemCarro:
        "http://localhost:3000/get-image/?imagem=1604241813037-ford_mustang.jpg",
    },
    {
      modelo: "FORD TERRITORY",
      kmTotal: 1240,
      atribuido: "Rosane Filha Guedes Junior",
      imagemCarro: "../../assets/carro.jpg",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const totalCarros = carroMock.length;
  const [carro, setCarro] = useState<any>(carroMock[index]);

  useEffect(() => {
    setCarro(carroMock[index]);
  }, [index]);

  function trocarCarroDireita() {
    console.log(index);
    if (index + 1 < totalCarros) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function trocarCarroEsquerda() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(totalCarros - 1);
    }
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
      <SelecaoCarroDetalhes
        kmTotal={carro.kmTotal}
        atribuido={carro.atribuido}
      />
      <SelecaoCarrosBotoes>Selecionar</SelecaoCarrosBotoes>
      <SelecaoCarrosBotoes>Localizar</SelecaoCarrosBotoes>
    </>
  );
};

export default CorpoSelecaoCarro;
