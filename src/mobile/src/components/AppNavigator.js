import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import BoasVindas from './BoasVindas';
import Nbar from './nav';
import Cadastro from './cadastro';
import pagInicial from './pagInicial';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <Nbar />
      <Stack.Navigator initialRouteName="pagInicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="pagInicial" component={pagInicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BoasVindas" component={BoasVindas} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </>
  );
}