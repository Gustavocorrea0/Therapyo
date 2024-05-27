import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView , Linking} from 'react-native';
import styles from './style';

function Dica10() {

    const handleOpenYoutube = () => {
        Linking.openURL('https://www.youtube.com/watch?v=rwoN1pZU2KI');
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
                        Explore atividades relaxantes
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Explorar atividades relaxantes pode ser extremamente benéfico para cuidar da saúde mental.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Ao incorporar essas atividades em sua rotina diária, você pode criar um momento 
                        de tranquilidade e relaxamento, que é essencial para equilibrar uma vida agitada e estimulante.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Além disso, dedicar pelo menos 30 minutos por dia a essas práticas 
                        pode ajudar a melhorar sua saúde mental e emocional a longo prazo.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Exemplos de atividades:
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                    >   * Meditação.                       
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                    >   * Respiração.                       
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                    >   * Massagem.                       
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                    >   * Yoga.                       
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                    >   * Alongamento.                       
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Experimente diferentes atividades e encontre aquelas que mais ressoam com você. 
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        O importante é reservar um tempo para cuidar de si mesmo e da sua mente, para 
                        que possa enfrentar os desafios do dia a dia com mais equilíbrio e serenidade.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22}}>
                        FONTE: https://www.benegrip.com.br/saude/saude/como-manter-saude-mental-dia
                    </Text>
                    
                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 23}}>
                        Atividades Relaxantes
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

export default Dica10;