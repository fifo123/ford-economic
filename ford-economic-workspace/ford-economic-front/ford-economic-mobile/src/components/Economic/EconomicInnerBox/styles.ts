import styled from "styled-components";

export const DetailLabelConatiner = styled.div`
  grid-area: AA, AB, AC, BA, BB, BC;

  width: 86px;
  height: 87px;

  justify-content: center;
  text-align: center;
  align-items: center;

  margin-top: 20px;

  padding-top: 6px;
  padding-bottom: 15px;
  color: var(--white);
  font-size: 15px;

  border-radius: 10px;
  background-color: var(--darkblue);
`;

export const DetailTitleLabel = styled.h1`
  display: flex;

  justify-content: center;

  align-items: center;
  text-align: center;
  font-family: "Roboto Condensed";

  height: 31px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 700;
`;

export const DetailInfoLabel = styled.label`
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
  height: 31px;
  font-family: "Roboto Condensed";

  font-weight: 300;
`;
