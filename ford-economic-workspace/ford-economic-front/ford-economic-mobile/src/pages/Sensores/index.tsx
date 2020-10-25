import { View } from "react-native";
import React from "react";
import { SensoresGrid } from "./styles";
import FordHeader from "../../components/Shared/Header";
import LabelTitulo from "../../components/Shared/Titulo";
import CardSensores from "../../components/Sensores/CardSensores";

const Sensores: React.FC = () => {
  return (
    <View>
      <SensoresGrid>
        <FordHeader />
        <LabelTitulo name={"Sensores"} fontSize={"36px"} />
        Clique para ver detalhes
        <CardSensores />
      </SensoresGrid>
    </View>
  );
};

export default Sensores;
