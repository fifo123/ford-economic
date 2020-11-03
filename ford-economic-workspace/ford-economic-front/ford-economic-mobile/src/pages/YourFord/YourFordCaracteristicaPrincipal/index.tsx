import { View } from "react-native";
import React from "react";
import {
  CaracteristicaDiv,
  CaracteristicasDiv,
  DivYourFordSelecaoCarro,
  YourFordImagemCarroSelecionado,
  YourFordSelecionarCPrincipalGrid,
  YourFordTexto,
  ImgIcon,
  LblBotao,
  ContainerCaracteristica,
} from "./styles";
import FordHeader from "../../../components/Shared/Header";
import LabelTitulo from "../../../components/Shared/Titulo";
import FotoCarro from "../../../assets/carro.jpg";

import LogoAr from "../../../assets/arcondicionado.svg";

const YourFordSelecionarCPrincipal: React.FC = () => {
  return (
    <View>
      <YourFordSelecionarCPrincipalGrid>
        <FordHeader />
        <DivYourFordSelecaoCarro style={{ marginTop: "25px" }}>
          <YourFordImagemCarroSelecionado
            src={FotoCarro}
            width="300px"
            height="200px"
          />
        </DivYourFordSelecaoCarro>
        <LabelTitulo
          name={"Selecione a característica principal"}
          fontSize={"24px"}
        />
        <CaracteristicasDiv>
          <CaracteristicaDiv>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
          <CaracteristicaDiv>
            <ContainerCaracteristica>
              <ImgIcon src={LogoAr} width="40px" height="40px"></ImgIcon>
              <LblBotao>Ar-Condicionado</LblBotao>
            </ContainerCaracteristica>
          </CaracteristicaDiv>
        </CaracteristicasDiv>
      </YourFordSelecionarCPrincipalGrid>
      <YourFordTexto style={{ marginTop: "25px", marginBottom: "20px" }}>
        Clique no que você mais gostou
      </YourFordTexto>
      <YourFordTexto style={{ width: "250px", margin: "0 auto" }}>
        Aqui você seleciona qual característica você mais gosta, ou ache mais
        importante para o seu carro
      </YourFordTexto>
    </View>
  );
};

export default YourFordSelecionarCPrincipal;
