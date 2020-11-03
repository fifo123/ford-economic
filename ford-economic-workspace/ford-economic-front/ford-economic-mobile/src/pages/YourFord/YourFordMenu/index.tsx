import { View } from "react-native";
import React from "react";
import {
  CaracteristicaPrincipal,
  CaracteristicaSecundaria,
  ContainerYourFordMenu,
  CriarYourFord,
  DivCarroYourFord,
  ImagemCarroYourFord,
  LiYourFordMenu,
  ProfileYourFord,
  TituloCarro,
  UlYourFordMenu,
  YourFordMenuGrid,
} from "./styles";
import FordHeader from "../../../components/Shared/Header";
import LabelTitulo from "../../../components/Shared/Titulo";

import FotoCarro from "../../../assets/carro.jpg";

import ArCondicionado from "../../../assets/arcondicionado.svg";
import Combustivel from "../../../assets/combustivel.svg";
import Motor from "../../../assets/motor.svg";
import Urbano from "../../../assets/urbano.svg";
import Viagem from "../../../assets/viagem.svg";
import { useHistory } from "react-router-dom";

const YourFordMenu: React.FC = () => {
  const history = useHistory();
  return (
    <View>
      <YourFordMenuGrid>
        <FordHeader />
        <LabelTitulo name={"Seus Carros"} fontSize={"36px"} />
        <CriarYourFord onClick={() => history.push("/your-ford-selecionar")}>
          Criar seu carro
        </CriarYourFord>
        <ContainerYourFordMenu>
          <UlYourFordMenu>
            <LiYourFordMenu>
              <TituloCarro>Ford Terrytory</TituloCarro>
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
                  <ImagemCarroYourFord src={Combustivel}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                  {" "}
                  <ImagemCarroYourFord src={Motor}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria>
                  {" "}
                  <ImagemCarroYourFord src={Urbano}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                  {" "}
                  <ImagemCarroYourFord src={Viagem}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
              </ProfileYourFord>
            </LiYourFordMenu>
            <LiYourFordMenu>
              <TituloCarro>Ford Terrytory</TituloCarro>
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
                  <ImagemCarroYourFord src={Combustivel}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                  {" "}
                  <ImagemCarroYourFord src={Motor}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria>
                  {" "}
                  <ImagemCarroYourFord src={Urbano}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                  {" "}
                  <ImagemCarroYourFord src={Viagem}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
              </ProfileYourFord>
            </LiYourFordMenu>
            <LiYourFordMenu>
              <TituloCarro>Ford Terrytory</TituloCarro>
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
                  <ImagemCarroYourFord src={Combustivel}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                  {" "}
                  <ImagemCarroYourFord src={Motor}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria>
                  {" "}
                  <ImagemCarroYourFord src={Urbano}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
                <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                  {" "}
                  <ImagemCarroYourFord src={Viagem}></ImagemCarroYourFord>
                </CaracteristicaSecundaria>
              </ProfileYourFord>
            </LiYourFordMenu>
          </UlYourFordMenu>
        </ContainerYourFordMenu>
      </YourFordMenuGrid>
    </View>
  );
};

export default YourFordMenu;
