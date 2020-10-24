import { Text, View } from 'react-native';
import React from 'react';
import { Grid } from './styles';
import Logo from '../../components/Login/Logo';
import Form from '../../components/Login/Form';

const Login: React.FC = () =>{
    return(
        <View>
            <Grid>
                <Logo />
                <Form />
            </Grid>
        </View>
    );
}

export default Login;