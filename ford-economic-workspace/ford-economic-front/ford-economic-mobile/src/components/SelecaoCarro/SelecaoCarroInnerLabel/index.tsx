import React from "react";

import { CarInfoLabel, CarInfoLabelDetail, CarInfoLabelTitle } from "./styles";

const SelecaoCarroInnerLabel: React.FC<{
  title: string;
  detail: string;
  orientation: any;
  padding?: any;
}> = (props) => {
  return (
    <>
      <CarInfoLabel orientation={props.orientation} padding={props.padding}>
        <CarInfoLabelTitle>{props.title}</CarInfoLabelTitle>
        <CarInfoLabelDetail>{props.detail}</CarInfoLabelDetail>
      </CarInfoLabel>
    </>
  );
};

export default SelecaoCarroInnerLabel;
