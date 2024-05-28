import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#126EA1'
  },

  containerBranco: {
    width: '100%',
    height: '95%',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },

  containerTopo: {
    width: '100%',
    height: '9.7%',
    backgroundColor: '#09B5EB',
    alignItems: 'center'
  },

  tituloTherapyo: {
    fontSize: 27,
    color: "#FFFFFF",
    marginTop: '37.7%',
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

  Spotify: {
    width: 311,
    height: 48,
    paddingHorizontal: '10%',
    marginTop: 0,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#1ED162',
  },

  Youtube: {
    width: 311,
    height: 48,
    paddingHorizontal: '10%',
    marginTop: 0,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
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
