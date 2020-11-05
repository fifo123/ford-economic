import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../../services";

import NavegacaoEntreCarro from "../NavegacaoEntreCarro";
import SelecaoCarroDetalhes from "../SelecaoCarroDetalhes";

import { CarNameSelected, SelecaoCarrosBotoes } from "./styles";

const CorpoSelecaoCarro: React.FC = () => {
  const history = useHistory();
  const [carros, setCarros] = useState<any[]>();
  const [index, setIndex] = useState<number>(0);
  const [totalCarros, setTotalCarros] = useState<number>();
  const [carro, setCarro] = useState<any>();

  if (localStorage.getItem("idGrupoFamiliar") == null) {
    history.push("/");
  }

  useEffect(() => {
    api
      .get<any[]>(
        `/carro/listar-grupo/${localStorage.getItem("idGrupoFamiliar")}`
      )
      .then((response) => {
        console.log("0", response.data);

        setCarros(response.data);
        setTotalCarros(response.data.length);
        setCarro(response.data[0]);
        setTotalCarros(response.data.length);
      });
  }, []);

  return (
    <>
      <NavegacaoEntreCarro
        imagem={`http://localhost:3000/get-image/?imagem=${
          carro ? carro.imagem : "notfound"
        }`}
        seletorDireita={() => {
          if (index + 1 >= (totalCarros as number)) {
            setIndex(0);
            setCarro((carros as any[])[0]);
          } else {
            setCarro((carros as any[])[index + 1]);
            setIndex(index + 1);
          }
        }}
        seletorEsquerda={() => {
          if (index - 1 < 0) {
            setIndex((totalCarros as number) - 1);
            setCarro((carros as any[])[(totalCarros as number) - 1]);
          } else {
            setCarro((carros as any[])[index - 1]);
            setIndex(index - 1);
          }
        }}
      />
      <CarNameSelected> {carro ? carro.modelo : ""} </CarNameSelected>
      <SelecaoCarroDetalhes
        kmTotal={
          carro ? (carro.quilometragem == null ? 0 : carro.quilometragem) : 0
        }
        atribuido={carro ? carro.usuario.nome : ""}
      />
      <SelecaoCarrosBotoes
        onClick={() => {
          localStorage.setItem("carroId", carro.id);
          localStorage.setItem("imagemCarro", carro.imagem);
          history.push("/main");
        }}
      >
        Selecionar
      </SelecaoCarrosBotoes>
      <SelecaoCarrosBotoes>Localizar</SelecaoCarrosBotoes>
    </>
  );
};

export default CorpoSelecaoCarro;
