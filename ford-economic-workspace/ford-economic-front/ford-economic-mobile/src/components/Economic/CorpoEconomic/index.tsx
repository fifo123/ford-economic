import React from "react";
import EconomicDetails from "../EconomicDetails";
import EconomicList from "../EconomicList";
import { EconomicLabel } from "./styles";

const CorpoEconomic: React.FC = () => {
  return (
    <>
      <EconomicLabel> Economic </EconomicLabel>
      <EconomicList />
    </>
  );
};

export default CorpoEconomic;
