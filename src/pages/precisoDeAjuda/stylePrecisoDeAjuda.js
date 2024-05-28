import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#126EA1',
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
        height: '31%',
        backgroundColor: '#09B5EB',
        alignItems: 'center'
    },

    tituloTherapyo: {
        fontSize: 27,
        marginTop: '49%',
        color: "#FFFFFF",
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

    tituloBotoes: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 311,
        height: 48,
        paddingHorizontal: '10%',
        backgroundColor: '#FFD700',
        marginTop: 27,
        borderRadius: 10,
        alignItems: 'center',
        textAlignVertical: 'center',
        // elevation: 5, // sombra mas ta meio zoado quando segura o botão :v - sla


    }
})
