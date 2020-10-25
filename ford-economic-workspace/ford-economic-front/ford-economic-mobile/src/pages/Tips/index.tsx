import { View } from 'react-native';
import React from 'react';
import { TipsGrid } from './styles';
import FordHeader from '../../components/Shared/Header';
import { MainMenuGrid } from '../MainMenu/styles';
import CorpoTips from '../../components/Tips/CorpoTips';

const Tips: React.FC = () =>{
    return(
        <View>
            <TipsGrid>
                <FordHeader />
                <CorpoTips />
            </TipsGrid>
        </View>
    );
}

export default Tips;