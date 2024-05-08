import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HumorDiario from './src/pages/humorDiario'; // Caminho para o arquivo de humor diário
import HomeScreen from './src/pages/HomeScreen '; // Importe o cocmponente HomeScreen do arquivo App.js

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HumorDiario" component={HumorDiario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
