import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleClinicas from './style';

function Dica1() {
    return (
        <SafeAreaView style={styleClinicas.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styleClinicas.containerTopo}>
                    <Text style={styleClinicas.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styleClinicas.tituloPagina}>Dicas de Saude</Text>

                <View style={styleClinicas.containerBranco}>
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 22}}>Pratique atividades fisicas</Text>
                    {/* PROGRAMAR NESTA VIEW */}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Dica1;