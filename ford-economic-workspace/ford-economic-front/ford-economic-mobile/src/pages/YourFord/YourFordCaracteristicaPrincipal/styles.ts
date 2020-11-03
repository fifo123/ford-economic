import styled from "styled-components";

export const YourFordSelecionarCPrincipalGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 192px 90px 120px;

  grid-template-areas:
    "HD"
    "BC"
    "LB"
    "OC";

  width: 100%;
  height: auto;

  text-align: center;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  background-color: var(--lightlblue);
`;

export const YourFordTexto = styled.div`
  width: auto;
  height: auto;
  color: var(--darkblue);
  font-size: 18px;
  text-align: center;
  font-weight: normal;
  font-family: "Roboto Condensed";
`;

export const DivYourFordSelecaoCarro = styled.div`
  grid-area: BC;
  width: 270px;
  height: 192px;
  display: grid;

  grid-template-columns: 30px auto 30px;
  grid-template-rows: auto;
  margin: 0 auto;
  grid-template-areas: "RS IM LS";
`;

export const YourFordImagemCarroSelecionado = styled.img`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 90px 192px;

  grid-template-areas:
    "HD"
    "LB"
    "BC";

  width: 270px;
  height: 192px;

  text-align: center;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  background-color: var(--lightlblue);
  border-radius: 24px;
`;

export const CaracteristicasDiv = styled.div`
  grid-area: OC;
  width: 90%;
  max-width: 350px;
  height: auto;

  margin: 0 auto;

  overflow: auto;
  white-space: nowrap;
`;

export const CaracteristicaDiv = styled.div`
  width: 103px;
  height: 120px;
  background-color: var(--white);
  border-radius: 12px;
  display: inline-block;
  margin-right: 15px;

  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 25px;
`;

export const ContainerCaracteristica = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const ImgIcon = styled.img``;

export const LblBotao = styled.div`
  margin-top: 10px;
`;
