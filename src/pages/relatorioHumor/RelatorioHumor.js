import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, StyleSheet } from 'react-native';
import styles from './styleRelatorioHumor';
import BackButton from '../../componentes/BackButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { Image } from 'react-native';
import Footer from '../../componentes/footer.js'; 
const data = [
  { dia: "SEG", humor: "Calmo", icone: require('../../assets/icons/calmo.png'), corDeFundo: '#04448E'},
  { dia: "TER", humor: "Ansioso", icone: require('../../assets/icons/ancioso.png'), corDeFundo: '#278425' },
  { dia: "QUA", humor: "Feliz", icone: require('../../assets/icons/smile.png'), corDeFundo: '#FFD700' },
  { dia: "QUI", humor: "Com raiva", icone: require('../../assets/icons/angry.png'), corDeFundo: '#FF0000' },
  { dia: "SEX", humor: "Feliz", icone: require('../../assets/icons/smile.png'), corDeFundo: '#FFD700' },
  { dia: "SAB", humor: "Feliz", icone: require('../../assets/icons/smile.png'), corDeFundo: '#FFD700' },
  { dia: "DOM", humor: "Calmo", icone: require('../../assets/icons/calmo.png'), corDeFundo: '#278425' },
];


function RelatorioHumor() {
  const [selectedPeriod, setSelectedPeriod] = useState('semana');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 'Semana', value: 'semana'},
        {label: 'Mês', value: 'mes'}
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
        borderRadius:0,
        alignItems:'center',
        alignSelf: 'center', // Isso centraliza o picker no container
        backgroundColor: '#000',
        height: 50,
        width: 200,
        marginBottom: 10,
        marginTop: 10
    }}
    dropDownContainerStyle={{
         borderRadius:0,
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
              <View key={index} style={[styles.itemHumor, ]}>
                <Text style={styles.textDia}>{item.dia}</Text>
                <Image source={item.icone} style={{ margin:-20,width: 100, height: 100 ,backgroundColor: item.corDeFundo }} resizeMode="contain" />
                <Text style={styles.textHumor}>{item.humor}</Text>
              </View>
            ))}
      </View>
      <Footer />
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
