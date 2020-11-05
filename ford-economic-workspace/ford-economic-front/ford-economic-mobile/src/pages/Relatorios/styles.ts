import styled from "styled-components";

//HD = Header
//LB = Label (actually is a div)
//RL = Relatórios

export const RelatoriosGrid = styled.div`
  display: grid;

  grid-template-columns: 100%;
  grid-template-rows: 75px 80px 41px 200px 54px;

  grid-template-areas:
    "HD"
    "LB"
    "SS"
    "GC"
    "SP";

  height: 100vh;

  background-color: var(--lightlblue);
`;
