import { Text, View } from "react-native";
import React from "react";
import { LocalizacaoGrid } from "./styles";
import FordHeader from "../../components/Shared/Header";
import CorpoLocalizacao from "../../components/Localizacao/CorpoLocalizacao";

const Localizacao: React.FC = () => {
  return (
    <View>
      <LocalizacaoGrid>
        <FordHeader />
        <CorpoLocalizacao />
      </LocalizacaoGrid>
    </View>
  );
};

export default Localizacao;
