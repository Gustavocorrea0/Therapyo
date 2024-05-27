import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

function Dica4() {
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styles.containerTopo}>
                    <Text style={styles.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styles.tituloPagina}>Dicas de Saúde</Text>

                <View style={styles.containerBranco}>
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 25 , textAlign:'justify'}}>
                        Cuide bem de seus{'\n'}  relacionamentos
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Relacionamentos saudáveis podem fornecer apoio emocional e prático em momentos difíceis,
                        reduzindo o estresse e fortalecendo a resiliência. Além disso, conexões significativas 
                         com outras pessoas podem aumentar a sensação de pertencimento e bem-estar, contribuindo para a saúde mental.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Relacionamentos positivos também podem proporcionar motivação e encorajamento para cuidar 
                        de si mesmo, tanto física quanto emocionalmente. Sentir-se conectado e amado por outras 
                        pessoas pode aumentar a autoestima e a autoconfiança, ajudando a lidar melhor com os desafios do dia a dia.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22}}>
                        FONTE:https://vidasaudavel.einstein.br/como-cuidar-da-saude-mental/
                    </Text>


                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Dica4;