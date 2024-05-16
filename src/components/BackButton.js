import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Text style={styles.text}>Voltar</Text>
    </TouchableOpacity>
  );
};

// Estilos para o botão
const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ddd',  // Cor de fundo para melhorar a visibilidade
    borderRadius: 5           // Cantos arredondados para estética
  },
  text: {
    color: '#000'  // Cor do texto
  }
});

export default BackButton;
