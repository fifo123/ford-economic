import React from "react";
import {
  CompareText,
  ContainerCompare,
  GridCompareText,
  GridCompareDetails,
  GridCompareSymbols,
  CompareImage,
  CompareTitle,
} from "./styles";

import Cold from "../../../assets/cold.svg";

const DetalhesCompare: React.FC = () => {
  return (
    <>
      <ContainerCompare>
        <GridCompareDetails>
          <GridCompareSymbols>
            <CompareImage src={Cold} width="40px" height="40px" />
            <CompareTitle>Ar Condicionado</CompareTitle>
          </GridCompareSymbols>
          <GridCompareText>
            <CompareText>
              Utilizou o ar-condicionado <b> 25.4% </b> menos que a média dos
              usuários do Ford Ka
            </CompareText>
            <CompareText>Economia de: 0.5l de combustível</CompareText>
            <CompareText>
              Nesse quesito você está{" "}
              <b style={{ color: "green" }}> acima da média </b>
            </CompareText>
          </GridCompareText>
        </GridCompareDetails>
      </ContainerCompare>
    </>
  );
};

export default DetalhesCompare;
