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

// export const GridEconomicDetails = styled.div`
//   display: grid;

//   grid-template-columns: 106px auto 86px;
//   grid-template-rows: 114px auto;

//   grid-template-areas: "AA AB AC", "BA BB BC";

//   color: var(--darkblue);

//   width: 338px;
//   height: 0px;

//   margin-top: -12px;
//   margin-bottom: 20px;

//   padding-left: 19px;
//   padding-right: 21px;

//   transition: height 1s;
//   overflow: hidden;

//   background-color: var(--white);
//   border-radius: 0 0 12px 12px;
// `;

// export const DetailLabelConatiner = styled.div`
//   grid-area: AA, AB, AC, BA, BB, BC;

//   width: 86px;
//   height: 87px;

//   justify-content: center;
//   text-align: center;
//   align-items: center;

//   margin-top: 20px;

//   padding-top: 6px;
//   padding-bottom: 15px;
//   color: var(--white);
//   font-size: 15px;

//   border-radius: 10px;
//   background-color: var(--darkblue);
// `;

// export const DetailTitleLabel = styled.h1`
//   display: flex;

//   justify-content: center;

//   align-items: center;
//   text-align: center;
//   font-family: "Roboto Condensed";

//   height: 31px;
//   margin-bottom: 4px;
//   font-size: 14px;
//   font-weight: 700;
// `;

// export const DetailInfoLabel = styled.label`
//   display: flex;

//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   height: 31px;
//   font-family: "Roboto Condensed";

//   font-weight: 300;
// `;
