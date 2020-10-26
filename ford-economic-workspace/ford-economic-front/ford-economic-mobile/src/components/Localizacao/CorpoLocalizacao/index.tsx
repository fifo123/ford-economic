import React from "react";
import CarroSeletor from "../LocalizacaoSeletorCarro";
import { EnderecoLocalizacao, ImagemLocalizacao } from "./styles";
import Localizacao from "../../../assets/localizacao.png";

const CorpoLocalizacao: React.FC = () => {
  return (
    <>
      <CarroSeletor />
      <ImagemLocalizacao src={Localizacao} width="308px" height="383px" />
      <EnderecoLocalizacao>
        Av. Ede, 311 - Vila Ede - São Paulo, SP Brasil
      </EnderecoLocalizacao>
    </>
  );
};

export default CorpoLocalizacao;
