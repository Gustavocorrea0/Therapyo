import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#126EA1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerBranco: {
    width: '100%',
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
    marginTop: 50,
    fontWeight: 'bold'
  },

  tituloPagina: {
    textAlign:"center",
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
    marginTop: 0,
    marginLeft: -120,
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

  botaoConfirmar: {
    width: '90%',
    height:50,
    backgroundColor: '#EDC868',
    marginTop: 20,
    marginLeft: 0,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor:'#000',
    marginBottom:-40
  },

  tituloBotoes: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  tituloBotaoClinica: {
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    
  },

  formatacaoEmojiRelatorio: {
    height: 90,
    width: 90,
    marginLeft: 10,
    marginTop: 10
  },

  formatacaoEmoji: {
    height: 80,
    width: 80,
    marginTop: 23
  },


  //css modal//
  container1: {
    flex: 1,
    backgroundColor: '#126EA1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Estilos para o modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding:30,
    alignItems: "center",
    backgroundColor: '#8EBFBF',  // Cor de fundo do modal
    borderWidth: 4  ,              // Espessura da borda
    borderColor: '#000',         // Cor da borda
  },
  
  modalText: {
    fontSize:24,
    textAlign: "center",
    color: '#fff', 
    fontSize: 30  
  },
  button: { 
    fontSize: 20,   
    marginTop:30,
    borderRadius: 10,
    padding: 15,
    width:250
  },
  buttonClose: {
    backgroundColor: "#000"
  },
  
  textStyle: {      
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
  
})