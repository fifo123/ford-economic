import React from "react";
import {
  BotaoMenu /*, BotaoMenuBC, BotaoMenuBE, BotaoMenuBR, BotaoMenuBS, BotaoMenuBT, BotaoMenuBY, */,
  ContainerBotoesMenu,
  ImgIcon,
  LblBotao,
} from "./styles";

import EconomicIcon from "../../../assets/economic.svg";
import SensoresIcon from "../../../assets/sensores.svg";
import CompareseIcon from "../../../assets/comparese.svg";
import RelatoriosIcon from "../../../assets/relatorios.svg";
import TipsIcon from "../../../assets/tips.svg";
import FordIcon from "../../../assets/Ford_logo.svg";
import { useHistory } from "react-router-dom";

const ContainerBotoes: React.FC = () => {
  const history = useHistory();
  async function handleSensores() {
    history.push("sensores");
  }
  return (
    <>
      <ContainerBotoesMenu>
        <BotaoMenu gridArea={"BE"}>
          <ImgIcon src={EconomicIcon} />
          <LblBotao>Economic</LblBotao>
        </BotaoMenu>

        <BotaoMenu gridArea={"BS"} onClick={handleSensores}>
          <ImgIcon src={SensoresIcon} />
          <LblBotao>Sensores</LblBotao>
        </BotaoMenu>

        <BotaoMenu gridArea={"BC"}>
          <ImgIcon src={CompareseIcon} />
          <LblBotao>Compare-se</LblBotao>
        </BotaoMenu>
        <BotaoMenu gridArea={"BR"}>
          <ImgIcon src={RelatoriosIcon} />
          <LblBotao>Relatórios</LblBotao>
        </BotaoMenu>
        <BotaoMenu gridArea={"BT"}>
          <div>
            <ImgIcon src={TipsIcon} />
          </div>
          <LblBotao>Tips</LblBotao>
        </BotaoMenu>
        <BotaoMenu gridArea={"BY"} style={{ paddingTop: "20px" }}>
          <LblBotao style={{ fontWeight: "bold" }}>YOUR</LblBotao>
          <div>
            <ImgIcon src={FordIcon} width="62px" height="24px" />
          </div>
        </BotaoMenu>
      </ContainerBotoesMenu>
    </>
  );
};

export default ContainerBotoes;
