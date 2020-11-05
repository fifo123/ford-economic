import styled from "styled-components";

export const EconomicListItems = styled.ul`
  grid-area: EL;

  display: inline-block;

  margin-left: 11px;

  font-size: 36px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
  font-weight: bold;
`;

export const EconomicItem = styled.li`
  align-items: center;

  display: grid;
  grid-template-columns: 70px auto 33px;
  grid-template-rows: auto;

  grid-template-areas: "IM TX DD";

  color: var(--darkblue);

  width: 338px;
  height: 50px;

  margin-top: 8px;

  background-color: var(--white);
  border-radius: 12px;
`;

export const EconomicImage = styled.img`
  grid-area: IM;
  margin-left: 25px;
`;

export const EconomicText = styled.label`
  grid-area: TX;

  align-items: left;
  text-align: left;

  font-family: "Roboto Condensed";
  font-weight: 300;
  font-size: 14px;
  background-color: var(--white);
`;

export const EconomicDropDown = styled.img`
  grid-area: DD;

  margin-right: 13px;

  transition: transform 0.5s;
  transform: matrix(0, 1, 1, 0, 0, 0);
`;
