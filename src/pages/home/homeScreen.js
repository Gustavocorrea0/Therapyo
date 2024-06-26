import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styleHome';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
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
              source={require('../../assets/icons/happy.png')}
              style={styles.formatacaoEmoji}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoDois} onPress={() => { navigation.navigate('DicasDeSaude') }}>
            <Text style={styles.tituloBotoes}>Dicas sobre saúde</Text>
            <Image
              source={require('../../assets/icons/sick.png')}
              style={styles.formatacaoEmoji}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoTres}
            onPress={() => navigation.navigate('PrecisoDeAjuda')}>
            <Text style={styles.tituloBotoes}>Preciso de{'\n'}ajuda</Text>
            <Image
              source={require('../../assets/icons/hurted.png')}
              style={styles.formatacaoEmoji}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoQuatro}
            onPress={() => navigation.navigate('RelatorioHumor')}
          >
            <Text style={styles.tituloBotoes}>Relatório de humor</Text>
            <Image
              source={require('../../assets/icons/report.png')}
              style={styles.formatacaoEmoji}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoCinco} onPress={() => { navigation.navigate('ClinicasParaAjuda') }}>
            <Text style={styles.tituloBotaoClinica}>Clínicas para ajuda psicológica</Text>
            <Image
              source={require('../../assets/icons/hospital.png')}
              style={styles.formatacaoEmoji}
            />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;