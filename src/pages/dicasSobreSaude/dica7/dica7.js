import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './style';

function Dica7() {

    const handleOpenYoutube = () => {
        Linking.openURL('https://www.youtube.com/watch?v=ZVSTxSnKUzU');
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
                        Valorize sua personalidade
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Valorizar a própria personalidade é importante para a saúde psicológica porque influencia 
                        diretamente a autoestima e a autoconfiança. Quando nos valorizamos, reconhecemos nossas qualidades, 
                        talentos e conquistas, o que nos ajuda a construir uma imagem positiva de nós mesmos.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Ao valorizar nossa personalidade, também estamos mais propensos a aceitar nossos defeitos e limitações, 
                        o que contribui para uma maior autoaceitação e autoconhecimento. Isso pode nos tornar mais resilientes 
                        diante dos desafios e críticas, pois temos uma base sólida de autoestima.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Além disso, valorizar a própria personalidade nos motiva a buscar o crescimento pessoal e a desenvolver 
                        novas habilidades, talentos e interesses. Isso pode gerar um senso de realização e propósito, contribuindo 
                        para uma vida mais satisfatória e equilibrada.
                    </Text>

                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'normal', marginTop: 22}}>
                        Em resumo, valorizar a própria personalidade é essencial para a saúde psicológica, pois nos ajuda a desenvolver 
                        uma autoimagem positiva, a aceitar nossas imperfeições e a buscar constantemente o crescimento pessoal e o bem-estar.
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

export default Dica7;