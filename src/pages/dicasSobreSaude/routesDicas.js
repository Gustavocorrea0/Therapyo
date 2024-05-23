import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dica1 from './dica1/dica1'
import Dica2 from './dica2/dica2'
import Dica3 from './dica3/dica3'
import Dica4 from './dica4/dica4'
import Dica5 from './dica5/dica5'
import Dica6 from './dica6/dica6'
import Dica7 from './dica7/dica7'
import Dica8 from './dica8/dica8'
import Dica9 from './dica9/dica9'
import Dica10 from './dica10/dica10'
import DicasSobreSaude from "./dicasSobreSaude";

const Stack = createStackNavigator();

function DicasStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaDeInicio" component={DicasSobreSaude}/>
            <Stack.Screen name="Tela1" component={Dica1}/>
            <Stack.Screen name="Tela2" component={Dica2}/>
            <Stack.Screen name="Tela3" component={Dica3}/>
            <Stack.Screen name="Tela4" component={Dica4}/>
            <Stack.Screen name="Tela5" component={Dica5}/>
            <Stack.Screen name="Tela6" component={Dica6}/>
            <Stack.Screen name="Tela7" component={Dica7}/>
            <Stack.Screen name="Tela8" component={Dica8}/>
            <Stack.Screen name="Tela9" component={Dica9}/>
            <Stack.Screen name="Tela10" component={Dica10}/>
        </Stack.Navigator>
    )
}

export default DicasStack;