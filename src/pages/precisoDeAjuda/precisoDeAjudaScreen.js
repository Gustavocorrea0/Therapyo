import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './stylePrecisoDeAjuda';

function PrecisoDeAjudaScreen({ navigation }) {
    
    const handleCriseAnsiedadePress = () => {
        navigation.navigate('CriseDeAnsiedade');
    }

    const handleOutroPress = () => {
        navigation.navigate('OutroProblema');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styles.containerTopo}>
                    <Text style={styles.tituloTherapyo}>Therapyo</Text>
                </View>
                <Text style={styles.tituloPagina}>Preciso de Ajuda</Text>
                <View style={styles.containerBranco}>
                    <Text style={styles.tituloContainerBranco}>Qual é o problema?</Text>

                    <TouchableOpacity style={[{ marginTop: 20 }]} onPress={handleCriseAnsiedadePress}>
                        <Text style={styles.tituloBotoes}>Crise de Ansiedade</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{ marginTop: 20 }]} onPress={handleOutroPress}>
                        <Text style={styles.tituloBotoes}>Outro</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PrecisoDeAjudaScreen;
