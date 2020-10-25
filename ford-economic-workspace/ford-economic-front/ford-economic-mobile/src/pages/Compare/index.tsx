import { View } from "react-native";
import React from "react";
import { CompareGrid } from "./styles";
import FordHeader from "../../components/Shared/Header";
import CorpoCompare from "../../components/Compare/CorpoCompare";

const Compare: React.FC = () => {
  return (
    <View>
      <CompareGrid>
        <FordHeader />
        <CorpoCompare />
      </CompareGrid>
    </View>
  );
};

export default Compare;
