//RelatorioHumor.js
import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from 'react-native';
import styles from './styleRelatorioHumor';
import BackButton from '../../componentes/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome';  // Importe a biblioteca de ícones
import { Picker } from '@react-native-picker/picker'; 

const data = [
  { dia: "SEG", humor: "Calmo", icone: "smile-o" },
  { dia: "TER", humor: "Ansioso", icone: "frown-o" },
  { dia: "QUA", humor: "Feliz", icone: "smile-o" },
  { dia: "QUI", humor: "Com raiva", icone: "smile-o" },
  { dia: "SEX", humor: "Feliz", icone: "smile-o" },
  { dia: "SAB", humor: "Feliz", icone: "smile-o" },
  { dia: "DOM", humor: "Calmo", icone: "smile-o" },
];



function RelatorioHumor() {


  const [selectedPeriod, setSelectedPeriod] = useState('semana');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
      <View style={absoluteStyle.backButtonContainer}>
        <BackButton />
      </View>
        <View style={styles.containerTopo}>
          <Text style={styles.tituloTherapyo}>Therapyo</Text>
        </View>
        <Text style={styles.tituloPagina}>Relatório de Humor</Text>
        <View style={styles.containerBranco}>
        <Picker
          selectedValue={selectedPeriod}
          onValueChange={(itemValue, ) => setSelectedPeriod(itemValue)}
          style={[styles.pickerStyle]}
          mode="dropdown"
          
        >
          <Picker.Item label="Semana" value="semana"  />
          <Picker.Item label="Mês" value="mes" />
        </Picker>
          <View style={styles.listaHumor}>
          {data.map((item, index) => (
            <View key={index} style={styles.itemHumor}>
              <Text style={styles.textDia}>{item.dia}</Text>
              <Icon name={item.icone} size={50} color="#000"  />
              <Text style={styles.textHumor}>{item.humor}</Text>
            </View>
          ))}
        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const absoluteStyle = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    top: 8,  // Leve ajuste para garantir visibilidade
    left: 10,
    zIndex: 1000
  }
});

export default RelatorioHumor;


