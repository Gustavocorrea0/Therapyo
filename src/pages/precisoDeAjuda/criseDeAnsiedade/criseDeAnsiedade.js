import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styleCriseDeAnsiedade';

function CriseDeAnsiedadeScreen() {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigation.navigate('Home Screen');
    }
  };

  const handleOpenSpotify = () => {
    Linking.openURL('https://open.spotify.com/playlist/7K3scENpOi7ZPZUHfnfic3?si=ljw8eDYLSXm_WrQzJVuGrw&pi=trJS7xjgRWCXI');
  };

  const handleOpenYoutube = () => {
    Linking.openURL('https://www.youtube.com/watch?v=UfcAVejslrU&list=PLq0HuQt4PxZEcRyZFV-lXQTcV4RB7W26M');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
        <View style={styles.containerTopo}>
          <Text style={styles.tituloTherapyo}>Therapyo</Text>
        </View>

        <Text style={styles.tituloPagina}>Crise de Ansiedade</Text>

        <View style={styles.containerBranco}>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>1. Mantenha a calma, por mais que pareça difícil</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>2. Se possível, busque ajuda imediatamente:</Text>
            <Text style={styles.info}>SAMU: 192{"\n"}</Text>
            <Text style={styles.info}>Centro de Valorização da Vida: 188{"\n"}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>3. Caso não seja possível pedir ajuda ou esteja se deslocando para o local de atendimento, siga os próximos passos:</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>
              1 - Mantenha a calma e comunique alguém próximo a você sobre a sua situação;{"\n\n"}
              2 - Controle sua respiração, de modo a deixá-la mais lenta {"\n\n"}
              3 - Se possível, procure um lugar com ar puro ou que seja tranquilo {"\n\n"}
              4 - Tente distrair sua mente: {"\n"}
              {"    "}• Converse com alguém{"\n"}
              {"    "}• Ouça uma música {"\n\n"}
              5 - Playlists de músicas que podem ajudar:
            </Text>

            <TouchableOpacity style={[styles.Spotify, { marginTop: 0, }]} onPress={handleOpenSpotify}>
              <Image source={require('../../../assets/icons/Spotify Icon.png')} style={{ width: 40, height: 40 }} />
              <Text style={[styles.tituloBotao]}>Spotify</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.Youtube, { marginTop: 5, }]} onPress={handleOpenYoutube}>
              <Image source={require('../../../assets/icons/Youtube Icon.png')} style={{ width: 40, height: 40 }} />
              <Text style={[styles.tituloBotao]}>Youtube</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>  
              6 - Imagine a crise passando.{"\n\n"}
              7 - Técnica 5,4,3,2,1:{"\n\n"}
              {"  "} 5 - Foque em 5 objetos diferentes (Mesas, cadeiras, etc){"\n\n"}
              {"  "} 4 - Preste atenção em 4 sons diferentes (Som do vento, carros, música, etc){"\n\n"}
              {"  "} 3 - Toque em 3 objetos diferentes{"\n\n"}
              {"  "} 2 - Sinta 2 cheiros{"\n\n"}
              {"  "} 1 - Sinta 1 sabor
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.tituloCard}>
              8 - Neste momento, você deve estar mais calmo e tranquilizado{"\n"}{"\n"}
              9 - Você deve procurar ajuda psicológica para que esse tipo de coisa não volte a acontecer{"\n"}{"\n"}
              10 - Alguns órgãos do governo que podem te ajudar:{"\n"}{"\n"}
              {"  "}CAPS - Centro de Atenção Psicossocial - GRATUITO{"\n"}{"\n"}
              {"  "}UBS - Unidades Básica de Saúde - GRATUITO{"\n"}
            </Text>
          </View>
        </View>
        <View style={{height: 30, width: 100}}>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CriseDeAnsiedadeScreen;
