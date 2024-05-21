import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import styles from './styleHumorDiario'; // Importando o estilo que você forneceu
import { addDailyHumor, getDailyHumor, getAllHumors } from '../../storage/storage';

const humorIcons = [
  { label: 'Feliz', image: require('../../assets/icons/laughing.png'), bgColor: '#FFB800', key: 'Feliz' },
  { label: 'Com Raiva', image: require('../../assets/icons/angry-face.png'), bgColor: '#8F0000', key: 'Com Raiva' },
  { label: 'Triste', image: require('../../assets/icons/depressed.png'), bgColor: '#032162', key: 'Triste' },
  { label: 'Calmo', image: require('../../assets/icons/smile.png'), bgColor: '#6495ED', key: 'Calmo' },
  { label: 'Ansioso', image: require('../../assets/icons/unhappy.png'), bgColor: '#008000', key: 'Ansioso' },
  { label: 'Com Medo', image: require('../../assets/icons/upset.png'), bgColor: '#4B0082', key: 'Com Medo' },
];

export default function HumorDiario() {
  const [selectedHumor, setSelectedHumor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const loadHumor = async () => {
      const savedHumor = await getDailyHumor(today);
      if (savedHumor !== null) {
        setSelectedHumor(savedHumor);
      }
    };
    loadHumor();
  }, [])

  const selectHumor = (index) => {
    setSelectedHumor(humorIcons[index].key);
  };

  const confirmHumor = async () => {
    const result = await addDailyHumor(today, selectedHumor);
    if (result) {
        setModalVisible(true);
    } else {
        alert('Usuário já lançou um humor nas últimas 24 horas');
    }
    showAllHumors();
};

  const showAllHumors = async () => {
    const allHumors = await getAllHumors();
    console.log('Todos os humores cadastrados')
    allHumors.forEach(({ date, humor }) => {
      console.log(`Data: ${date}, Humor: ${humor}`)
    });
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 60 }} showsVerticalScrollIndicator={false}>

        <View style={styles.containerTopo}>

          <Text style={styles.tituloTherapyo}>Therapyo</Text>
        </View>

        <Text style={styles.tituloPagina}>Adicionar meu humor</Text>

        <View style={styles.containerBranco}>
          <Text style={styles.tituloContainerBranco}>Estou me sentindo</Text>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {humorIcons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.botaoUm, { backgroundColor: icon.bgColor, marginLeft: 10, marginRight: 10, marginTop: 20, borderWidth: selectedHumor === icon.label ? 8 : 0, borderColor: '#8FCAC3' }]}
                onPress={() => selectHumor(index)}
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
            <Text style={styles.modalText}>Humor Cadastrado</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

