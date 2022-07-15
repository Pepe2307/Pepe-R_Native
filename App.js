/************************************ Imports ************************************/
import { Button, FlatList, ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

/* const image = require('./assets/imagenes/japan1.jpg') */           //Metodo 1
const image = require('./assets/imagenes/glass.jpg')           //Metodo 1
/* export const image = require('./assets/imagenes/japan1.jpg'); */   //Metodo 2
/*const image = { uri: "https://reactjs.org/logo-og.png"};*/  //Metodo 3
const image2 = require('./assets/imagenes/japan1.jpg')




/************************************ Aplicacion ************************************/
export default function App() {

    const [textItem, setTextItem] = useState('')
    const [itemList, setItemList] = useState([])

    const onHandlerChangeItem = (text) => setTextItem(text)
    
    const onHandlerAddItem = () => {
        setItemList(currentItems=>[...currentItems, {id: Math.round (Math.random()*1000) , value: textItem}])
        /* setItemList({...itemList, id: Math.random()*10, value: textItem}) */
        setTextItem('')
    }

  return (
    <View style={styles.screen}>

        <ImageBackground source={image} resizeMode="cover" style={styles.fondo}>


            {/* Busqueda de Items */}
            <View style={styles.container_busqueda}>

                <TextInput placeholder="Buscar Item..."
                value={textItem}
                onChangeText={onHandlerChangeItem}
 
                placeholderTextColor='white'
                style={styles.busqueda_texto}
                />

                <Button title='Agregar'
                onPress={onHandlerAddItem}
                disabled={textItem.length == 0 ? true : false}
                style={styles.busqueda_boton}
                />
                
                
                {/* <Pressable style={styles.button} onPress={onHandlerAddItem}>
                    <Text style={styles.text}>{"Buy"}</Text>
                </Pressable> */}
               
            </View>


            {/* Lista de Compras/Items */}
            <Text style={styles.titulo}>
                    Lista de compra:
            </Text>

            <View style={styles.container_lista}>


                {/* <View>
                    {itemList.map(item => 
                        <View style={styles.datos_item} key={item.id}>
                            <Text style={styles.texto_items}>Objeto: {item.value}</Text>
                            <Text style={styles.texto_items}>Id: {item.id}</Text>
                            <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>
                        </View>
                    )}
                </View> */}

      
                <FlatList style={styles.lista_compra}
                    data={itemList}
                    renderItem={data => (
                        <TouchableOpacity onPress={() => {}} style={styles.datos_item}>
                            <Text style={styles.texto_items}>
                                {data.item.value}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={true}
                    indicatorStyle='black'        
                />


                {/* <View style={styles.datos_item}>
                    <Text style={styles.texto_items}>
                        Objeto prueba 1
                    </Text>
                    <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>
                </View> */}

                
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
/************************************ Estilos ************************************/
const styles = StyleSheet.create({

    /* Pantalla */
    screen:{
        flex:1,
        justifyContent: 'center' /* funciona? */
        },
    fondo: {
        flex: 1,
    },

    /* Busqueda */
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

    /* Titulo Lista */
    titulo:{
        alignSelf:'center',
        textAlign:'center',
        margin:20,

        color:'black',
        fontSize:40,
        fontStyle: 'italic',
        width:'85%',
        
        backgroundColor: 'rgba(241, 88, 25, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    
    /* Lista de Items */
    lista_compra:{
        backgroundColor: 'rgba(255, 88, 25, 0.1)',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'white'

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
    container_lista:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    datos_item:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: 'rgba(225, 85, 35, 0.4)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        width:'90%',
        marginTop:60,
        alignSelf:'center',
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
        borderBottomColor:'#eee',
        borderBottomWidth:5,
    },
    
    
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});