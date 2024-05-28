import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import styles from './style';

function Dica2() {
    const handleOpenYoutube = () => {
        Linking.openURL('https://www.youtube.com/watch?v=KFowNIMdLiI');
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
                        Busque uma dieta balanceada e hidrate-se
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22, textAlign: 'justify'}}>
                        Uma alimentação saudável e balanceada desempenha um papel fundamental na manutenção da energia e 
                        disposição ao longo do dia. Uma dieta rica em nutrientes essenciais como vitaminas, minerais, 
                        proteínas e gorduras saudáveis não só nutre o corpo, mas também beneficia a saúde mental. 
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Além disso, a hidratação adequada é essencial para o funcionamento adequado do corpo e da mente.
                        Beber água suficiente ao longo do dia ajuda a manter o corpo hidratado e a manter os níveis de energia.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>  
                        É importante também limitar a ingestão de cafeína, especialmente no final do dia, pois a cafeína 
                        pode interferir nos padrões de sono ao bloquear a melatonina, o hormônio do sono.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>  
                        Ter um sono de qualidade é crucial para a saúde mental e física, pois o sono 
                        adequado ajuda na recuperação física, consolidação da memória e regulação do humor.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>  
                        Assim, manter uma dieta nutritiva, hidratação adequada e limitar a ingestão de cafeína 
                        são passos importantes para manter a energia, disposição e cuidar da saúde mental e física.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'normal', marginTop: 22}}>  
                    FONTE:https://www.benegrip.com.br/saude/saude/como-manter-saude-mental-dia
                    </Text>

                    {/* COLOCAR IMAGENS AQUI! */}

                    <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold', marginTop: 22}}>
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

export default Dica2;