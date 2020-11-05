import styled from "styled-components";

export const Container = styled.div`
  grid-area: HD;

  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;
  background-color: var(--darkblue);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

//LG = logo; NM = nome; MN = menu
export const GridHeader = styled.div`
  display: grid;

  grid-template-columns: 133px auto 42px;
  grid-template-rows: 75px;

  grid-template-areas: "LG NM MN";

  width: 100%;
`;

export const LogoHeader = styled.div`
  grid-area: LG;

  display: flex;

  flex-direction: column;
  align-items: center;

  padding-top: 11px;
  padding-left: 12px;
`;

export const TextHeader = styled.div`
  grid-area: NM;

  display: flex;

  flex-direction: column;
  align-items: center;

  font-size: 36px;
  color: var(--white);
  font-family: "Mr Dafoe";
  padding: 11px;
`;

export const MenuHeader = styled.div`
  grid-area: MN;

  display: flex;

  flex-direction: column;
  align-items: center;
  padding-right: 4px;
  padding-top: 21px;
`;

export const OverlaySideBar = styled.div`
  position: fixed;
  display: block;
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(225, 238, 253, 0.86);
  z-index: 2;
  transition: width 1s;
`;

export const SideBarDiv = styled.div`
  position: fixed;
  width: 0px;
  height: 100%;
  top: 0;
  left: 100;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 52, 120, 1);
  z-index: 4;
  transition: width 1s;
`;

export const SideBarContainer = styled.div`
  display: grid;

  grid-template-columns: 100%;
  grid-template-rows: 84px auto auto auto 35px;

  grid-template-areas:
    "CM"
    "GB"
    "EB"
    "GS"
    "VS";
  height: 100vh;
  width: 100%;
  background-color: var(--darkblue);
`;

export const SideBarCloseMenu = styled.div`
  grid-area: CM;
  background-color: var(--darkblue);

  display: flex;

  flex-direction: column;
  padding-left: 20px;
  padding-top: 21px;
  width: 100%;
  height: 100%;
`;

export const SideBarGroupContainer = styled.div`
  grid-area: GB;

  display: flex;

  flex-direction: column;
  width: 100%;
  height: 100%;

  z-index: 4;
`;
export const SideBarGroupContainer2 = styled.div`
  grid-area: GS;

  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  z-index: 4;
`;
export const VersionParte = styled.div`
  grid-area: VS;
  text-align: center;
  flex-direction: column;
  color: var(--white);
  padding-top: 10px;
  font-size: 12px;
  font-family: "Roboto Condensed";
  font-weight: lighter;
  white-space: nowrap;
  overflow: hidden; /* "overflow" value must be different from "visible" */
  text-overflow: ellipsis;
`;
export const UlGrupoBotoes = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 9px;
  list-style: none;
  z-index: 4;
  background: var(--darkblue);
`;
export const LiBotoes = styled.li`
  color: var(--white);
  font-family: "Roboto Condensed";
  font-weight: lighter;
  font-size: 14px;
  width: 100%;
  height: 54px;
  white-space: nowrap;
  overflow: hidden; /* "overflow" value must be different from "visible" */
  text-overflow: ellipsis;
`;

export const ContainerOpcoes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: var(--menuoptionblue);
`;

export const TextoOpcao = styled.div`
  margin-left: 30px;
`;
