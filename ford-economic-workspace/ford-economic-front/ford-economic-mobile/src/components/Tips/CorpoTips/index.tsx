import React from 'react';
import { TitleTips } from '../../Tips/CorpoTips/styles';
import TipsList from '../TipsList';

import { GridHeader } from './styles';

const CorpoTips: React.FC = () =>{
    return(
        <GridHeader>
            <TitleTips> Tips </TitleTips>
            <TipsList />
        </GridHeader>
    )
};

export default CorpoTips;