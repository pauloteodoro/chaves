
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importação telas
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Cadastro from '../Pages/Cadastro';




const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;