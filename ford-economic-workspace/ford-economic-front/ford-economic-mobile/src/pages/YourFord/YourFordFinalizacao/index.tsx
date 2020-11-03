import { View } from "react-native";
import React from "react";
import FordHeader from "../../../components/Shared/Header";
import LabelTitulo from "../../../components/Shared/Titulo";
import {
  BotaoCadastrarYourFord,
  CaixaDeTexto,
  CaracteristicasContainerFinalizacao,
  ContainerFinalizacao,
  DivCaracteristicaPrincipal,
  DivCaracteristicas,
  DivCaracteristicaSecundaria,
  DivNomeCriado,
  DivUsoCarro,
  DivUsos,
  ImagemCarroFinalizacao,
  YourFordFinalizacaoGrid,
} from "./styles";

import FotoCarro from "../../../assets/carro.jpg";
import FotoAr from "../../../assets/arcondicionado.svg";

const YourFordFinalizacao: React.FC = () => {
  return (
    <View>
      <YourFordFinalizacaoGrid>
        <FordHeader />
        <LabelTitulo
          name={"Finalização, dê um nome para o seu novo carro"}
          fontSize={"24px"}
        />
        <DivNomeCriado>
          FORD
          <CaixaDeTexto></CaixaDeTexto>
        </DivNomeCriado>
        <ImagemCarroFinalizacao>
          <img
            src={FotoCarro}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "24px",
            }}
          ></img>
        </ImagemCarroFinalizacao>
        <ContainerFinalizacao>
          <CaracteristicasContainerFinalizacao>
            <DivCaracteristicas>
              <DivCaracteristicaPrincipal>
                <img
                  src={FotoAr}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivCaracteristicaPrincipal>
              <DivCaracteristicaSecundaria>
                <img
                  src={FotoAr}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivCaracteristicaSecundaria>
              <DivCaracteristicaSecundaria>
                <img
                  src={FotoAr}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivCaracteristicaSecundaria>
            </DivCaracteristicas>
            <DivUsos>
              <DivUsoCarro>
                {" "}
                <img
                  src={FotoAr}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivUsoCarro>
              <DivUsoCarro>
                {" "}
                <img
                  src={FotoAr}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivUsoCarro>
            </DivUsos>
          </CaracteristicasContainerFinalizacao>
          <BotaoCadastrarYourFord>Cadastrar Carro</BotaoCadastrarYourFord>
        </ContainerFinalizacao>
      </YourFordFinalizacaoGrid>
    </View>
  );
};

export default YourFordFinalizacao;
