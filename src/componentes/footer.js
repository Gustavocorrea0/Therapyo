import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2024 Therapyo.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginBottom:-17,
    height: 50,
    width:'100%',
    backgroundColor: '#83AEBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#333',
    fontSize: 14
  }
});

export default Footer;
