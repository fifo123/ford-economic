import styled from "styled-components";

export const LabelAvaliacaoTexto = styled.div`
  grid-area: AT;

  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 36px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
  font-weight: 700;
`;

export const AvaliacaoImagem = styled.img`
  grid-area: AV;

  display: flex;

  flex-direction: column;
  align-items: center;

  margin-left: 142px;
`;

export const LabelDesempenho = styled.label`
  grid-area: LB;

  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 24px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
`;

export const GridSelectCompare = styled.div`
  grid-area: DT;

  display: grid;

  grid-template-columns: 30px auto 30px;
  grid-template-rows: auto;

  grid-template-areas: "LS DD RS";

  background-color: var(--lightlblue);
`;

export const DivTeste = styled.div`
  grid-area: DD;

  display: flex;

  align-items: center;
  text-align: center;

  height: 151px;

  border-radius: 12px;
  background-color: var(--white);
`;

export const LeftArrowImage = styled.img`
  grid-area: LS;

  display: flex;

  width: 30px;
  height: 50px;
  margin-top: 45px;

  flex-direction: column;
  align-items: center;
`;

export const RightArrowImage = styled.img`
  grid-area: RS;

  display: flex;

  width: 30px;
  height: 50px;
  margin-top: 45px;

  flex-direction: column;
  align-items: center;
`;
