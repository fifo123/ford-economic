import styled from "styled-components";

export const ContainerTipsList = styled.div`
  grid-area: TL;

  display: flex;

  flex-direction: column;
  align-items: center;

  margin-left: 12px;
  width: 338px;
`;

//L1 e L2 = dica com fundo branco; D1 e D2 = dica com fundo escuro
export const GridListTips = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 117px 117px 117px auto;

  grid-template-areas:
    "L1"
    "D1"
    "L2"
    "D2";

  width: 100%;
`;

export const LightBackgroundTip = styled.div`
  grid-area: L1, L2;

  display: flex;

  flex-direction: column;
  align-items: center;

  height: 90px;
  border-radius: 12px;

  font-size: 36px;
  color: var(--darkblue);

  padding-bottom: 27px;

  color: var(--darkblue);
  background-color: var(--white);
`;

export const DarkBackgroundTip = styled.div`
  grid-area: D1, D2;

  display: flex;

  flex-direction: column;
  align-items: center;
  background-color: red;

  height: 90px;
  border-radius: 12px;

  color: var(--white);
  background-color: var(--darkblue);
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

  padding-top: 12px;
  padding-bottom: 12px;

  font-style: normal;
  font-size: 13px;
  font-weight: 300;
  font-family: "Roboto Condensed";
`;
