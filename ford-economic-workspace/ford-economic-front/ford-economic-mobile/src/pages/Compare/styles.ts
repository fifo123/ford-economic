import styled from "styled-components";

//HD = Header
//AT = Avaliação textual
//AV = Avaliação visual
//LB = Label estática (seu desempenho)
//DT = Detalhes da avaliação

export const CompareGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 139px 93px 52px auto;

  grid-template-areas:
    "HD"
    "AT"
    "AV"
    "LB"
    "DT";

  height: 100vh;

  background-color: var(--lightlblue);
`;
