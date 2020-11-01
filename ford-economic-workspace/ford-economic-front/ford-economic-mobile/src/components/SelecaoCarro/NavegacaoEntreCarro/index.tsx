import React from "react";

import Carousel from "react-bootstrap/Carousel";

import Carro from "../../../assets/carro.jpg";
import RightSeletor from "../../../assets/right_arrow.svg";
import LeftSeletor from "../../../assets/left_arrow.svg";

import { DivSelecaoCarro, ImagemCarroSelecionado, Seletor } from "./styles";

const NavegacaoEntreCarro: React.FC = () => {
  return (
    <>
      <DivSelecaoCarro>
        <Seletor src={LeftSeletor} width="30px" height="50px" />
        <ImagemCarroSelecionado src={Carro} width="270px" height="192px" />
        <Seletor src={RightSeletor} width="30px" height="50px" />
      </DivSelecaoCarro>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Carro} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit lsbero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default NavegacaoEntreCarro;
