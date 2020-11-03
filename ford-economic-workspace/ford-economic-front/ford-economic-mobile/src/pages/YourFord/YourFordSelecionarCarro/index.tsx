import { View } from "react-native";
import React from "react";
import {
  DivYourFordSelecaoCarro,
  YourFordImagemCarroSelecionado,
  YourFordSelecionarGrid,
  YourFordTexto,
} from "./styles";
import FordHeader from "../../../components/Shared/Header";
import LabelTitulo from "../../../components/Shared/Titulo";
import { Seletor } from "../../../components/SelecaoCarro/NavegacaoEntreCarro/styles";
import FotoCarro from "../../../assets/carro.jpg";

import RightSeletor from "../../../assets/right_arrow.svg";
import LeftSeletor from "../../../assets/left_arrow.svg";

const YourFordSelecionarCarro: React.FC = () => {
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
          />
          <YourFordImagemCarroSelecionado
            src={FotoCarro}
            width="300px"
            height="200px"
          />
          <Seletor
            id="seletorEsquerdo"
            src={RightSeletor}
            width="30px"
            height="50px"
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
