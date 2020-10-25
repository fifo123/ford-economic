import React from 'react';

import {Container, GridHeader, LogoHeader, TextHeader, MenuHeader } from './styles';

import FordLogo from './../../../assets/Ford_logo.svg';

import MenuSvg from './../../../assets/menu.svg';

const FordHeader: React.FC = () =>{
    return(
        <Container>
            <GridHeader>
                <LogoHeader>
                    <img src={FordLogo} width="121px" height="48px" />
                </LogoHeader>
                <TextHeader> Economic </TextHeader>
                <MenuHeader>
                    <img src={MenuSvg} width="36px" height="29px" />
                </ MenuHeader>
            </GridHeader>
        </Container>
    )
};

export default FordHeader;