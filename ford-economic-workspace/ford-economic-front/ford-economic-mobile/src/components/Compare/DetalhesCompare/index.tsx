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

const DetalhesCompare: React.FC<{
  nomeSensor: string;
  economia: number;
  porcentagem: number;
  carro: string;
  imagem: string;
}> = (props) => {
  function getEconomiaCombustivelEstado(economia: number) {
    if (economia >= 0) {
      return ["Economia de: ", economia + "L"];
    } else {
      return ["Gasto de: ", economia * -1 + "L"];
    }
  }

  function getUtilizacaoEstado(porcentagem: number) {
    if (porcentagem >= 0) {
      return [porcentagem, "% a mais", "red", "abaixo"];
    } else {
      return [porcentagem * -1, "% a menos", "green", "acima"];
    }
  }

  return (
    <>
      <ContainerCompare>
        <GridCompareDetails>
          <GridCompareSymbols>
            <CompareImage src={props.imagem} width="40px" height="40px" />
            <CompareTitle>{props.nomeSensor}</CompareTitle>
          </GridCompareSymbols>
          <GridCompareText>
            <CompareText>
              Utilizou o ar-condicionado{" "}
              <b>{getUtilizacaoEstado(props.porcentagem)[0]}</b>
              {getUtilizacaoEstado(props.porcentagem)[1]} que a média dos
              usuários do {props.carro}
            </CompareText>
            <CompareText>
              {getEconomiaCombustivelEstado(props.economia)[0]}
              <b>{getEconomiaCombustivelEstado(props.economia)[1]}</b> de
              combustível
            </CompareText>
            <CompareText>
              Nesse quesito você está{" "}
              <b style={{ color: getUtilizacaoEstado(props.porcentagem)[2] }}>
                {" "}
                {getUtilizacaoEstado(props.porcentagem)[3]} da média{" "}
              </b>
            </CompareText>
          </GridCompareText>
        </GridCompareDetails>
      </ContainerCompare>
    </>
  );
};

export default DetalhesCompare;
