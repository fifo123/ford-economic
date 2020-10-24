import React from 'react';

import {ButtonForm, Container, FooterForm, IdInput, LabelForm, SenhaInput} from './styles';

const Form: React.FC = () =>{
    return(
        <Container>
            <IdInput placeholder="Ford Id" />
            <SenhaInput placeholder="Senha" type="password" />
            <ButtonForm> Entrar </ButtonForm>
            <LabelForm>Cadastre seu ford aqui.</LabelForm>
            <FooterForm>Desenvolvido com ♥ por Next Level</FooterForm>
        </Container>
    )
};

export default Form;