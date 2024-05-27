import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './style';

function Dica9() {

    const handleOpenYoutube = () => {
        Linking.openURL('https://www.youtube.com/watch?v=xKquEgpqASY');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styles.containerTopo}>
                    <Text style={styles.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styles.tituloPagina}>Dicas de Saúde</Text>

                <View style={styles.containerBranco}>

                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 22}}>
                        Metas e objetivos realistas
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Estabelecer metas e objetivos realistas é fundamental para manter a saúde mental 
                        em equilíbrio. Ao definir metas alcançáveis, você se motiva a seguir em frente com suas atividades sem se sobrecarregar.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Evite estabelecer objetivos muito distantes ou estressantes, 
                        pois isso pode gerar ansiedade e frustração.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Ao estabelecer metas realistas, você cria um senso de direção, propósito e localização, 
                        o que pode aumentar sua autoconfiança e autoestima.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Lembre-se de que está tudo bem ajustar suas metas 
                        conforme necessário e não se pressionar demais. 
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        O importante é manter um equilíbrio saudável entre 
                        desafiar a si mesmo e cuidar de sua saúde mental.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22}}>
                        FONTE: https://www.benegrip.com.br/saude/saude/como-manter-saude-mental-dia
                    </Text>
                    
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 23}}>
                         Como traçar metas realistas
                    </Text>

                    <TouchableOpacity style={[styles.Youtube, { marginTop: 5, }]} onPress={handleOpenYoutube}>
                        <Image source={require('../../../assets/icons/Youtube Icon.png')} style={{ width: 40, height: 40 }} />
                        <Text style={[styles.tituloBotao]}>Youtube</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Dica9;