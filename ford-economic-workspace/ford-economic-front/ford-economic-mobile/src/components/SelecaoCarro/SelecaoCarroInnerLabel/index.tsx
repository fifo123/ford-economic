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
        <div
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            color: "white",
          }}
        >
          <CarInfoLabelDetail>{props.detail}</CarInfoLabelDetail>
        </div>
      </CarInfoLabel>
    </>
  );
};

export default SelecaoCarroInnerLabel;
