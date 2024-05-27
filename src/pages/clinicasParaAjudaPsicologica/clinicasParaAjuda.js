import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styleClinicas from './styleClinicas';

function ClinicasParaAjudaPsicologica({ navigation }) {
    return (
        <SafeAreaView style={styleClinicas.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styleClinicas.containerTopo}>
                    <Text style={styleClinicas.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styleClinicas.tituloPagina}>Clinicas para Ajuda</Text>

                <View style={styleClinicas.containerBranco}>

                    <View style={styleClinicas.botaoLigacao}>
                        <Text style={styleClinicas.textBotaoGeral}>Ligar para o centro de Valorização da Vida(GRATUITO):{'\n'}188</Text>
                    </View>

                    <TouchableOpacity style={styleClinicas.botaoLocalizarClinica} onPress={() => {
                        Linking.openURL('https://www.google.com.br/maps/search/clinicas+de+psicologia/@-23.6637463,-52.6097434,16.25z?entry=ttu')
                    }}>
                        <Text style={styleClinicas.textBotao}>Buscar Clinicas 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleClinicas.botaoLocalizarClinica2} onPress={() => {
                        Linking.openURL('https://www.google.com/maps/d/u/0/viewer?mid=190u3LrH42paZim5yhIywQACZ88tvd1o&ll=-15.987185214889433%2C-47.95453436403224&z=5')
                    }}>
                        <Text style={styleClinicas.textBotao}>Buscar Clinicas 2</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default ClinicasParaAjudaPsicologica;