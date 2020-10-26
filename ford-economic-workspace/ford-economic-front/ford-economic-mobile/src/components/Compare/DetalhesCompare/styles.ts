import styled from "styled-components";

export const ContainerCompare = styled.div`
  grid-area: DD;

  display: flex;

  align-items: center;
  text-align: center;

  height: 151px;

  font-family: "Roboto Condensed";

  border-radius: 12px;
  background-color: var(--white);
  color: var(--darkblue);
`;

export const GridCompareDetails = styled.div`
  display: grid;

  grid-template-columns: 89px auto;
  grid-template-rows: auto;

  grid-template-areas: "SB TX";
`;

export const GridCompareSymbols = styled.div`
  grid-area: SB;

  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 65px auto;

  grid-template-areas:
    "IM"
    "TT";
`;

export const GridCompareText = styled.div`
  grid-area: TX;

  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 56px 37px auto;

  grid-template-areas:
    "L1"
    "L2"
    "L3";
`;

export const CompareText = styled.label`
  grid-area: L1, L2, L3;

  justify-content: center;
  font-size: 12px;
  font-weight: 400;

  align-items: center;
  text-align: center;
`;

export const CompareImage = styled.img`
  grid-area: IM;

  margin-top: 15px;
  margin-left: 25px;

  align-items: center;
  text-align: center;
`;

export const CompareTitle = styled.label`
  grid-area: TT;

  font-size: 13px;

  align-items: center;
  text-align: center;
`;
