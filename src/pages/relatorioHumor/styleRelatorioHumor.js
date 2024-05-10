//styleRelatorio.js

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
    marginTop: 15,
    fontWeight: 'bold'
  },

  tituloContainerBranco: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 20
  },

  botaoUm: {
    width: 175,
    height: 175,
    backgroundColor: '#8996C7',
    marginTop: 30,
    marginLeft: -220,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoDois: {
    width: 175,
    height: 175,
    backgroundColor: '#77D6E3',
    marginTop: 25,
    marginLeft: -220,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoTres: {
    width: 175,
    height: 175,
    backgroundColor: '#D5AD51',
    marginTop: -375,
    marginLeft: 220,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoQuatro: {
    width: 175,
    height: 175,
    backgroundColor: '#96D863',
    marginTop: 27,
    marginLeft: 220,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoCinco: {
    width: 175,
    height: 175,
    backgroundColor: '#EDC868',
    marginTop: 20,
    marginLeft: 0,
    borderRadius: 10,
    alignItems: 'center',
  },

  tituloBotoes: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },

  tituloBotaoClinica: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },

  formatacaoEmojiRelatorio: {
    height: 90,
    width: 90,
    marginLeft: 10,
    marginTop: 5
  },

  formatacaoEmoji: {
    height: 80,
    width: 80,
    marginTop: 10,
    
  },

  listaHumor: { 
    paddingHorizontal: 20 ,
    alignItems:'center',
  },
  

  itemHumor: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ccc',
    marginBottom: 10, 
    width:350,
      },

    

  textDia: { 
    fontSize: 16 
  },

  textHumor: { 
    fontSize: 16 
  },

  pickerStyle: {
    height: 50,
    width: 150,
    marginBottom:10,
    marginTop:10
  },
 
})

 
