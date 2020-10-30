import styled from "styled-components";

//HD = Header
//LB = Label com o título da página
//EL = Lista de elementos contidos na página Economic

export const EconomicGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 80px auto;

  grid-template-areas:
    "HD"
    "LB"
    "EL";

  height: 100vh;

  background-color: var(--lightlblue);
`;
