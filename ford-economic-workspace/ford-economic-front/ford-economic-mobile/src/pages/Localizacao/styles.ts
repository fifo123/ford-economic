import styled from "styled-components";

//HD = Header
//SL = Seletor de carro
//LC = Mapa com a localização
//ED = Endereço

export const LocalizacaoGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 76px 390px auto;

  grid-template-areas:
    "HD"
    "SL"
    "LC"
    "ED";

  height: 100vh;

  background-color: var(--lightlblue);
`;
