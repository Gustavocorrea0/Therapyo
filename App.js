import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './style'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerTopo}>
        <Text style={styles.tituloTherapyo}>Therapyo</Text>
      </View>

      <Text style={styles.tituloPagina}>Início</Text>

      <View style={styles.containerBranco}>

        <Text style={styles.tituloContainerBranco}>Atividades</Text>

        <View style={styles.botaoUm}></View>

        <View style={styles.botaoDois}></View>

        <View style={styles.botaoTres}></View>

        <View style={styles.botaoQuatro}></View>

        <View style={styles.botaoCinco}></View>

      </View>


    </SafeAreaView>

  );
}

