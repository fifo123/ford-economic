import styled from "styled-components";

export const ContainerBotoesMenu = styled.div`
  display: grid;

  grid-template-columns: 90px 27px 90px 27px 90px;
  grid-template-rows: 90px 21px 90px;

  grid-template-areas:
    "BE EB BS ER BC"
    "EF EF EF EF EF"
    "BR EG BT EK BY";
`;

export const EspacoEB = styled.div`
  grid-area: EB;
`;
export const EspacoER = styled.div`
  grid-area: ER;
`;
export const EspacoEG = styled.div`
  grid-area: EG;
`;
export const EspacoEK = styled.div`
  grid-area: EK;
`;
export const EspacoEF = styled.div`
  grid-area: EF;
`;

interface Props {
  gridArea: any;
}

export const BotaoMenu = styled.div<Props>`
  grid-area: ${(p) => p.gridArea};
  display: block;
  justify-content: center;
  align-items: center;

  background-color: var(--white);

  color: var(--darkblue);
  border-radius: 12px;

  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: lighter;
  padding-top: 13px;
  text-align: center;
`;

export const ImgIcon = styled.img``;

export const LblBotao = styled.label``;
