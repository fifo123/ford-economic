import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../../services";
import { Usuario } from "../interface/usuario.interface";

import {
  ButtonForm,
  Container,
  FooterForm,
  IdInput,
  LabelForm,
  SenhaInput,
} from "./styles";

const Form: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  async function handleSubmit() {
    console.log(email, senha);
    try {
      await api
        .post<Usuario>("/usuario/login", {
          email,
          senha,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("idUsuario", response.data.id.toString());
          localStorage.setItem("nomeUsuario", response.data.nome);

          localStorage.setItem(
            "idGrupoFamiliar",
            response.data.grupoFamiliar.id.toString()
          );
          console.log(response.data.nome);

          history.push("/selecionar");
        });
    } catch (error) {
      const email = document.getElementById("email") as HTMLElement;
      const senha = document.getElementById("senha") as HTMLElement;
      email.style.border = "2px solid var(--darkred)";
      email.style.color = "var(--darkred)";
      senha.style.border = "2px solid var(--darkred)";
      senha.style.color = "var(--darkred)";
    }

    // history.push("main");
  }
  return (
    <Container>
      <IdInput
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
        type="email"
        id="email"
      />
      <SenhaInput
        onChange={(e) => {
          setSenha(e.target.value);
        }}
        placeholder="Senha"
        type="password"
        id="senha"
      />
      <ButtonForm onClick={handleSubmit}> Entrar </ButtonForm>
      <LabelForm>Cadastre seu ford aqui.</LabelForm>
      <FooterForm>Desenvolvido com ♥ por Next Level</FooterForm>
    </Container>
  );
};

export default Form;
