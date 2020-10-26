import styled from "styled-components";

export const ContainerRelatorios = styled.div`
  grid-area: RL;

  display: flex;

  padding-top: 4px;

  flex-direction: column;
  align-items: center;
`;

export const RelatoriosListGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 211px 102px auto;

  grid-template-areas:
    "G1"
    "DS"
    "G2";
`;

export const PrimeiroGrafico = styled.img`
  grid-area: G1;

  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const DescricaoGraficos = styled.div`
  grid-area: DS;

  justify-content: center;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--darkblue);
  flex-direction: column;

  width: 347px;
  height: 72px;

  background-color: var(--white);
  border-radius: 12px;
`;

export const SegundoGrafico = styled.img`
  grid-area: G2;

  display: flex;

  flex-direction: column;
  align-items: center;
`;
