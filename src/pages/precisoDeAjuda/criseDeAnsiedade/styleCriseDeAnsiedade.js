import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#126EA1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  containerBranco: {
    width: 410,
    height: '90%',
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },

  containerTopo: {
    width: '100%',
    height: 100,
    backgroundColor: '#09B5EB',
    alignItems: 'center'
  },

  tituloTherapyo: {
    fontSize: 27,
    color: "#FFFFFF",
    marginTop: 55,
    fontWeight: 'bold'
  },

  tituloPagina: {
    textAlign: 'center',
    fontSize: 35,
    color: "#FFFFFF",
    marginTop: 10,
    fontWeight: 'bold'
  },

  card: {
    width: '90%',
    backgroundColor: '#09B5EB',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
    paddingBottom: 5
  },

  tituloCard: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  info: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
  },

  tituloBotoes: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 311,
    height: 48,
    paddingHorizontal: '10%',
    backgroundColor: '#FFD700',
    marginTop: 0,
    borderRadius: 10,
    alignItems: 'center',
    textAlignVertical: 'center',
    marginLeft: '-4%',
  },

  BotaoMidia: {
    width: 311,
    height: 48,
    paddingHorizontal: '10%',
    marginTop: 0,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  Spotify: {
    ...styles.BotaoMidia,
    backgroundColor: '#1ED162',
  },

  Youtube: {
    ...styles.BotaoMidia,
    backgroundColor: '#C52727',
  },

  tituloBotao: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#070707',
    alignItems: 'center',
    marginLeft: '14%',
  }
});
