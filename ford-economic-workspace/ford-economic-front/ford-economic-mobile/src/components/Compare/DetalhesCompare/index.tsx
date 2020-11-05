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

const DetalhesCompare: React.FC<{
  nomeSensor: string;
  porcentagem: number;
  carro: string;
  imagem: string;
}> = (props) => {
  function getUtilizacaoEstado(porcentagem: number) {
    if (porcentagem <= 0) {
      return [porcentagem, "% a mais", "red", "abaixo"];
    } else {
      return [porcentagem, "% a menos", "green", "acima"];
    }
  }

  return (
    <>
      <ContainerCompare>
        <GridCompareDetails>
          <GridCompareSymbols>
            <CompareImage
              src={`http://localhost:3000/get-image/?imagem=${props.imagem}`}
              width="40px"
              height="40px"
            />
            <CompareTitle>{props.nomeSensor}</CompareTitle>
          </GridCompareSymbols>
          <GridCompareText>
            <CompareText>
              Você rodou mais que{" "}
              <b>{getUtilizacaoEstado(props.porcentagem)[0]}</b>
              {getUtilizacaoEstado(props.porcentagem)[1]} que a média dos
              usuários do {props.carro}
            </CompareText>
            <CompareText>
              Informação adicional: <b>ver em breve</b>
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
