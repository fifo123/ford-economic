import React from "react";
import EconomicInnerBox from "../EconomicInnerBox";

import { GridEconomicDetails } from "./styles";

const EconomicDetails: React.FC<{
  divID: string;
  itens: any;
}> = (props) => {
  console.log(props.itens);
  return (
    <GridEconomicDetails id={props.divID}>
      {Object.keys(props.itens).map((item) => (
        <>
          <EconomicInnerBox title={item} detail={props.itens[item]} />
        </>
      ))}
    </GridEconomicDetails>
  );
};

export default EconomicDetails;
