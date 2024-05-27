import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './style';

function Dica1() {

const handleOpenYoutube = () => {
    Linking.openURL('https://www.youtube.com/watch?v=Gnh3dwps_jE');
};

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styles.containerTopo}>
                    <Text style={styles.tituloTherapyo}>Therapyo</Text>
                </View>

                <Text style={styles.tituloPagina}>Dicas de Saúde</Text>

                <View style={styles.containerBranco}>
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 22, textAlign: 'justify'}}>
                        Pratique atividades fisicas
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22, textAlign: 'justify'}}>
                        A prática regular de exercícios físicos, como esportes, pode ajudar a reduzir os níveis de estresse e ansiedade. 
                    </Text>  

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22, textAlign: 'justify' }}> 
                        Isso ocorre devido  ao foto do exercício ajudar a liberar endorfinas, substâncias químicas
                        no cérebro que atuam como analgésicos naturais e melhoram o humor. 
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22, textAlign: 'justify'}}>
                        FONTE:https://www.benegrip.com.br/saude/saude/como-manter-saude-mental-dia 
                    </Text>

                    {/* COLOCAR IMAGENS AQUI! */}

                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 22, textAlign: 'justify'}}>
                        Explicação em video
                    </Text>

                    <TouchableOpacity style={[styles.youtube, { marginTop: 5, }]} onPress={handleOpenYoutube}>
                        <Image source={require('../../../assets/icons/Youtube Icon.png')} style={{ width: 40, height: 40 }} />
                        <Text style={[styles.tituloBotao]}>Youtube</Text>
                    </TouchableOpacity>                   

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Dica1;