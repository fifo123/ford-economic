import { View } from "react-native";
import React, { useState } from "react";
import {
  CaracteristicaDiv,
  CaracteristicasDiv,
  DivYourFordSelecaoCarro,
  YourFordImagemCarroSelecionado,
  YourFordSelecionarCSecundariaGrid,
  YourFordTexto,
  ImgIcon,
  LblBotao,
  ContainerCaracteristica,
} from "./styles";
import FordHeader from "../../../components/Shared/Header";
import LabelTitulo from "../../../components/Shared/Titulo";
import FotoCarro from "../../../assets/carro.jpg";

import ArCondicionado from "../../../assets/arcondicionado.svg";
import Combustivel from "../../../assets/combustivel.svg";
import Motor from "../../../assets/motor.svg";

import LogoAr from "../../../assets/arcondicionado.svg";
import {
  CaracteristicaPrincipal,
  CaracteristicaSecundaria,
  DivCarroYourFord,
  ImagemCarroYourFord,
  ProfileYourFord,
} from "../YourFordMenu/styles";
import { useHistory } from "react-router-dom";

const YourFordSelecionarCSecundaria: React.FC = () => {
  const history = useHistory();
  const [imagem1, setImagem1] = useState<{ icone?: string; id?: string }>({
    id: "",
    icone: "",
  });
  const [imagem2, setImagem2] = useState<{ icone?: string; id?: string }>({
    id: "",
    icone: "",
  });

  function handleCaracteristica(e: any) {
    console.log(e);
    console.log(imagem1);
    console.log(imagem1.id == undefined);
    const id = e.currentTarget.id;
    const elementCaracteristica = document.getElementById(id) as HTMLElement;
    if (imagem1.id == id) {
      elementCaracteristica.style.border = "0px solid var(--white)";
      setImagem1({ id: "", icone: "" });
      console.log("deselcionando imagem 1");

      return;
    }
    if (imagem2.id == id) {
      elementCaracteristica.style.border = "0px solid var(--darkblue)";
      setImagem2({ icone: "", id: "" });
      console.log("deselcionando imagem 2");
      return;
    }
    if (imagem1.id == "") {
      elementCaracteristica.style.border = "2px solid var(--darkblue)";
      setImagem1({ icone: LogoAr, id });
      console.log("imagem 1 vazio, selecionando imagem 1");

      return;
    }
    if (imagem2.id == "") {
      elementCaracteristica.style.border = "2px solid var(--darkblue)";
      setImagem2({ icone: LogoAr, id });
      console.log("imagem 1 cheio e imagem 2 vazio, selecionando imagem 2");
      history.push("/your-ford-uso");
      return;
    }
  }
  return (
    <View>
      <YourFordSelecionarCSecundariaGrid>
        <FordHeader />
        <DivYourFordSelecaoCarro>
          <DivCarroYourFord>
            <ImagemCarroYourFord
              src={FotoCarro}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
              }}
            ></ImagemCarroYourFord>
          </DivCarroYourFord>
          <ProfileYourFord>
            <CaracteristicaPrincipal>
              {" "}
              <ImagemCarroYourFord
                src={ArCondicionado}
                style={{ width: "100%", height: "100%" }}
              ></ImagemCarroYourFord>
            </CaracteristicaPrincipal>
            <CaracteristicaSecundaria>
              {" "}
              <ImagemCarroYourFord src={imagem1.icone}></ImagemCarroYourFord>
            </CaracteristicaSecundaria>
            <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
              {" "}
              <ImagemCarroYourFord src={imagem2.icone}></ImagemCarroYourFord>
            </CaracteristicaSecundaria>
            <CaracteristicaSecundaria> </CaracteristicaSecundaria>
            <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
              {" "}
            </CaracteristicaSecundaria>
          </ProfileYourFord>
        </DivYourFordSelecaoCarro>
        <LabelTitulo name={"Selecione mais duas opções"} fontSize={"24px"} />
        <CaracteristicasDiv>
          <CaracteristicaDiv
            id="Ar-Condicionado"
            onClick={handleCaracteristica}
          >
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv id="Uso Geral" onClick={handleCaracteristica}>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv id="Motor" onClick={handleCaracteristica}>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv id="Combustivel" onClick={handleCaracteristica}>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv
            id="Ar-Condicionado"
            onClick={handleCaracteristica}
          >
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv
            id="Ar-Condicionado"
            onClick={handleCaracteristica}
          >
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
        </CaracteristicasDiv>
      </YourFordSelecionarCSecundariaGrid>
      <YourFordTexto style={{ marginTop: "25px", marginBottom: "20px" }}>
        Clique no que você mais gostou
      </YourFordTexto>
      <YourFordTexto style={{ width: "250px", margin: "0 auto" }}>
        Aqui você seleciona mais duas caractéristicas do seu gosto.
      </YourFordTexto>
    </View>
  );
};

export default YourFordSelecionarCSecundaria;
