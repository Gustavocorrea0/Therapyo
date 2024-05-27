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
    height: '95%', //ALTERAR
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },

  containerTopo: {
    width: '100%',
    height: 115, //ALTERAR
    backgroundColor: '#09B5EB',
    alignItems: 'center'
  },

  tituloTherapyo: {
    fontSize: 27,
    color: "#FFFFFF",
    marginTop: 67, //ALTERAR
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

  containerAmarelo: {
    height: 100,
    width: '95%',
    backgroundColor: '#FFD700',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15
  },

  tituloContainerAmarelo: {
    color: '#000000',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },

  buttonRoutes: {
    height: 70,
    width: '95%',
    backgroundColor: '#309D90',
    borderRadius: 20,
    alignItems: 'center',
    margin: 15
  },

  textButton: {
    color: '#FFFFFF',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20
  }

})