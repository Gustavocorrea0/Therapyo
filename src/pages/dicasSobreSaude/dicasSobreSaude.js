import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleDicas from './styleDicas';

function DicasSobreSaude({ navigation }) {

    const handleDica1Press = () => {
        navigation.navigate('Tela1');
    }
    const handleDica2Press = () => {
        navigation.navigate('Tela2');
    }
    const handleDica3Press = () => {
        navigation.navigate('Tela3');
    }
    const handleDica4Press = () => {
        navigation.navigate('Tela4');
    }
    const handleDica5Press = () => {
        navigation.navigate('Tela5');
    }
    const handleDica6Press = () => {
        navigation.navigate('Tela6');
    }
    const handleDica7Press = () => {
        navigation.navigate('Tela7');
    }
    const handleDica8Press = () => {
        navigation.navigate('Tela8');
    }
    const handleDica9Press = () => {
        navigation.navigate('Tela9');
    }
    const handleDica10Press = () => {
        navigation.navigate('Tela10');
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
                        <Text style={styleDicas.tituloContainerAmarelo}>ESTE APP NÃO SUBSTITUI{'\n'}UM PROFISSIONAL</Text>
                    </View>

                    {/* BOTAO */}
                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica1Press}>
                        <Text style={styleDicas.textButton}>Pratique atividades fisicas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica2Press}>
                        <Text style={styleDicas.textButton}>Busque uma dieta balanceada e hidrate-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica3Press}>
                        <Text style={styleDicas.textButton}>Não tenha medo de pedir ajuda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica4Press}>
                        <Text style={styleDicas.textButton}>Cuide bem dos seus relacionamentos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica5Press}>
                        <Text style={styleDicas.textButton}>Faça coisas que te faça se sentir bem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica6Press}>
                        <Text style={styleDicas.textButton}>Dormir Bem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica7Press}>
                        <Text style={styleDicas.textButton}>Valorize sua personalidade</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica8Press}>
                        <Text style={styleDicas.textButton}>Faça um trabalho social</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica9Press}>
                        <Text style={styleDicas.textButton}>Tenha metas e objetivos realistas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleDicas.buttonRoutes} onPress={handleDica10Press}>
                        <Text style={styleDicas.textButton}>Explore atividades relaxantes</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DicasSobreSaude;