import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import styles from './styleHumorDiario'; // Importando o estilo que você forneceu
import AsyncStorage from '@react-native-async-storage/async-storage';

const humorIcons = [
  { key: 'feliz', label: 'Feliz', image: require('../../assets/icons/smile.png'), bgColor: '#FFD700' },
  { key: 'raiva', label: 'Com Raiva', image: require('../../assets/icons/smile.png'), bgColor: '#FF0000' },
  { key: 'triste', label: 'Triste', image: require('../../assets/icons/smile.png'), bgColor: '#032162' },
  { key: 'calmo', label: 'Calmo', image: require('../../assets/icons/smile.png'), bgColor: '#04448E' },
  { key: 'ansioso', label: 'Ansioso', image: require('../../assets/icons/smile.png'), bgColor: '#278425' },
  { key: 'medo', label: 'Com Medo', image: require('../../assets/icons/smile.png'), bgColor: '#2D095A' },
];

export default function HumorDiario() {
  const [selectedHumor, setSelectedHumor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [humorInMemory, setHumorInMemory] = useState([]);

  const selectHumor = (index) => {
    setSelectedHumor(index);
  };

  const confirmHumor = async () => {
    try {
      if (selectedHumor !== null && selectedHumor < humorIcons.length) {
        const selectedHumorKey = humorIcons[selectedHumor].key;
        
        const humorHistory = await AsyncStorage.getItem('humorHistory');
        const arrayHumors = humorHistory ? JSON.parse(humorHistory) : [];

        arrayHumors.push(selectedHumorKey);

        await AsyncStorage.setItem('humorHistory', JSON.stringify(arrayHumors)); // SALVA O DADO
        
        setModalVisible(true);
        console.log('CADASTRO OK');

        console.log('Humor(es) cadastrados');
        arrayHumors.forEach((humor, index) => {
          console.log(`${index + 1}: ${humor}`);
        });

      } else {
        console.log('Erro: Índice de humor selecionado inválido.');
      }
    } catch (e) {
      console.log("Erro ao salvar humor tipo: ", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
        <View style={styles.containerTopo}>
          <Text style={styles.tituloTherapyo}>Therapyo</Text>
        </View>

        <Text style={styles.tituloPagina}>Adicionar meu humor</Text>

        <View style={styles.containerBranco}>
          <Text style={styles.tituloContainerBranco}>Estou me sentindo</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {humorIcons.map((icon) => (
              <TouchableOpacity
                key={icon.key}
                style={[styles.botaoUm, { backgroundColor: icon.bgColor, marginLeft: 10, marginRight: 10, marginTop: 20, borderWidth: selectedHumor === humorIcons.indexOf(icon) ? 3 : 0, borderColor: '#8FCAC3' }]}
                onPress={() => selectHumor(humorIcons.indexOf(icon))}
              >

                <Image source={icon.image} style={styles.formatacaoEmoji} />
                <Text style={styles.tituloBotoes}>{icon.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={[styles.botaoConfirmar]} onPress={confirmHumor}>
            <Text style={styles.tituloBotaoClinica}>Confirmar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sentimento cadastrado</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Voltar ao início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}