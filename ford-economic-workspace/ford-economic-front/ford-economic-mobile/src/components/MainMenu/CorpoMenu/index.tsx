import React from "react";
import { Botoes, ImagemDivMenu, ImagemMenu } from "./styles";
import ContainerBotoes from "../Botoes/index";
import LabelTitulo from "../../Shared/Titulo/";

import FotoCarro from "../../../assets/carro.jpg";
import { useHistory } from "react-router-dom";

const CorpoMenu: React.FC = () => {
  const history = useHistory();
  if (
    localStorage.getItem("idUsuario") == null ||
    localStorage.getItem("idGrupoFamiliar") == null ||
    localStorage.getItem("nomeUsuario") == null
  ) {
    localStorage.removeItem("carroId");
    localStorage.removeItem("idUsuario");
    localStorage.removeItem("idGrupoFamiliar");
    localStorage.removeItem("nomeUsuario");
    history.push("/");
  }
  if (
    localStorage.getItem("carroId") == null ||
    localStorage.getItem("imagemCarro") == null
  ) {
    localStorage.removeItem("carroId");
    localStorage.removeItem("imagemCarro");
    history.push("/selecionar");
  }

  return (
    <>
      <LabelTitulo name={`${localStorage.getItem("nomeUsuario")}`} />
      <ImagemDivMenu>
        <ImagemMenu
          src={`http://localhost:3000/get-image/?imagem=${localStorage.getItem(
            "imagemCarro"
          )}`}
        />
      </ImagemDivMenu>
      <Botoes>
        <ContainerBotoes></ContainerBotoes>
      </Botoes>
    </>
  );
};

export default CorpoMenu;
