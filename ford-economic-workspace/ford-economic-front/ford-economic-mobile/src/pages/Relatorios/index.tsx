import { View } from "react-native";
import React from "react";
import FordHeader from "../../components/Shared/Header";
import { RelatoriosGrid } from "./styles";
import CorpoRelatorios from "../../components/Relatorios/CorpoRelatorios";

const Relatorios: React.FC = () => {
  return (
    <View>
      <RelatoriosGrid>
        <FordHeader />
        <CorpoRelatorios />
      </RelatoriosGrid>
    </View>
  );
};

export default Relatorios;
