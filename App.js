import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HumorDiario from './src/pages/controleHumorDiario/humorDiario'; // Caminho para o arquivo de humor diário
import HomeScreen from './src/pages/home/homeScreen'; // Importe o cocmponente HomeScreen do arquivo App.js
import PrecisoDeAjudaScreen from './src/pages/precisoDeAjuda/precisoDeAjudaScreen';
import RelatorioHumor from './src/pages/relatorioHumor/RelatorioHumor';
import CriseDeAnsiedadeScreen from './src/pages/precisoDeAjuda/criseDeAnsiedade/criseDeAnsiedade';
import ClinicasParaAjudaPsicologica from './src/pages/clinicasParaAjudaPsicologica/clinicasParaAjuda'
import DicasSobreSaude from './src/pages/dicasSobreSaude/dicasSobreSaude'

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
        <Stack.Screen name="PrecisoDeAjuda" component={PrecisoDeAjudaScreen} />
        <Stack.Screen name="CriseDeAnsiedade" component={CriseDeAnsiedadeScreen} />
        <Stack.Screen name="ClinicasParaAjuda" component={ClinicasParaAjudaPsicologica} />
        <Stack.Screen name="DicasDeSaude" component={DicasSobreSaude} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
