import { View } from "react-native";
import React, { useEffect, useState } from "react";
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

import api from "../../../services";
import { YourFordCriar } from "../interface/your-ford-criar.interface";
import { useHistory } from "react-router-dom";

const YourFordFinalizacao: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const history = useHistory();
  async function handleSubmit() {
    if (nome == "") {
      const nomeinput = document.getElementById("nome") as HTMLElement;
      nomeinput.style.borderBottomColor = "var(--darkred)";
    } else {
      await api
        .post<YourFordCriar, any>("/your-ford/criar", {
          nome,
          caracteristicaPrincipal: +(localStorage.getItem(
            "principalId"
          ) as string),
          caracteristicaSecundaria1: +(localStorage.getItem(
            "secundaria1Id"
          ) as string),
          caracteristicaSecundaria2: +(localStorage.getItem(
            "secundaria2Id"
          ) as string),
          usoCarro1: +(localStorage.getItem("uso1Id") as string),
          usoCarro2: +(localStorage.getItem("uso2Id") as string),
          modelo: +(localStorage.getItem("modeloId") as string),
          usuario: +(localStorage.getItem("idUsuario") as string),
        })
        .then((response) => {
          console.log(response.data);
          localStorage.removeItem("principalIcone");
          localStorage.removeItem("modeloImage");
          localStorage.removeItem("principalId");
          localStorage.removeItem("uso2Icone");
          localStorage.removeItem("secundaria2Id");
          localStorage.removeItem("uso2Id");
          localStorage.removeItem("secundaria1Icone");
          localStorage.removeItem("uso1Icone");
          localStorage.removeItem("modeloId");
          localStorage.removeItem("secundaria1Id");
          localStorage.removeItem("secundaria2Icone");
          localStorage.removeItem("uso1Id");
          history.push("/your-ford-menu");
        });
    }
  }

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
          <CaixaDeTexto
            id="nome"
            onChange={(e) => setNome(e.target.value)}
          ></CaixaDeTexto>
        </DivNomeCriado>
        <ImagemCarroFinalizacao>
          <img
            src={localStorage.getItem("modeloImage") as string}
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
                  src={`http://localhost:3000/get-image/?imagem=${
                    localStorage.getItem("principalIcone") as string
                  }`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivCaracteristicaPrincipal>
              <DivCaracteristicaSecundaria>
                <img
                  src={`http://localhost:3000/get-image/?imagem=${
                    localStorage.getItem("secundaria1Icone") as string
                  }`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivCaracteristicaSecundaria>
              <DivCaracteristicaSecundaria>
                <img
                  src={`http://localhost:3000/get-image/?imagem=${
                    localStorage.getItem("secundaria2Icone") as string
                  }`}
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
                  src={`http://localhost:3000/get-image/?imagem=${
                    localStorage.getItem("uso1Icone") as string
                  }`}
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
                  src={`http://localhost:3000/get-image/?imagem=${
                    localStorage.getItem("uso2Icone") as string
                  }`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                  }}
                ></img>
              </DivUsoCarro>
            </DivUsos>
          </CaracteristicasContainerFinalizacao>
          <BotaoCadastrarYourFord onClick={handleSubmit}>
            Cadastrar Carro
          </BotaoCadastrarYourFord>
        </ContainerFinalizacao>
      </YourFordFinalizacaoGrid>
    </View>
  );
};

export default YourFordFinalizacao;
