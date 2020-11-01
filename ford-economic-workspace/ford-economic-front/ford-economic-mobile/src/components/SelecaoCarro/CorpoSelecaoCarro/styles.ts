import styled from "styled-components";

export const CarNameSelected = styled.label`
  grid-area: NM;

  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;

  margin-left: 45px;
  margin-right: 45px;

  font-size: 18px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
  font-weight: bold;

  height: 37px;

  background-color: var(--white);

  border-radius: 10px;
`;

export const SelecaoCarrosBotoes = styled.button`
  grid-area: SL, LC;

  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;

  margin-left: 45px;
  margin-right: 45px;

  font-size: 15px;
  color: var(--white);
  font-family: "Roboto Condensed";
  font-weight: bold;

  height: 40px;

  background-color: var(--darkblue);

  border-radius: 10px;
`;
