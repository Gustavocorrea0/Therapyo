import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';

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

        <TouchableOpacity style={styles.botaoUm} onPress={() => {}}>
          <Text style={styles.tituloBotoes}>Adicionar meu humor diario</Text>

          <Image
            source={require('./src/assets/icons/smile.png')}
            style={styles.formatacaoEmoji}
          ></Image>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoDois} onPress={() => {}}>
          <Text style={styles.tituloBotoes}>Dicas sobre saúde</Text>

          <Image
            source={require('./src/assets/icons/doctor.png')}
            style={styles.formatacaoEmoji}
          ></Image>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoTres} onPress={() => {}}>
          <Text style={styles.tituloBotoes}>Preciso de{'\n'}ajuda</Text>

          <Image
            source={require('./src/assets/icons/fever.png')}
            style={styles.formatacaoEmoji}
          ></Image>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoQuatro} onPress={() => {}}>

          <Text style={styles.tituloBotoes}>Relatorio de humor</Text>

          <Image
            source={require('./src/assets/icons/report.png')}
            style={styles.formatacaoEmojiRelatorio}
          ></Image>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCinco} onPress={() => {}}>
          <Text style={styles.tituloBotaoClinica}>Clinicas para ajuda psicológica</Text>
        
          <Image
            source={require('./src/assets/icons/hospital.png')}
            style={styles.formatacaoEmoji}
          ></Image>

        </TouchableOpacity>

      </View>


    </SafeAreaView>

  );
}

