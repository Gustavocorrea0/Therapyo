import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Routes} from './src/pages/routes' 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

export default App;
