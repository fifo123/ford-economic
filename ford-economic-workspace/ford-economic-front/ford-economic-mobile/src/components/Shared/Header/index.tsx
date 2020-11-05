import React from "react";

import {
  Container,
  GridHeader,
  LogoHeader,
  TextHeader,
  MenuHeader,
  OverlaySideBar,
  SideBarDiv,
  SideBarContainer,
  SideBarCloseMenu,
  SideBarGroupContainer,
  UlGrupoBotoes,
  LiBotoes,
  SideBarGroupContainer2,
  VersionParte,
  ContainerOpcoes,
  TextoOpcao,
} from "./styles";

import FordLogo from "./../../../assets/Ford_logo.svg";

import MenuSvg from "./../../../assets/menu.svg";
import ProfileSvg from "./../../../assets/profile.svg";
import SelecioneSvg from "./../../../assets/selecionecarro.svg";
import HomeSvg from "./../../../assets/home.svg";
import AboutUsSvg from "./../../../assets/aboutus.svg";
import FaleConoscoSvg from "./../../../assets/faleconosco.svg";
import ConfiguracoesSvg from "./../../../assets/configuracoes.svg";
import SairSvg from "./../../../assets/sair.svg";

import { useHistory } from "react-router-dom";

const FordHeader: React.FC = () => {
  function on() {
    const elementOverlay = document.getElementById("overlay") as HTMLElement;
    const elementSideBar = document.getElementById("side-bar") as HTMLElement;
    elementOverlay.style.width = "100%";
    elementSideBar.style.width = "272px";
  }
  function off() {
    const elementOverlay = document.getElementById("overlay") as HTMLElement;
    const elementSideBar = document.getElementById("side-bar") as HTMLElement;
    elementOverlay.style.width = "0%";
    elementSideBar.style.width = "0px";
  }
  const history = useHistory();
  async function handleMenu() {
    off();
    history.push("main");
  }
  return (
    <>
      <Container>
        <GridHeader>
          <LogoHeader>
            <img
              src={FordLogo}
              width="121px"
              onClick={handleMenu}
              height="48px"
            />
          </LogoHeader>
          <TextHeader> Economic </TextHeader>
          <MenuHeader>
            <img src={MenuSvg} width="36px" height="29px" onClick={on} />
          </MenuHeader>
        </GridHeader>
      </Container>
      <OverlaySideBar id="overlay" onClick={off} />
      <SideBarDiv id="side-bar">
        <SideBarContainer>
          <SideBarCloseMenu>
            <img src={MenuSvg} width="36px" height="29px" onClick={off} />
          </SideBarCloseMenu>
          <SideBarGroupContainer>
            <UlGrupoBotoes>
              <LiBotoes>
                <ContainerOpcoes>
                  <img src={ProfileSvg} width="30px" height="30px" />
                  <TextoOpcao>Profile</TextoOpcao>
                </ContainerOpcoes>
              </LiBotoes>
              <LiBotoes>
                <ContainerOpcoes>
                  <img src={SelecioneSvg} width="30px" height="40px" />
                  <TextoOpcao>Selecione seu carro</TextoOpcao>
                </ContainerOpcoes>
              </LiBotoes>
              <LiBotoes>
                <ContainerOpcoes onClick={handleMenu}>
                  <img src={HomeSvg} width="30px" height="30px" />
                  <TextoOpcao>Menu Principal</TextoOpcao>
                </ContainerOpcoes>
              </LiBotoes>
            </UlGrupoBotoes>
          </SideBarGroupContainer>
          <SideBarGroupContainer2>
            <UlGrupoBotoes>
              <LiBotoes>
                <ContainerOpcoes>
                  <img src={FaleConoscoSvg} width="30px" height="30px" />
                  <TextoOpcao>Fale Conosco</TextoOpcao>
                </ContainerOpcoes>
              </LiBotoes>
              <LiBotoes>
                <ContainerOpcoes>
                  <img src={AboutUsSvg} width="30px" height="30px" />
                  <TextoOpcao>About Us</TextoOpcao>
                </ContainerOpcoes>
              </LiBotoes>
              <LiBotoes>
                <ContainerOpcoes>
                  <img src={ConfiguracoesSvg} width="30px" height="30px" />
                  <TextoOpcao>Configurações</TextoOpcao>
                </ContainerOpcoes>
              </LiBotoes>
              <LiBotoes>
                <ContainerOpcoes>
                  <img src={SairSvg} width="30px" height="30px" />
                  <TextoOpcao>Sair</TextoOpcao>
                </ContainerOpcoes>
              </LiBotoes>
            </UlGrupoBotoes>
          </SideBarGroupContainer2>
          <VersionParte>Next - Level Ford Economic 0.1.1 2020</VersionParte>
        </SideBarContainer>
      </SideBarDiv>
    </>
  );
};

export default FordHeader;
