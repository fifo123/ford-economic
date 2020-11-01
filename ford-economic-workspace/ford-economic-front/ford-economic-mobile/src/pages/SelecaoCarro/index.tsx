import { View } from "react-native";
import React from "react";
import { CarroSelecaoGrid } from "./styles";
import FordHeader from "../../components/Shared/Header";
import LabelTitulo from "../../components/Shared/Titulo";
import CorpoSelecaoCarro from "../../components/SelecaoCarro/CorpoSelecaoCarro";

const SelecaoCarro: React.FC = () => {
  return (
    <View>
      <CarroSelecaoGrid>
        <FordHeader />
        <LabelTitulo
          name={"Selecione um de seus carros"}
          fontSize={"24px"}
          fontWeight={"300"}
        />
        <CorpoSelecaoCarro />
      </CarroSelecaoGrid>
    </View>
  );
};

export default SelecaoCarro;
