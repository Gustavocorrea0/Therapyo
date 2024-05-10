  import React, { useState } from 'react';
  import { StyleSheet,SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
  import styles from './styleHumorDiario'; // Importando o estilo que você forneceu
  import BackButton from '../../componentes/BackButton';  // Verifique o caminho se está correto
  
  export default function HumorDiario() {
    const [selectedHumor, setSelectedHumor] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const selectHumor = (index) => {
      setSelectedHumor(index);
    };

    const confirmHumor = () => {
      setModalVisible(true);
    };

    return (
      <SafeAreaView style={styles.container}>
        
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 60 }} showsVerticalScrollIndicator={false}>

        <View style={absoluteStyle.backButtonContainer}>
          <BackButton />
        </View>
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
                  style={[styles.botaoUm, { backgroundColor: icon.bgColor, marginLeft: 10, marginRight: 10, marginTop: 20, borderWidth: selectedHumor === index ? 3 : 0, borderColor: 'blue' }]}
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
  const absoluteStyle = StyleSheet.create({
    backButtonContainer: {
      position: 'absolute',
      top: 8,  // Leve ajuste para garantir visibilidade
      left: 10,
      zIndex: 1000
    }
  });
  const humorIcons = [
    { label: 'Feliz', image: require('../../assets/icons/smile.png'), bgColor: '#FFFF00' },
    { label: 'Com Raiva', image: require('../../assets/icons/smile.png'), bgColor: '#FF0000' },
    { label: 'Triste', image: require('../../assets/icons/smile.png'), bgColor: '#0000CD' },
    { label: 'Calmo', image: require('../../assets/icons/smile.png'), bgColor: '#6495ED' },
    { label: 'Ansioso', image: require('../../assets/icons/smile.png'), bgColor: '#008000' },
    { label: 'Com Medo', image: require('../../assets/icons/smile.png'), bgColor: '#4B0082' },
  ];
