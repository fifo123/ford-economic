import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {ButtonForm, Container, FooterForm, IdInput, LabelForm, SenhaInput} from './styles';

const Form: React.FC = () =>{
    const history = useHistory();
    async function handleSubmit() {
        history.push('main')
    } 
    return(
        <Container>
            <IdInput placeholder="Ford Id" />
            <SenhaInput placeholder="Senha" type="password" />
                <ButtonForm onClick={handleSubmit}> Entrar </ButtonForm>
            <LabelForm>Cadastre seu ford aqui.</LabelForm>
            <FooterForm>Desenvolvido com ♥ por Next Level</FooterForm>
        </Container>
    )
};

export default Form;