import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './style';

function Dica6() {

    const handleOpenYoutube = () => {
        Linking.openURL('https://www.youtube.com/watch?v=Q-iv5tI8_eE');
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
                        Dormir Bem
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22, textAlign:"justify"}}>
                        Priorizar a qualidade do sono é fundamental para manter a saúde mental em dia. Uma rotina 
                        adequada de sono não apenas ajuda a melhorar o humor e reduzir o estresse, mas também fortalece 
                        a imunidade e aumenta a disposição.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22, textAlign:'justify'}}>
                        Para garantir um sono de qualidade é recomendável seguir algumas práticas:
                    </Text>
                    
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                        >   * Evite o consumo de cafeína por pelo menos 8 horas antes de dormir, 
                        pois ela pode atrapalhar a qualidade do sono.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                        >   * Busque ficar longe de telas de televisão e celulares por pelo menos 30 minutos 
                    antes de deitar, pois a luz azul emitida por esses dispositivos pode interferir no sono.                        
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}
                        >   * Busque também ir para a cama sempre no mesmo horário, pois isso ajuda a regular o relógio biológico.                        
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Dormir pelo menos 8 horas todas as noites traz inúmeros benefícios, não apenas para a saúde mental, 
                        mas também para a saúde física. Um sono adequado fortalece a memória, melhora a capacidade de 
                        concentração e favorece a perda de peso. Além disso, contribui para a saúde cardiovascular e 
                        ajuda a prevenir doenças como diabetes e hipertensão
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22}}>
                        FONTE:https://www.benegrip.com.br/saude/saude/como-manter-saude-mental-dia
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

export default Dica6;