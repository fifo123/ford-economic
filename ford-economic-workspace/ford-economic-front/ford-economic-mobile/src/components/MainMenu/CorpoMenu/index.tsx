import React from 'react';
import { Botoes, ImagemDivMenu, ImagemMenu, LabelMenu } from './styles';
import ContainerBotoes from '../Botoes/index';

import FotoCarro from '../../../assets/carro.jpg';

const CorpoMenu: React.FC = () =>{
    return(
        <>
        <LabelMenu >Olá, Rosane Filha Guedes</LabelMenu>
        <ImagemDivMenu>
            <ImagemMenu src={FotoCarro} />
        </ImagemDivMenu>
        <Botoes>
            <ContainerBotoes>

            </ContainerBotoes>
        </Botoes>
        </>
    );
}

export default CorpoMenu;