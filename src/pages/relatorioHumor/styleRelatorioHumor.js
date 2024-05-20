//styleRelatorio.js

import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#126EA1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
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
    height: 70,
    backgroundColor: '#09B5EB',
    alignItems: 'center'
  },

  tituloTherapyo: {
    fontSize: 27,
    color: "#FFFFFF",
    marginTop: 25,
    fontWeight: 'bold'
  },

  tituloPagina: {
    textAlign: 'center',
    fontSize: 35,
    color: "#FFFFFF",
    marginTop: 15,
    fontWeight: 'bold'
  },

  listaHumor: { 
    padding: 10 ,
    alignItems:'center',
  },
  
  itemHumor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#363636',
    marginBottom: 10,
    paddingHorizontal: 20, 
    width: 350, 
    height: 80
  },

  textDia: {
    flex: 1,
    fontWeight: 'bold',
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: 'left',
  },

  textHumor: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: 'bold',
    flex: 1, 
    fontSize: 16,
    textAlign: 'right'
  },

  pickerStyle: {
    height: 50,
    width: 150,
    marginBottom:10,
    marginTop:10
  },
 
})

 
