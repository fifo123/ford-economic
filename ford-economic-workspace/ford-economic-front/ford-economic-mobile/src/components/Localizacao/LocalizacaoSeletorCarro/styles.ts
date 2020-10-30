import styled from "styled-components";

export const CarroSeletorGrid = styled.div`
  grid-area: SL;

  display: grid;

  align-items: center;

  padding-top: 29px;

  grid-template-columns: 30px auto 30px;
  grid-template-rows: auto;

  grid-template-areas: "LS CR RS";
`;

export const CarSelected = styled.label`
  grid-area: CR;

  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 18px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
  font-weight: bold;

  height: 37px;

  background-color: var(--white);

  border-radius: 10px;
`;

export const SeletorLocalizacaoEsquerdo = styled.img`
  grid-area: LS;
  display: flex;
  justify-content: left;
  align-items: left;
`;

export const SeletorLocalizacaoDireito = styled.img`
  grid-area: RS;
  display: flex;
  justify-content: right;
  align-items: right;
`;
