import styled from "styled-components";

export const GridEconomicDetails = styled.div`
  grid-area: EL;
  display: grid;

  grid-template-columns: 106px auto 86px;
  grid-template-rows: 114px auto;

  grid-template-areas: "AA AB AC", "BA BB BC";

  color: var(--darkblue);

  width: 338px;
  height: 0px;

  margin-top: -12px;
  margin-bottom: 20px;

  padding-left: 19px;
  padding-right: 21px;

  transition: height 1s;
  overflow: hidden;

  background-color: var(--white);
  border-radius: 0 0 12px 12px;
`;
