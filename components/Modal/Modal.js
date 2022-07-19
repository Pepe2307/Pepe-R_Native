import {Button, Modal, StyleSheet, Text, View} from 'react-native'

export default function CustomModal (parametros_Modal) {

    const {modalVisible, itemSelected, onHandlerDeleteItem} = parametros_Modal

    
    return (
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}>

            <View style={styles.modal_Container}>
                <View style={styles.modal_View}>

                    <View>
                        <Text style={styles.modal_titulo}> {itemSelected.value} </Text>
                    </View>

                    <View>
                        <Text style={styles.modal_confirmacion}> Seguro que desea borrar este objeto de la lista? </Text>
                    </View>

                    {/* <View style={styles.modal_mensaje_container}>
                        <Text style={styles.modal_mensaje_item}>{itemSelected.value}</Text>
                    </View> */}
                    
                    <View style={styles.modal_boton}>
                        <Button onPress={() =>onHandlerDeleteItem(itemSelected.id)} title='Confirmar' style={styles.busqueda_boton}/>
                    </View>

                    <View style={styles.modal_boton}>
                        <Button onPress={() =>onHandlerDeleteItem(itemSelected.id)} title='Cancelar' style={styles.busqueda_boton}/>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    /*//* MODAL */
    modal_Container:{
        flex: 1,
        justifyContent:'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    
    modal_View:{
        /* flex:1, */
        flexShrink: 1, //Achica para mostrar solo necesario
        flexDirection: 'column',
        maxWidth:'80%',
        maxHeight:'45%',


        justifyContent:'space-evenly',
        alignItems: 'center',

        backgroundColor: 'lightgrey',
        borderRadius: 20,
        padding: '5%',
        
    },
    modal_titulo:{
        backgroundColor: 'black',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'black',
        color: 'white',
        fontSize: 40,
        width:'100%',
        
        /* 
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems: 'center', */
    },
    modal_confirmacion:{
        color: 'white',
        fontSize: 20,
    },
    modal_mensaje_container:{
        backgroundColor: 'red',
        color: 'red',
        fontSize: 30,
        },
    modal_mensaje_item:{
        backgroundColor: 'blue',
        color: 'red',
        fontSize: 20,
    },
    modal_boton:{

    },
});