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
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },

  containerTopo: {
    width: '100%',
    height: 100,
    backgroundColor: '#09B5EB',
    alignItems: 'center',
    marginTop: 35
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
    marginTop: 15,
    fontWeight: 'bold'
  },

  tituloContainerBranco: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 20
  },

  youtube: {
    width: 311,
    height: 48,
    paddingHorizontal: '10%',
    marginTop: 0,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#C52727'
  },

  tituloBotao: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#070707',
    alignItems: 'center',
    marginLeft: '14%'
  },

  textInfo: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'normal',
    marginTop: 22,
    textAlign: 'justify'
  }
})