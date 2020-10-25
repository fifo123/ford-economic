import styled from "styled-components";

//LG = logo; NM = nome; MN = menu
export const GridHeader = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 76px auto;

  grid-template-areas:
    "NM"
    "TL";

  width: 100%;
`;

export const TitleTips = styled.label`
  grid-area: NM;

  display: flex;

  flex-direction: column;
  align-items: center;

  font-size: 36px;

  padding-top: 30px;

  color: var(--darkblue);
  font-family: "Roboto Condensed";

  font-weight: bold;
`;
