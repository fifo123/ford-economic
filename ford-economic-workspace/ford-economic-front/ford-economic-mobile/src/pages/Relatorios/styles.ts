import styled from "styled-components";

//HD = Header
//LB = Label (actually is a div)
//RL = Relatórios

export const RelatoriosGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 80px auto;

  grid-template-areas:
    "HD"
    "LB"
    "RL";

  height: 100vh;

  background-color: var(--lightlblue);
`;
