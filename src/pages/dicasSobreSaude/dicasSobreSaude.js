import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleDicas from './styleDicas';

function DicasSobreSaude({ navigation }) {

    // CHAMA A DICA
    const handleDica1Press = () => {
        navigation.navigate('Tela1');
    }

    return (
        <SafeAreaView style={styleDicas.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styleDicas.containerTopo}>
                    <Text style={styleDicas.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styleDicas.tituloPagina}>Feed Dicas De Saúde</Text>

                <View style={styleDicas.containerBranco}>
                    <Text style={styleDicas.tituloContainerBranco}>Alternativas</Text>

                    <View style={styleDicas.containerAmarelo}>
                        <Text style={styleDicas.tituloContainerAmarelo}>Nosso objetivo é te auxiliar!</Text>
                        <Text style={styleDicas.tituloContainerAmarelo}>ESTE NÃO APP SUBSTITUI UM PROFISSIONAL</Text>
                    </View>

                    {/* BOTAO */}
                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica1Press}>
                        <Text style={styleDicas.textButton}>Pratique atividades fisicas</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DicasSobreSaude;
