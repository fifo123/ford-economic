import styled from "styled-components";

export const ContainerSeletor = styled.div`
  grid-area: SS;

  display: block;

  width: 100%;
  height: 41px;

  z-index: 3;

  margin-top: 20px;
  overflow-y: hidden;
  transition: border-radius 1s;
  transition: height 1s;
`;

export const DivSelected = styled.div`
  margin: 0 auto;
  height: 41px;
  width: 347px;
  background-color: var(--white);

  justify-content: center;
  text-align: center;
  padding-top: 13px;
  font-size: 14px;
  font-family: "Roboto Condensed";
`;

export const ContainerChart = styled.div`
  grid-area: GC;

  display: block;

  width: 352px;
  height: 250px;
  margin: 0 auto;
  margin-top: 35px;
  background-color: transparent;
`;
