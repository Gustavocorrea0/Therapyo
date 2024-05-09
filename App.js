import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HumorDiario from './src/pages/controleHumorDiario/humorDiario'; 
import HomeScreen from './src/pages/home/homeScreen'; 
import RelatorioHumor from './src/pages/relatorioHumor/RelatorioHumor';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }} // Esconde o cabeçalho em todas as telas
      >
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="HumorDiario" component={HumorDiario} />
        <Stack.Screen name="RelatorioHumor" component={RelatorioHumor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
