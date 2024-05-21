import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import { View, Image } from 'react-native';

import DicasSobreSaude from './dicasSobreSaude/dicasSobreSaude';
import PrecisoDeAjudaScreen from './precisoDeAjuda/precisoDeAjudaScreen';
import ClinicasParaAjudaPsicologica from './clinicasParaAjudaPsicologica/clinicasParaAjuda';
import HumorDiario from './controleHumorDiario/humorDiario';
import RelatorioHumor from './relatorioHumor/RelatorioHumor';

import styleRoutes from './styleRoutes';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        borderTopWidth: 0,
                        bottom: 0
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: '#A9A9A9'
                }}>

                <Tab.Screen
                    name='Inicio'
                    component={DicasSobreSaude}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/tabBarIcons/home.png')}
                                style={[styleRoutes.iconTabBar, { tintColor: focused ? 'white' : 'gray' }]}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name='Clinicas'
                    component={ClinicasParaAjudaPsicologica}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/tabBarIcons/map-marker.png')}
                                style={[styleRoutes.iconTabBar, { tintColor: focused ? 'white' : 'gray' }]}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name='Humor'
                    component={HumorDiario}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/tabBarIcons/add.png')}
                                style={[styleRoutes.iconTabBar, { tintColor: focused ? 'white' : 'gray' }]}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name='Historico'
                    component={RelatorioHumor}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/tabBarIcons/chart-histogram.png')}
                                style={[styleRoutes.iconTabBar, { tintColor: focused ? 'white' : 'gray' }]}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name='Ajuda'
                    component={PrecisoDeAjudaScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={require('../assets/icons/tabBarIcons/hospital.png')}
                                style={[styleRoutes.iconTabBar, { tintColor: focused ? 'white' : 'gray' }]}
                            />
                        )
                    }}
                />

            </Tab.Navigator>
        </View>
    );
}
