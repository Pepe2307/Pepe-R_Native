/** Better comments test - @param miParametro El resto */
    //todo Naranja - to do
    //* Remarcar
    //! Alerta
    //? Interrogante
     //// Tachado ////

//! *************************************** Imports ***************************************/
import { Button, FlatList, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

/* const image = require('./assets/imagenes/japan1.jpg') */           //Metodo 1
const image = require('./assets/imagenes/glass.jpg')           //Metodo 1

/* export const image = require('./assets/imagenes/japan1.jpg'); */   //Metodo 2

//// const image = { uri: "https://reactjs.org/logo-og.png"};  //Metodo 3
const image2 = require('./assets/imagenes/japan1.jpg')




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

            {/* //* Mi Modal (Habia puesto mal el {true} de transparent) */}
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


            {/* //* Busqueda de Items */}
            <View style={styles.container_busqueda}>

                <TextInput placeholder="Buscar Item..."
                value={textItem}
                onChangeText={onHandlerChangeItem}
 
                placeholderTextColor='white'
                style={styles.busqueda_texto}
                />
                
                <Button title='Add'
                style={styles.boton_para_hacer} onPress={onHandlerAddItem}
                disabled={textItem.length < 1 ? true : false}/>
                
                {/* <Pressable style={styles.button} onPress={onHandlerAddItem}>
                    <Text style={styles.text}>{"Buy"}</Text>
                </Pressable> */}
               
            </View>


            {/* //*Lista de Compras/Items */}
            <Text style={styles.titulo}>
                    Lista de compra:
            </Text>

            <View style={styles.container_lista}>

                {/* Forma 1 de hacer la lista con un .map
                 <View>
                    {itemList.map(item => 
                        <View style={styles.datos_item} key={item.id}>
                            <Text style={styles.texto_items}>Objeto: {item.value}</Text>
                            <Text style={styles.texto_items}>Id: {item.id}</Text>
                            <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>
                        </View>
                    )}
                </View> */}

                <FlatList /* style={styles.lista_compra} */
                contentContainerStyle={styles.lista_compra}/* //* Esta forma da menos problemas? */
                    data={itemList}
                    renderItem={data => (
                        <View style={styles.datos_item}>
                            <Text style={styles.texto_items}>
                                {data.item.value} 
                            </Text>

                            <Button title='Quitar Item' onPress={() => onHandlerModal(data.item.id)}
                            style={styles.estilo_boton}/>
                            
                            {/* A determinar que Boton queda mejor: */}
                            {/* <TouchableOpacity onPress={() => onHandlerModal(data.item.id)}
                            style={styles.estilo_boton}>
                                <Text style={styles.texto_items}>
                                    Quitar Item
                                </Text>
                            </TouchableOpacity>
                            */}                    
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                    indicatorStyle='black'
                />

                {/* <FlatList style={styles.lista_compra}
                    data={itemList}
                    renderItem={data => (
                        <TouchableOpacity onPress={() => onHandlerModal(data.item.id)}
                        style={styles.datos_item}>
                            <Text style={styles.texto_items}>
                                {data.item.value}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                    indicatorStyle='black'
                /> */}


                <View style={styles.datos_item}>
                    <Text style={styles.texto_items}>
                        Objeto prueba 1
                    </Text>
                    <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>
                </View>
                
            </View>
            
        </ImageBackground>


        <ImageBackground source={image2}>
            <Text style={styles.texto_items}>
                <Button title='Segunda pagina =>' onPress={()=>{}}style={styles.estilo_boton}/>
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


    /*//* BUSQUEDA DE ITEMS */
    container_busqueda:{
        flexDirection:'row',
        justifyContent:'space-around',
        
        width:'95%',
        alignSelf:'center',
        marginTop:'15%',

        alignItems:'center',
        backgroundColor: 'rgba(225, 85, 35, 0.20)',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'white',
    },
    busqueda_texto:{
        textAlign:'left',
        width:250,
        fontSize:35,
        opacity: 0.65,
    },
    busqueda_boton: { /* No afecta nada? */
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        borderRadius: 30,
        /* height: '30%', */
      },


    /*//* LISTA DE ITEMS */
    titulo:{
        alignSelf:'center',
        textAlign:'center',
        margin:'5%',

        color:'black',
        fontSize:40,
        fontStyle: 'italic',
        width:'85%',
        
        backgroundColor: 'rgba(241, 88, 25, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    container_lista:{
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
    },
    lista_compra:{
        backgroundColor: 'rgba(255, 88, 25, 0.1)',
        borderRadius: 40,
        borderWidth: 1,
        
        borderColor: 'white',
        alignItems:'stretch',
        alignContent:'center',
        /* marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff', */
    },
    datos_item:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignSelf:'flex-end',
        backgroundColor: 'rgba(225, 85, 35, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        width:'90%',
        margin:'5%',
        /* gap:'50%', BUSCAR REEMPLAZO DE GAP, GAP NO TIENE SOPORTE EN NATIVE*/
        alignSelf:'center',
    
        justifyContent:'center',
        alignContent:'center',
    },
    texto_items:{
        color:'black',
        textAlign:'center',
        margin:20,
        fontSize:30
    },
    estilo_boton:{
        backgroundColor:'red',
        color:'#fff',
        /* borderBottomColor:'#eee',
        borderBottomWidth:5, */
    },
    

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

    

    /*//* EXTRAS / A BORRAR */
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});