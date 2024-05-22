import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrecisoDeAjudaScreen from './precisoDeAjudaScreen';
import CriseDeAnsiedadeScreen from './criseDeAnsiedade/criseDeAnsiedade'
import OutroProblema from './outroProblema/outroProblemaScreen';

const Stack = createStackNavigator();

function AjudaStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PrecisoDeAjuda" component={PrecisoDeAjudaScreen} />
            <Stack.Screen name="CriseDeAnsiedade" component={CriseDeAnsiedadeScreen} />
            <Stack.Screen name="OutroProblema" component={OutroProblema} />
        </Stack.Navigator>
    );
}

export default AjudaStack;