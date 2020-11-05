import styled from "styled-components";

export const ContainerTipsList = styled.div`
  grid-area: TL;

  display: flex;

  flex-direction: column;
  align-items: center;

  margin-left: 12px;
  width: 338px;
`;

interface Props {
  fundoCor: string;
  fontCor: string;
}

export const BackgroundTip = styled.li<Props>`
  display: flex;

  flex-direction: column;
  align-items: center;

  height: 90px;
  border-radius: 12px;

  margin-top: 10px;

  font-size: 36px;
  color: var(--darkblue);

  padding-bottom: 27px;

  color: ${(p) => p.fontCor};
  background-color: ${(p) => p.fundoCor};
`;

export const GridInnerItem = styled.div`
  display: grid;

  grid-template-columns: 77px auto;
  grid-template-rows: auto;

  grid-template-areas: "SB TX";

  width: 100%;
`;

export const TextContainer = styled.label`
  grid-area: TX;

  display: flex;

  flex-direction: column;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  width: 250px;
  height: 64px;
  line-height: 16px;

  margin-top: 5px;
  margin-right: 5px;

  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  font-family: "Roboto Condensed";
`;
