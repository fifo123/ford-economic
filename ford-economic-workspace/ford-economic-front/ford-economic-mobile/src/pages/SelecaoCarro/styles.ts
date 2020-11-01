import styled from "styled-components";

//HD = Header
//LB = Título da tela
//SC = Seleciona carro
//NM = Nome do carro
//IF = Informações sobre o carro
//SL = Botão de selecionar carro
//LC = Botão de localizar carro

export const CarroSelecaoGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 91px 207px 47px 94px 55px auto;

  grid-template-areas:
    "HD"
    "LB"
    "SC"
    "NM"
    "IF"
    "SL"
    "LC";

  width: 100%;
  height: 100%;

  text-align: center;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  background-color: var(--lightlblue);
`;
