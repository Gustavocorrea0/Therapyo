import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styleHome';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerTopo}>
        <Text style={styles.tituloTherapyo}>Therapyo</Text>
      </View>

      <Text style={styles.tituloPagina}>Início</Text>

      <View style={styles.containerBranco}>

        <Text style={styles.tituloContainerBranco}>Atividades</Text>

        <TouchableOpacity 
          style={styles.botaoUm} 
          onPress={() => navigation.navigate('HumorDiario')}
        >
          <Text style={styles.tituloBotoes}>Adicionar meu humor diário</Text>
          <Image
            source={require('../assets/icons/smile.png')}
            style={styles.formatacaoEmoji}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDois} onPress={() => {}}>
          <Text style={styles.tituloBotoes}>Dicas sobre saúde</Text>
          <Image
            source={require('../assets/icons/doctor.png')}
            style={styles.formatacaoEmoji}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoTres} onPress={() => {}}>
          <Text style={styles.tituloBotoes}>Preciso de{'\n'}ajuda</Text>
          <Image
            source={require('../assets/icons/fever.png')}
            style={styles.formatacaoEmoji}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoQuatro} onPress={() => {}}>
          <Text style={styles.tituloBotoes}>Relatório de humor</Text>
          <Image
            source={require('../assets/icons/report.png')}
            style={styles.formatacaoEmojiRelatorio}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCinco} onPress={() => {}}>
          <Text style={styles.tituloBotaoClinica}>Clínicas para ajuda psicológica</Text>
          <Image
            source={require('../assets/icons/hospital.png')}
            style={styles.formatacaoEmoji}
          />
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

export default HomeScreen;