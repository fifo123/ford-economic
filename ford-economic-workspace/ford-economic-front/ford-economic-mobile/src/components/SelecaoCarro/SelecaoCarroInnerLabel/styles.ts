import styled from "styled-components";

export const CarInfoLabel = styled.label<Props>`
  grid-area: KM, AT;

  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 37px auto;

  grid-template-areas:
    "TT"
    "DT";

  text-align: ${(p) => p.orientation};
  justify-content: ${(p) => p.orientation};
  padding-left: ${(p) => p.paddingLeft};

  align-items: center;

  height: 87px;

  background-color: var(--darkblue);
  border-radius: 10px;
`;

interface Props {
  orientation: any;
  paddingLeft: any;
}

export const CarInfoLabelTitle = styled.h1`
  grid-area: TT;

  font-size: 15px;
  color: var(--white);
  font-family: "Roboto Condensed";
  font-weight: bold;
`;

export const CarInfoLabelDetail = styled.text`
  grid-area: DT;

  font-size: 15px;
  color: var(--white);
  font-family: "Roboto Condensed";
  font-weight: 300;
`;
