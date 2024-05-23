import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleClinicas from './style';

function Dica3({ navigation }) {
    return (
        <SafeAreaView style={styleClinicas.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styleClinicas.containerTopo}>
                    <Text style={styleClinicas.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styleClinicas.tituloPagina}>Clinicas para Ajuda</Text>

                <View style={styleClinicas.containerBranco}>
                    {/* PROGRAMAR NESTA VIEW */}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Dica3;