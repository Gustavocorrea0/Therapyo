import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './style';

function Dica3({ navigation }) {

    const handleOpenYoutube = () => {
        Linking.openURL('https://www.youtube.com/watch?v=Kq_86HDazqM');
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
                        Não tenha medo de pedir ajuda
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', marginTop: 22}}>
                        Pedir ajuda é um ato de coragem e força, não de fraqueza.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Reconhecer quando não está tudo bem faz parte do processo
                        de cura e abre caminho para encontrar soluções válidas.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        É importante contar com o apoio de amigos e familiares para se manter firme,
                         e não hesitar em buscar ajuda profissional quando necessário.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Lembre-se de que não está sozinho(a) e que há pessoas dispostas a ajudar
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22}}>
                        FONTE:https://vidasaudavel.einstein.br/como-cuidar-da-saude-mental/
                    </Text>
                    
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 23}}>
                        Explicação em video
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

export default Dica3;