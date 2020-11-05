import { View } from "react-native";
import React, { useEffect, useState } from "react";
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

import LogoAr from "../../../assets/arcondicionado.svg";
import {
  CaracteristicaPrincipal,
  CaracteristicaSecundaria,
  DivCarroYourFord,
  ImagemCarroYourFord,
  ProfileYourFord,
} from "../YourFordMenu/styles";
import { useHistory } from "react-router-dom";
import { CaracteristicaYourFord } from "../interface/your-ford-caracteristica.interface";
import api from "../../../services";

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

  const [gambs, setGambs] = useState<number>();

  const [caracteristicas, setCaracteristica] = useState<
    CaracteristicaYourFord[]
  >([{}]);

  useEffect(() => {
    api.get("/caracteristica").then((response) => {
      console.log(response.data);
      setCaracteristica(response.data.caracteristicas);
      setGambs(0);
    });
  }, []);

  useEffect(() => {
    const carac = caracteristicas.filter((caracteristica) => {
      if (caracteristica.id)
        if (
          (caracteristica.id as number).toString() !=
          localStorage.getItem("principalId")
        )
          return 1;
    });
    setCaracteristica(carac);
  }, [gambs]);

  function handleCaracteristica(e: any) {
    console.log(e);
    console.log(imagem1);
    console.log(imagem1.id == undefined);
    const idIcone = e.currentTarget.id;
    const [id, icone] = idIcone.split(" ");
    const elementCaracteristica = document.getElementById(
      idIcone
    ) as HTMLElement;
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
      setImagem1({ icone, id });
      console.log("imagem 1 vazio, selecionando imagem 1");

      return;
    }
    if (imagem2.id == "") {
      elementCaracteristica.style.border = "2px solid var(--darkblue)";
      localStorage.setItem("secundaria1Id", imagem1.id as string);
      localStorage.setItem("secundaria1Icone", imagem1.icone as string);
      localStorage.setItem("secundaria2Id", id as string);
      localStorage.setItem("secundaria2Icone", icone as string);
      setImagem2({ icone, id });
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
              src={localStorage.getItem("modeloImage") as string}
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
                src={`http://localhost:3000/get-image/?imagem=${
                  localStorage.getItem("principalIcone") as string
                }`}
                style={{ width: "100%", height: "100%" }}
              ></ImagemCarroYourFord>
            </CaracteristicaPrincipal>
            <CaracteristicaSecundaria>
              {" "}
              <ImagemCarroYourFord
                src={
                  imagem1.icone
                    ? `http://localhost:3000/get-image/?imagem=${imagem1.icone}`
                    : ""
                }
              ></ImagemCarroYourFord>
            </CaracteristicaSecundaria>
            <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
              {" "}
              <ImagemCarroYourFord
                src={
                  imagem2.icone
                    ? `http://localhost:3000/get-image/?imagem=${imagem2.icone}`
                    : ""
                }
              ></ImagemCarroYourFord>
            </CaracteristicaSecundaria>
            <CaracteristicaSecundaria> </CaracteristicaSecundaria>
            <CaracteristicaSecundaria style={{ marginLeft: "5.5px" }}>
              {" "}
            </CaracteristicaSecundaria>
          </ProfileYourFord>
        </DivYourFordSelecaoCarro>
        <LabelTitulo name={"Selecione mais duas opções"} fontSize={"24px"} />
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
