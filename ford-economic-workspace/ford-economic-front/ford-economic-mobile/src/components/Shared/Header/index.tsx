import React from 'react';

import {Container, GridHeader, LogoHeader, TextHeader, MenuHeader } from './styles';

import FordLogo from './../../../assets/Ford_logo.svg';

import MenuSvg from './../../../assets/menu.svg';

const Logo: React.FC = () =>{
    return(
        <Container>
            <GridHeader>
                <LogoHeader src={FordLogo}/>
                <TextHeader> Economic </TextHeader>
                <MenuHeader src={MenuSvg}/>
            </GridHeader>
        </Container>
    )
};

export default Logo;