import { View } from "react-native";
import React from "react";
import { EconomicGrid } from "./styles";
import CorpoEconomic from "../../components/Economic/CorpoEconomic";
import FordHeader from "../../components/Shared/Header";

const Economic: React.FC = () => {
  return (
    <View>
      <EconomicGrid>
        <FordHeader />
        <CorpoEconomic />
      </EconomicGrid>
    </View>
  );
};

export default Economic;
