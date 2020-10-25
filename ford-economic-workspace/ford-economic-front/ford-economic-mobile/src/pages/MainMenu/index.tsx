import { View } from 'react-native';
import React from 'react';
import { MainMenuGrid } from './styles';
import FordHeader from '../../components/Shared/Header';
import CorpoMenu from '../../components/MainMenu/CorpoMenu';

const MainMenu: React.FC = () =>{
    return(
        <View>
            <MainMenuGrid>
                <FordHeader />
                <CorpoMenu />
            </MainMenuGrid>
        </View>
    );
}

export default MainMenu;