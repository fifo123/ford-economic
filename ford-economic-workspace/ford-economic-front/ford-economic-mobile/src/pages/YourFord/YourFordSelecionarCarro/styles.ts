import styled from "styled-components";

export const YourFordSelecionarGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 90px 192px;

  grid-template-areas:
    "HD"
    "LB"
    "BC";

  width: 100%;
  height: auto;

  text-align: center;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  background-color: var(--lightlblue);
`;

export const DivYourFordSelecaoCarro = styled.div`
  grid-area: BC;

  display: grid;

  grid-template-columns: 30px auto 30px;
  grid-template-rows: auto;
  margin: 0 auto;
  grid-template-areas: "RS IM LS";
`;

export const YourFordImagemCarroSelecionado = styled.img`
  grid-area: IM;

  display: flex;
  align-items: center;

  height: 200px;
  border-radius: 24px;
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
