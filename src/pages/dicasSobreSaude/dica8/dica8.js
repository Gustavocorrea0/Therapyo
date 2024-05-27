import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styleClinicas from './style';

function Dica8() {

    const handleOpenAcessar = () => {
        Linking.openURL('https://br.indeed.com/conselho-de-carreira/desenvolvimento-de-carreira/tipos-trabalho-voluntario');
    };

    return (
        <SafeAreaView style={styleClinicas.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styleClinicas.containerTopo}>
                    <Text style={styleClinicas.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styleClinicas.tituloPagina}>Dicas de Saúde</Text>

                <View style={styleClinicas.containerBranco}>
                    
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 22}}>
                        Faça um trabalho social
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Ajudar como voluntário pode trazer uma série de benefícios para a saúde mental e emocional. 
                        Além de proporcionar um senso de propósito e realização, o voluntariado também pode ajudar a 
                        reduzir o isolamento social e a solidão, promovendo assim a saúde mental.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Ao se envolver em atividades voluntárias, você tem a oportunidade de aprender novas habilidades, 
                        o que pode aumentar sua autoconfiança e autoestima.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Além disso, o voluntariado pode ser uma forma eficaz de lidar com o estresse e a ansiedade, pois oferece 
                        uma pausa nas preocupações do dia a dia e permite que você se concentre em algo positivo e significativo.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22}}>
                        FONTE:https://www.benegrip.com.br/saude/saude/como-manter-saude-mental-dia
                    </Text>
                    
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 23}}>
                        Exemplos de Trabalho Social
                    </Text>

                    <TouchableOpacity style={[styles.acessar, { marginTop: 5, }]} onPress={handleOpenAcessar}>
                        <Text style={[styles.tituloBotaoAcessar]}>Acessar</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Dica8;