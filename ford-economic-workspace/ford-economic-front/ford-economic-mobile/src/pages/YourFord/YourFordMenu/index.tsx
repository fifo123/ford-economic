import { View } from "react-native";
import React, { useEffect, useState } from "react";
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
import api from "../../../services";
import { YourFord } from "../interface/your-ford.interface";

const YourFordMenu: React.FC = () => {
  const history = useHistory();

  const [yourFords, setYourFords] = useState<YourFord[]>([{}]);

  useEffect(() => {
    api
      .get(`/your-ford/listar-usuario/${localStorage.getItem("idUsuario")}`)
      .then((response) => {
        console.log(response.data);

        setYourFords(response.data.yourFords);
      });
  }, []);

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
            {yourFords.map((ford) => (
              <LiYourFordMenu>
                <TituloCarro>Ford {ford.nome}</TituloCarro>
                <DivCarroYourFord>
                  <ImagemCarroYourFord
                    src={`http://localhost:3000/get-image/?imagem=${ford.modelo?.imagem}`}
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
                      src={`http://localhost:3000/get-image/?imagem=${ford.caracteristicaPrincipal?.icone}`}
                      style={{ width: "100%", height: "100%" }}
                    ></ImagemCarroYourFord>
                  </CaracteristicaPrincipal>
                  <CaracteristicaSecundaria>
                    {" "}
                    <ImagemCarroYourFord
                      src={`http://localhost:3000/get-image/?imagem=${ford.caracteristicaSecundaria1?.icone}`}
                    ></ImagemCarroYourFord>
                  </CaracteristicaSecundaria>
                  <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                    {" "}
                    <ImagemCarroYourFord
                      src={`http://localhost:3000/get-image/?imagem=${ford.caracteristicaSecundaria2?.icone}`}
                    ></ImagemCarroYourFord>
                  </CaracteristicaSecundaria>
                  <CaracteristicaSecundaria>
                    {" "}
                    <ImagemCarroYourFord
                      src={`http://localhost:3000/get-image/?imagem=${ford.usoCarro1?.icone}`}
                    ></ImagemCarroYourFord>
                  </CaracteristicaSecundaria>
                  <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
                    {" "}
                    <ImagemCarroYourFord
                      src={`http://localhost:3000/get-image/?imagem=${ford.usoCarro2?.icone}`}
                    ></ImagemCarroYourFord>
                  </CaracteristicaSecundaria>
                </ProfileYourFord>
              </LiYourFordMenu>
            ))}
          </UlYourFordMenu>
        </ContainerYourFordMenu>
      </YourFordMenuGrid>
    </View>
  );
};

export default YourFordMenu;
