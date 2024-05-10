import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styleCriseDeAnsiedade';

function CriseDeAnsiedadeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
        <View style={styles.containerTopo}>
          <Text style={styles.tituloTherapyo}>Therapyo</Text>
        </View>

        <Text style={styles.tituloPagina}>Crise de Ansiedade</Text>

        <View style={styles.containerBranco}>
          <View style={styles.card}>
            <Text style={styles.tituloCard}>1. Mantenha a calma, por mais que pareça difícil</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>2. Se possível, busque ajuda imediatamente:</Text>
            <Text>SAMU: 192</Text>
            <Text>Centro de Valorização da Vida: 188</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>3. Caso não seja possível pedir ajuda ou esteja se deslocando para o local de atendimento, siga os próximos passos:</Text>
            <Text>...</Text> {/* Adicione os próximos passos aqui */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CriseDeAnsiedadeScreen;
