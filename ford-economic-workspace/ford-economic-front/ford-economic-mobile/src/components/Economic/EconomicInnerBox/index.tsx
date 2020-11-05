import React from "react";
import { GridEconomicDetails } from "../EconomicDetails/styles";

import {
  DetailInfoLabel,
  DetailLabelConatiner,
  DetailTitleLabel,
} from "./styles";

const EconomicInnerBox: React.FC<{ title: any; detail: any }> = (props) => {
  return (
    <>
      <DetailLabelConatiner>
        <DetailTitleLabel>{props.title}</DetailTitleLabel>
        <DetailInfoLabel>{props.detail}</DetailInfoLabel>
      </DetailLabelConatiner>
    </>
  );
};

export default EconomicInnerBox;
