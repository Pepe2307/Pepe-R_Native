    //Memos - Nuevos comentarios:
    //todo Naranja - to do
    //* Remarcar
    //! Alerta
    //? Interrogante
     //// Tachado ////

//! *************************************** Imports ***************************************/
import { Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

import CustomAddItem from './components/AddItem/AddItem';
import CustomModal from './components/Modal/Modal';
import FlatListItems from './components/FlatList_Items/Flatlist_Items';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const image = require('./assets/imagenes/glass.jpg')           //Metodo 1
const image2 = require('./assets/imagenes/japan1.jpg')
//const image = { uri: "https://reactjs.org/logo-og.png"};     //Metodo 3


//! *************************************** Aplicacion ***************************************/

//todo *********************    Funciones    *******************/
export default function App() {
    //******************     Lista de compra     ******************/ 
    const [textItem, setTextItem] = useState('')
    const [itemList, setItemList] = useState([])

    const onHandlerChangeItem = (text) => setTextItem(text)
    const onHandlerAddItem = () => {
        setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem}])
        /* setItemList({...itemList, id: Math.random()*10, value: textItem}) */
        setTextItem('')
    }
    

    //******************     MODAL     ******************/ 
    const [itemSelected, setItemSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const onHandlerDeleteItem  = id => {
        setItemList(currentItems => currentItems.filter(item => item.id !== id))
        setItemSelected({})
        setModalVisible(!modalVisible)
    }
    const onHandlerModal = id => {
        setItemSelected(itemList.find(item => item.id === id))
        setModalVisible(!modalVisible)
    }

  //todo *********************    APP    *******************/
  return (
    <View style={styles.screen}>

        <ImageBackground source={image} resizeMode="cover" style={styles.fondo}>

            {/* //* MI MODAL
            (Habia puesto mal el {true} de transparent) */}
            <CustomModal
            modalVisible={modalVisible}
            itemSelected={itemSelected}
            onHandlerDeleteItem={onHandlerDeleteItem}
            />


            {/* //* BARRA DE BUSQUEDA Y ADD */}
            <CustomAddItem
            textItem={textItem}
            onHandlerChangeItem={onHandlerChangeItem}
            onHandlerAddItem={onHandlerAddItem}
            />


            {/* //*Lista de Compras/Items */}
            <FlatListItems
            itemList={itemList}
            onHandlerModal={onHandlerModal}
            />
            
        </ImageBackground>


        <ImageBackground source={image2}>
            <Text style={styles.texto_segunda_mitad}>
                <Button title='Segunda pagina =>' onPress={()=>{}}style={styles.estilo_boton_nuevo}/>
            </Text>
        </ImageBackground>
        
        <StatusBar style="auto" />

    </View>
  );
}
//! *************************************** Estilos ***************************************/
const styles = StyleSheet.create({

    /*//* PANTALLA GENERAL */
    screen:{
        flex:1,
        justifyContent: 'center' /* funciona? */
        },
    fondo: {
        flex: 1,
    },


    texto_segunda_mitad:{
        color:'black',
        textAlign:'center',
        margin:20,
        fontSize:30
    },
    estilo_boton_nuevo:{

    },

    /*//* EXTRAS / A BORRAR */
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});