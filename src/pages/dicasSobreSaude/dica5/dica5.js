import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleClinicas from './style';

function Dica5() {
    return (
        <SafeAreaView style={styleClinicas.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styleClinicas.containerTopo}>
                    <Text style={styleClinicas.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styleClinicas.tituloPagina}>Dicas de Saúde</Text>

                <View style={styleClinicas.containerBranco}>

                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 22}}>
                        Faça coisas que te {"\n"}faça se sentir bem
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Focar em atividades que nos trazem prazer e satisfação é essencial para nossa saúde mental.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Ao nos envolvermos em atividades que nos fazem sentir bem, estamos investindo em nosso próprio 
                        cuidado e autocuidado, o que é essencial para manter uma boa saúde mental.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Fazer o que nos faz sentir bem também pode nos ajudar a manter um equilíbrio saudável entre as 
                        diferentes áreas da nossa vida, como trabalho, estudos, relacionamentos e lazer.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 25}}>
                        FONTE: https://www.pucrs.br/blog/5-dicas-para-cuidar-da-saude-mental-e-emocional-o-ano-todo/
                    </Text>
                    
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Dica5;