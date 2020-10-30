import React from "react";

import {
  DetailInfoLabel,
  DetailLabelConatiner,
  DetailTitleLabel,
  GridEconomicDetails,
} from "./styles";

const EconomicDetails: React.FC<{ divID: string }> = (props) => {
  return (
    <>
      <GridEconomicDetails id={props.divID}>
        <DetailLabelConatiner>
          <DetailTitleLabel>KM TOTAL</DetailTitleLabel>
          <DetailInfoLabel>23747 Km</DetailInfoLabel>
        </DetailLabelConatiner>
        <DetailLabelConatiner>
          <DetailTitleLabel>KM</DetailTitleLabel>
          <DetailInfoLabel>Carro Desligado</DetailInfoLabel>
        </DetailLabelConatiner>
        <DetailLabelConatiner>
          <DetailTitleLabel>PESO</DetailTitleLabel>
          <DetailInfoLabel> 1137 Kg </DetailInfoLabel>
        </DetailLabelConatiner>
        <DetailLabelConatiner>
          <DetailTitleLabel>VELOCIDADE</DetailTitleLabel>
          <DetailInfoLabel> 43 Km/h </DetailInfoLabel>
        </DetailLabelConatiner>
        <DetailLabelConatiner>
          <DetailTitleLabel>MARCHAS POR MINUTO</DetailTitleLabel>
          <DetailInfoLabel> 12 </DetailInfoLabel>
        </DetailLabelConatiner>
        <DetailLabelConatiner>
          <DetailTitleLabel>CONTA GIROS</DetailTitleLabel>
          <DetailInfoLabel> 2551 RPM </DetailInfoLabel>
        </DetailLabelConatiner>
      </GridEconomicDetails>
    </>
  );
};

export default EconomicDetails;
