import { Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

import CustomAddItem from '../../components/AddItem/AddItem';
import CustomModal from '../../components/Modal/Modal';
import FlatListItems from '../../components/FlatList_Items/Flatlist_Items';
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from 'react';

const image = require('../../assets/imagenes/glass.jpg')           //Metodo 1
const image2 = require('../../assets/imagenes/japan1.jpg')


const HomeStackScreen = () => {
    const HomeStack = createNativeStackNavigator();




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



    
  return (
    <View style={styles.screen}>
        
        <ImageBackground source={image} resizeMode="cover" style={styles.fondo}>

            {/* <HomeStack.Navigator>
                <HomeStack.Screen name="Home1" component={HomeScreen1} />
                <HomeStack.Screen name="Home2" component={HomeScreen2} />
            </HomeStack.Navigator> */}

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


        {/* <ImageBackground source={image2}>
            <View style={styles.texto_segunda_mitad}>
                <Button title='App' onPress={()=>{}}style={styles.estilo_boton_nuevo}/>
                
                
                
            </View>
        </ImageBackground> */}
        

        <StatusBar style="auto" />

</View>
  );
};

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
        flexDirection:'row',
        justifyContent:'space-evenly',
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

export default HomeStackScreen;
