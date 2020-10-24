import React from 'react';

import {Container, H1} from './styles';

import FordLogo from './../../../assets/Ford_logo.svg';

const Logo: React.FC = () =>{
    return(
        <Container>
            <img src={FordLogo} width="287px" height="111px" alt="Logo da Ford" />
            <H1>Economic</H1>
        </Container>
    )
};

export default Logo;