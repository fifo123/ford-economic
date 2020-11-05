import { View } from "react-native";
import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";
import { CaracteristicaYourFord } from "../interface/your-ford-caracteristica.interface";
import api from "../../../services";

const YourFordSelecionarCPrincipal: React.FC = () => {
  const history = useHistory();

  const [caracteristicas, setCaracteristica] = useState<
    CaracteristicaYourFord[]
  >([{}]);

  useEffect(() => {
    api.get("/caracteristica").then((response) => {
      console.log(response.data);

      setCaracteristica(response.data.caracteristicas);
    });
  }, []);

  function handleCaracteristica(e: any) {
    const idImage: string = e.currentTarget.id;
    const [id, image] = idImage.split(" ");
    localStorage.setItem("principalId", id);
    localStorage.setItem("principalIcone", image);
    history.push("/your-ford-secundaria");
  }

  return (
    <View>
      <YourFordSelecionarCPrincipalGrid>
        <FordHeader />
        <DivYourFordSelecaoCarro style={{ marginTop: "25px" }}>
          <YourFordImagemCarroSelecionado
            src={localStorage.getItem("modeloImage") as string}
            width="300px"
            height="200px"
          />
        </DivYourFordSelecaoCarro>
        <LabelTitulo
          name={"Selecione a característica principal"}
          fontSize={"24px"}
        />
        <CaracteristicasDiv>
          {caracteristicas.map((caracteristica) => (
            <CaracteristicaDiv
              onClick={handleCaracteristica}
              id={caracteristica.id?.toString() + " " + caracteristica.icone}
            >
              <ContainerCaracteristica style={{ width: "103px" }}>
                <ImgIcon
                  src={`http://localhost:3000/get-image/?imagem=${caracteristica.icone}`}
                  width="40px"
                  height="40px"
                ></ImgIcon>
                <LblBotao>{caracteristica.nome}</LblBotao>
              </ContainerCaracteristica>
            </CaracteristicaDiv>
          ))}
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
