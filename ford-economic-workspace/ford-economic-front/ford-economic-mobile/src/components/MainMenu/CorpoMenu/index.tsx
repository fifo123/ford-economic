import React from "react";
import { Botoes, ImagemDivMenu, ImagemMenu } from "./styles";
import ContainerBotoes from "../Botoes/index";
import LabelTitulo from "../../Shared/Titulo/";

import FotoCarro from "../../../assets/carro.jpg";

const CorpoMenu: React.FC = () => {
  return (
    <>
      <LabelTitulo name={"Olá, Rosane Filha Guedes"} />
      <ImagemDivMenu>
        <ImagemMenu src={FotoCarro} />
      </ImagemDivMenu>
      <Botoes>
        <ContainerBotoes></ContainerBotoes>
      </Botoes>
    </>
  );
};

export default CorpoMenu;
