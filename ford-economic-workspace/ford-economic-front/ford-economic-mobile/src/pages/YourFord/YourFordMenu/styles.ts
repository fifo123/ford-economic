import styled from "styled-components";

export const YourFordMenuGrid = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 75px 90px 59px auto;

  grid-template-areas:
    "HD"
    "LB"
    "BC"
    "CC";

  width: 100%;
  height: 100%;

  text-align: center;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  background-color: var(--lightlblue);
`;

export const CriarYourFord = styled.button`
  grid-area: BC;

  display: flex;

  justify-content: center;
  align-items: center;

  margin: 0 auto;

  height: 59px;
  width: 334px;

  font-size: 22px;
  background-color: var(--darkblue);
  color: var(--white);
  font-family: "Roboto Condensed";
  font-weight: bold;

  border-radius: 3px;
`;

export const ContainerYourFordMenu = styled.div`
  grid-area: CC;

  margin: 0 auto;
  margin-top: 15px;

  font-size: 30px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
  font-weight: bold;
  width: 328px;
  height: auto;
`;

export const UlYourFordMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
`;

export const LiYourFordMenu = styled.li`
  background: var(--white);
  text-align: center;
  align-items: center;

  text-overflow: ellipsis;

  width: 334px;
  height: 214px;
  padding: 0px auto;
  padding-top: 10px;
  border-radius: 12px;
  position: relative;
  font-style: italic;
  font-size: 30px;
  flex-flow: row wrap;
  display: flex;
  margin-bottom: 10px;
`;

export const TituloCarro = styled.div`
  width: 100%;
  height: auto;
  white-space: nowrap;
  overflow: hidden; /* "overflow" value must be different from "visible" */
  text-overflow: ellipsis;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: -10px;
`;

export const DivCarroYourFord = styled.div`
  width: 210px;
  height: 148px;
  margin-top: -10px;

  background-color: blue;
  border-radius: 24px;
  margin-left: 15px;
`;

export const ProfileYourFord = styled.div`
  width: 87px;
  height: 148px;
  margin-top: -10px;
  display: flex;
  flex-flow: row wrap;
  margin-left: 10px;
`;

export const CaracteristicaPrincipal = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

export const CaracteristicaSecundaria = styled.div`
  width: 40px;
  height: 40px;
`;

export const ImagemCarroYourFord = styled.img``;
