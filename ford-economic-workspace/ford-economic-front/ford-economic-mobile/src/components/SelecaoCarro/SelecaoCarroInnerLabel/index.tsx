import React from "react";

import { CarInfoLabel, CarInfoLabelDetail, CarInfoLabelTitle } from "./styles";

const SelecaoCarroInnerLabel: React.FC<{
  title: string;
  detail: string;
  orientation: any;
  paddingLeft?: any;
}> = (props) => {
  return (
    <>
      <CarInfoLabel
        orientation={props.orientation}
        paddingLeft={props.paddingLeft}
      >
        <CarInfoLabelTitle>{props.title}</CarInfoLabelTitle>
        <CarInfoLabelDetail>{props.detail}</CarInfoLabelDetail>
      </CarInfoLabel>
    </>
  );
};

export default SelecaoCarroInnerLabel;
