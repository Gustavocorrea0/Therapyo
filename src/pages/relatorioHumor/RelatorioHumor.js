import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Image } from 'react-native';
import { getAllHumors } from '../../storage/storage';
import styles from './styleRelatorioHumor'
import { format } from 'date-fns';

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
  const [humors, setHumors] = useState([]);

  useEffect(() => {
    async function loadHumors() {
      const storedHumors = await getAllHumors();
      setHumors(storedHumors);
    }

    loadHumors();
  }, []);

  const filteredHumors = selectedPeriod === 'semana' ?
    humors.filter(humor => {
      const date = new Date(humor.date);
      const today = new Date();
      return date.getDay() === today.getDay() ||
        date.getDay() === today.getDay() - 1; 
    }) :
    humors;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
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
              alignSelf: 'center',
              backgroundColor: '#000',
              height: 50,
              width: 200,
              marginBottom: 10,
              marginTop: 10
            }}
            dropDownContainerStyle={{
              borderRadius: 0,
              backgroundColor: '#000',
              width: 200,
              alignSelf: 'center'
            }}
            textStyle={{
              color: '#fff'
            }}
          />
          <View style={styles.listaHumor}>
            {filteredHumors.map((item, index) => (
              <View key={index} style={[styles.itemHumor]}>
                <Text style={styles.textDia}>{item.date}</Text>
                <Image source={humorIcons.find(icon => icon.label === item.humor).image} 
                style={{ margin: -20, width: 75, height: 75, 
                backgroundColor: humorIcons.find(icon => icon.label === item.humor).bgColor }} resizeMode="contain" />
                <Text style={styles.textHumor}>{item.humor}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RelatorioHumor;
