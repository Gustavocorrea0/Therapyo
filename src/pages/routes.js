import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import { View, Text, Image, TouchableOpacity } from 'react-native';

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
                }}

                tabBarOptions={{
                    activeTintColor: 'white', // Cor do texto quando o item está selecionado
                    inactiveTintColor: '#A9A9A9', // Cor do texto quando o item não está selecionado
                }}>

                <Tab.Screen
                    name='Inicio'
                    component={DicasSobreSaude}
                    options={{
                        tabBarShowLabel: true,
                        headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => {
                            if (focused) {
                                //return <Ionicons size={size} color={focused ? 'white' : 'gray'} name="search" />
                                return (
                                    <Image
                                        source={focused ? require('../assets/icons/tabBarIcons/home.png') : require('../assets/icons/tabBarIcons/home.png')}
                                        style={styleRoutes.iconTabBar}
                                    />
                                );
                            }
                        }
                    }}
                />

                <Tab.Screen
                    name='Clinicas'
                    component={ClinicasParaAjudaPsicologica}
                    options={{
                        tabBarShowLabel: true,
                        headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => {
                            if (focused) {
                                return (
                                    <Image
                                        source={focused ? require('../assets/icons/tabBarIcons/map-marker.png') : require('../assets/icons/tabBarIcons/map-marker.png')}
                                        style={styleRoutes.iconTabBar}
                                    />
                                );
                            }
                        }
                    }}
                />

                <Tab.Screen
                    name='Humor'
                    component={HumorDiario}
                    options={{
                        tabBarShowLabel: true,
                        headerShown: false,
                        tabBarIcon: ({ focused, size, color }) => {
                            if (focused) {
                                return (
                                    <Image
                                        source={focused ? require('../assets/icons/tabBarIcons/add.png') : require('../assets/icons/tabBarIcons/add.png')}
                                        style={styleRoutes.iconTabBar}
                                    />
                                );
                            }
                        }

                    }}
                />

                <Tab.Screen
                    name='Historico'
                    component={RelatorioHumor}
                    options={{
                        tabBarShowLabel: true,
                        headerShown: false,

                        tabBarIcon: ({ focused, size, color }) => {
                            if (focused) {
                                return (
                                    <Image
                                        source={focused ? require('../assets/icons/tabBarIcons/chart-histogram.png') : require('../assets/icons/tabBarIcons/chart-histogram.png')}
                                        style={styleRoutes.iconTabBar}
                                    />
                                );
                            }
                        }

                    }}
                />

                <Tab.Screen
                    name='Ajuda'
                    component={PrecisoDeAjudaScreen}
                    options={{
                        tabBarShowLabel: true,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                            return (
                                <Image
                                    source={focused ? require('../assets/icons/tabBarIcons/hospital.png') : require('../assets/icons/tabBarIcons/hospital.png')}
                                    style={styleRoutes.iconTabBar}
                                />
                            );
                            }   
                        }
                    }}
                />

            </Tab.Navigator>
        </View>
    );
}