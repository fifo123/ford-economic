import styled from "styled-components";

export const CarSelectInfoGrid = styled.label`
  grid-area: IF;

  display: grid;

  grid-template-columns: 86px auto;
  column-gap: 12px;
  grid-template-rows: auto;

  grid-template-areas: "KM AT";

  padding-left: 45px;
  padding-right: 45px;

  font-family: "Roboto Condensed";
  font-weight: bold;

  height: 87px;

  border-radius: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
