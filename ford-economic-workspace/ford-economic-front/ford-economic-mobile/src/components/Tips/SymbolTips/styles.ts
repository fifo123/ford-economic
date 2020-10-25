import styled from "styled-components";

export const ContainerSymbols = styled.div`
  grid-area: SB;

  display: flex;

  flex-direction: column;
  align-items: center;
`;

//IM = imagem do símbolo; TX = texto do símbolo
export const GridSymbols = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 57px auto;

  grid-template-areas:
    "IM"
    "TX";

  width: 100%;
`;

export const SymbolText = styled.label`
  grid-area: TX;

  display: flex;

  flex-direction: column;
  align-items: center;

  font-size: 14px;

  font-family: "Roboto Condensed";

  font-weight: 300;
`;

export const SymbolImage = styled.img`
  grid-area: IM;

  display: flex;

  width: 40px;
  height: 40px;

  fill: white;

  margin-top: 11px;
  margin-left: 19px;

  flex-direction: column;
  align-items: center;
`;
