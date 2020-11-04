import { View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  DivYourFordSelecaoCarro,
  YourFordImagemCarroSelecionado,
  YourFordSelecionarGrid,
  YourFordTexto,
} from "./styles";
import FordHeader from "../../../components/Shared/Header";
import LabelTitulo from "../../../components/Shared/Titulo";
import { Seletor } from "../../../components/SelecaoCarro/NavegacaoEntreCarro/styles";

import RightSeletor from "../../../assets/right_arrow.svg";
import LeftSeletor from "../../../assets/left_arrow.svg";
import { ModeloYourFord } from "../interface/your-ford-modelo.interface";
import api from "../../../services";
import { useHistory } from "react-router-dom";

const YourFordSelecionarCarro: React.FC = () => {
  const history = useHistory();
  const [index, setIndex] = useState<number>(0);

  const [totalCarros, setTotalCarros] = useState<number>(0);

  const [carros, setCarros] = useState<ModeloYourFord[]>();
  const [carro, setCarro] = useState<ModeloYourFord>();

  useEffect(() => {
    api.get("/modelo/").then((response) => {
      console.log(response.data);
      setCarros(response.data.modelos);
    });
  }, []);

  useEffect(() => {
    console.log(carros);
    setTotalCarros(carros ? carros.length : 0);
    setCarro(carros ? carros[index] : {});
  }, [index, carros]);

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
  }

  function handleModelo(e: any) {
    localStorage.setItem("modeloId", e.currentTarget.id);
    localStorage.setItem("modeloImage", e.currentTarget.src);
    history.push("/your-ford-principal");
  }

  return (
    <View>
      <YourFordSelecionarGrid>
        <FordHeader />
        <LabelTitulo name={"Selecione um modelo"} fontSize={"36px"} />
        <DivYourFordSelecaoCarro style={{ marginTop: "25px" }}>
          <Seletor
            id="seletorDireito"
            src={LeftSeletor}
            width="30px"
            height="50px"
            onClick={trocarCarroEsquerda}
          />
          <YourFordImagemCarroSelecionado
            src={`http://localhost:3000/get-image/?imagem=${carro?.imagem}`}
            id={carro?.id?.toString()}
            width="300px"
            height="200px"
            onClick={handleModelo}
          />
          <Seletor
            id="seletorEsquerdo"
            src={RightSeletor}
            width="30px"
            height="50px"
            onClick={trocarCarroDireita}
          />
        </DivYourFordSelecaoCarro>
      </YourFordSelecionarGrid>
      <YourFordTexto style={{ marginTop: "75px", marginBottom: "20px" }}>
        Clique no que você mais gostou
      </YourFordTexto>
      <YourFordTexto style={{ width: "250px", margin: "0 auto" }}>
        Aqui você seleciona qual corpo de carro mais te agrada, essa etapa é
        puramente estética
      </YourFordTexto>
    </View>
  );
};

export default YourFordSelecionarCarro;
