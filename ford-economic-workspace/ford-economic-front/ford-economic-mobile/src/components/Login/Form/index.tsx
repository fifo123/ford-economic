import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UsuarioEntity } from "./usuario.entity";

import {ButtonForm, Container, FooterForm, IdInput, LabelForm, SenhaInput} from './styles';

const Form: React.FC = () =>{
    const history = useHistory();
    async function handleSubmit(fordId: string, senha:string){
        var fordId = document.getElementById("fordId").innerHTML;
        var senha = document.getElementById("senha").innerHTML;
        if(fordId == ' ' || senha == ' '){
            alert("Por favor preencha todos os campos");
        }
        return;
    } 
    return(
        <Container>
            <IdInput id="fordId" placeholder="Ford Id" />
            <SenhaInput id="senha" placeholder="Senha" type="password" />
                <ButtonForm onClick={handleSubmit}> Entrar </ButtonForm>
            <LabelForm>Cadastre seu ford aqui.</LabelForm>
            <FooterForm>Desenvolvido com ♥ por Next Level</FooterForm>
        </Container>
    )
};

export default Form;
