import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleDicas from './styleDicas';

function DicasSobreSaude() {
    return (
        <SafeAreaView style={styleDicas.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styleDicas.containerTopo}>
                    <Text style={styleDicas.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styleDicas.tituloPagina}>Feed Dicas De Saúde</Text>

                <View style={styleDicas.containerBranco}>
                    <Text style={styleDicas.tituloContainerBranco}>Alternativas</Text>
                    {/* PROGRAMAR NESTA VIEW */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DicasSobreSaude;