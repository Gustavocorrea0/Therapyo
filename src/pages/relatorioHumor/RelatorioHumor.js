import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from 'react-native';
import styles from './styleRelatorioHumor';
import BackButton from '../../components/BackButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Image } from 'react-native';

const data = [
  { dia: "SEG", humor: "Calmo", icone: require('../../assets/icons/smile.png'), corDeFundo: '#6495ED' },
  { dia: "TER", humor: "Ansioso", icone: require('../../assets/icons/unhappy.png'), corDeFundo: '#008000' },
  { dia: "QUA", humor: "Feliz", icone: require('../../assets/icons/laughing.png'), corDeFundo: '#FFB800' },
  { dia: "QUI", humor: "Com raiva", icone: require('../../assets/icons/angry-face.png'), corDeFundo: '#8F0000' },
  { dia: "SEX", humor: "Feliz", icone: require('../../assets/icons/laughing.png'), corDeFundo: '#FFB800' },
  { dia: "SAB", humor: "Feliz", icone: require('../../assets/icons/laughing.png'), corDeFundo: '#FFB800' },
  { dia: "DOM", humor: "Calmo", icone: require('../../assets/icons/smile.png'), corDeFundo: '#6495ED' },
];

const humorIcons = [
  { label: 'Feliz', image: require('../../assets/icons/laughing.png'), bgColor: '#FFB800' },
  { label: 'Com Raiva', image: require('../../assets/icons/angry-face.png'), bgColor: '#8F0000' },
  { label: 'Triste', image: require('../../assets/icons/depressed.png'), bgColor: '#032162' },
  { label: 'Calmo', image: require('../../assets/icons/smile.png'), bgColor: '#6495ED' },
  { label: 'Ansioso', image: require('../../assets/icons/unhappy.png'), bgColor: '#008000' },
  { label: 'Com Medo', image: require('../../assets/icons/upset.png'), bgColor: '#4B0082' },
];

function RelatorioHumor() {
  const [selectedPeriod, setSelectedPeriod] = useState('semana');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Semana', value: 'semana' },
    { label: 'Mês', value: 'mes' }
  ]);


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
          <DropDownPicker
            open={open}
            value={selectedPeriod}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedPeriod}
            setItems={setItems}
            style={{
              borderRadius: 0,
              alignItems: 'center',
              alignSelf: 'center', // Isso centraliza o picker no container
              backgroundColor: '#000',
              height: 50,
              width: 200,
              marginBottom: 10,
              marginTop: 10
            }}
            dropDownContainerStyle={{
              borderRadius: 0,
              backgroundColor: '#000',
              width: 200, // Garante que o container do dropdown tem a mesma largura do picker
              alignSelf: 'center' // Garante que o dropdown também esteja centralizado
            }}
            textStyle={{
              color: '#fff'
            }}
          />
          <View style={styles.listaHumor}>
            {data.map((item, index) => (
              <View key={index} style={[styles.itemHumor]}>
                <Text style={styles.textDia}>{item.dia}</Text>
                <Image source={item.icone} style={{ margin: -20, width: 90, height: 90, backgroundColor: item.corDeFundo }} resizeMode="contain" />
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
    top: 8,
    left: 10,
    zIndex: 1000
  }
});

export default RelatorioHumor;
