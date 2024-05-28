import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Image } from 'react-native';
import { getAllHumors, clearAsyncStorage } from '../../storage/storage';
import styles from './styleRelatorioHumor'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useIsFocused } from '@react-navigation/native';

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
  ]);
  const [humors, setHumors] = useState([]);
  const focused = useIsFocused();

  useEffect(() => {
    async function loadHumors() {
      const storedHumors = await getAllHumors();
      setHumors(storedHumors);
    }

    loadHumors();
  }, [focused]);

  const handleClearData = async () => {
    await clearAsyncStorage();
    const storedHumors = await getAllHumors();
    setHumors(storedHumors);
  }

  const filteredHumors = selectedPeriod === 'semana' ?
    humors.filter(humor => {
      const date = new Date(humor.date);
      const today = new Date();
      const oneWeekAgo = new Date(today);
      oneWeekAgo.setDate(today.getDate() - 7);
      return date >= oneWeekAgo && date <= today;
    }) :
    humors;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
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

          <View style={{ backgroundColor: '#363636', height: 40, width: 350, alignItems: 'center' }}>
            <Text style={{ marginLeft: -240, color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginTop: 4, marginLeft: -230 }}>Dia</Text>
            <Text style={{ marginLeft: -240, color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginTop: -26, marginLeft: 145 }}>Humor</Text>
            <View style={{ width: 10, height: 80, backgroundColor: '#FFFFFF', marginLeft: -80, marginTop: -33 }}></View>
          </View>
          <View style={styles.listaHumor}>
            {filteredHumors.map((item, index) => (
              <View key={index} style={[styles.itemHumor]}>
                <Text style={styles.textDia}>{format(new Date(item.date), 'eeee', { locale: ptBR })}</Text>
                <View style={{ width: 10, height: 80, backgroundColor: '#FFFFFF', marginLeft: 10 }}></View>
                <Image
                  source={humorIcons.find(icon => icon.label === item.humor).image}
                  style={{
                    width: 80, height: 80, marginLeft: 0,
                    backgroundColor: humorIcons.find(icon => icon.label === item.humor).bgColor
                  }}
                  resizeMode="contain"
                />
                <Text style={styles.textHumor}>{item.humor}</Text>
              </View>
            ))}
          </View>

          <Text style={{ color: '#C71585', fontWeight: 'bold'}}>Recomendamos uma limpeza a cada consulta</Text>

          <TouchableOpacity style={styles.clearData} onPress={handleClearData} >
            <Text style={styles.textButtonClearData}>Limpar Dados</Text>
          </TouchableOpacity>
            

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default RelatorioHumor;
