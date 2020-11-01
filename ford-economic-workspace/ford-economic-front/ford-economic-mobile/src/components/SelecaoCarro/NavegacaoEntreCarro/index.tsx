import React, { useState } from "react";

import RightSeletor from "../../../assets/right_arrow.svg";
import LeftSeletor from "../../../assets/left_arrow.svg";

import { DivSelecaoCarro, ImagemCarroSelecionado, Seletor } from "./styles";

const NavegacaoEntreCarro: React.FC<{
  imagem: string;
  seletorEsquerda(): any;
  seletorDireita(): any;
}> = (props) => {
  return (
    <>
      <DivSelecaoCarro>
        <Seletor
          id="seletorDireito"
          src={LeftSeletor}
          width="30px"
          height="50px"
          onClick={props.seletorEsquerda}
        />
        <ImagemCarroSelecionado
          src={props.imagem}
          width="300px"
          height="200px"
        />
        <Seletor
          id="seletorEsquerdo"
          src={RightSeletor}
          width="30px"
          height="50px"
          onClick={props.seletorDireita}
        />
      </DivSelecaoCarro>
    </>
  );
};

export default NavegacaoEntreCarro;
