import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HumorDiario from './src/pages/controleHumorDiario/humorDiario'; // Caminho para o arquivo de humor diário
import HomeScreen from './src/pages/home/homeScreen'; // Importe o cocmponente HomeScreen do arquivo App.js
import PrecisoDeAjudaScreen from './src/pages/precisoDeAjuda/precisoDeAjudaScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HumorDiario" component={HumorDiario} />
        <Stack.Screen name="PrecisoDeAjuda" component={PrecisoDeAjudaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
