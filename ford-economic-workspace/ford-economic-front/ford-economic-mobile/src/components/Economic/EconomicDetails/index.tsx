import React from "react";
import EconomicInnerBox from "../EconomicInnerBox";

import { GridEconomicDetails } from "./styles";

const EconomicDetails: React.FC<{ divID: string }> = (props) => {
  return (
    <>
      <GridEconomicDetails id={props.divID}>
        <EconomicInnerBox title="KM TOTAL" detail="23747 Km" />
        <EconomicInnerBox title="KM" detail="Carro Desligado" />
        <EconomicInnerBox title="PESO" detail="1137 Kg" />
        <EconomicInnerBox title="VELOCIDADE" detail="43 Km/h" />
        <EconomicInnerBox title="MARCHAS POR MINUTO" detail="12" />
        <EconomicInnerBox title="CONTA GIROS" detail="2551 RPM" />
      </GridEconomicDetails>
    </>
  );
};

export default EconomicDetails;
