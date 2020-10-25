import styled from "styled-components";

export const ContainerSensores = styled.div`
  grid-area: CS;

  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 30px;
  color: var(--darkblue);
  font-family: "Roboto Condensed";
  font-weight: bold;
  width: 328px;
  height: auto;
`;

export const UlSensores = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 9px;
  list-style: none;
`;

export const LiSensores = styled.li`
  background: var(--white);
  text-align: center;
  align-items: center;

  text-overflow: ellipsis;

  width: 103px;
  padding: 0px auto;
  padding-top: 23px;
  border-radius: 12px;
  height: 120px;
  position: relative;
`;

export const DivSensoresNome = styled.div`
  white-space: nowrap;
  overflow: hidden; /* "overflow" value must be different from "visible" */
  text-overflow: ellipsis;
  margin-top: 5px;
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
`;

interface Props {
  colorStatus?: any;
}

export const DivStatusSensor = styled.div<Props>`
  height: 15px;
  width: 15px;
  margin-top: 9px;
  margin-left: 17px;
  background-color: ${(p) => (p.colorStatus ? p.colorStatus : "blue")};
  border-radius: 100% 100% 100% 100%;
`;

export const LabelStatus = styled.div`
  font-size: 13px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  margin-left: 15px;
  margin-top: -15px;
`;
