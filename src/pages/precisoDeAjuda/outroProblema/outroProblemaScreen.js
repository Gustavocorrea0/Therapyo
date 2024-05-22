import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

function OutroProblema() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
                <View style={styles.containerTopo}>
                    <Text style={styles.tituloTherapyo}>Therapyo</Text>
                </View>
                <Text style={styles.tituloPagina}>Outro Problema</Text>
                <View style={styles.containerBranco}>
                    <View style={styles.card}>
                        <Text style={styles.tituloCard}>LIGUE IMEDIATAMENTE PARA</Text>
                        <Text style={styles.tituloSamu}>SAMU: 192</Text>
                        <Text style={styles.tituloCentroDeValorizacaoAVida}>Centro de{"\n"}Valorização da Vida:{"\n"}188</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default OutroProblema;