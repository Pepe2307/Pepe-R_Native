/************************************ Imports ************************************/
import { Button, FlatList, ImageBackground, Pressable, StyleSheet, Text, TextInput, View, onPress } from 'react-native';

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

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <View style={styles.container_busqueda}>

                <TextInput placeholder="Buscar Item..."
                value={textItem}
                onChangeText={onHandlerChangeItem}
 
                placeholderTextColor='white' underlineColorAndroid='black'
                style={styles.input_texto}/>

                <Button title='Agregar' onPress={onHandlerAddItem} style={styles.button}/>
                
                {/* <Pressable style={styles.button} onPress={onHandlerAddItem}>
                    <Text style={styles.text}>{"Buy"}</Text>
                </Pressable> */}
               
            </View>

            {/* <Text>{textItem}</Text> */}

            {/* <View >
                {itemList.map(item => 
                    <View style={styles.container_item} key={item.id}>
                        <Text style={styles.texto}>{item.value}</Text>
                        <Text style={styles.texto}>{item.id}</Text>
                        <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>

                        <Pressable style={styles.button} onPress={onHandlerAddItem}>
                            <Text style={styles.text}>{"Buy"}</Text>
                        </Pressable>
                    </View>
                )}
            </View> */}
            
            <View style={styles.container_lista}>

                <Text style={styles.titulo}>
                    Lista de compra:
                </Text>

                <View>
                    {itemList.map(item => 
                        <View style={styles.container_item} key={item.id}>
                            <Text style={styles.texto}>Objeto: {item.value}</Text>
                            <Text style={styles.texto}>Id: {item.id}</Text>
                            <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>

                            {/* <Pressable style={styles.button} onPress={onHandlerAddItem}>
                                <Text style={styles.text}>{"Buy"}</Text>
                            </Pressable> */}
                        </View>
                    )}
                </View>


                {/* <View style={styles.container_item}>
                    <Text style={styles.texto}>
                        Objeto de compra 1
                    </Text>
                    <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>
                </View>

                <View style={styles.container_item}>
                    <Text style={styles.texto}>
                        Objeto de compra test
                    </Text>
                    <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>
                </View> */}
                
            </View>
            
        </ImageBackground>


        {/* <ImageBackground source={image2}>
            <Text style={styles.texto}>
                <Button title='Segunda pagina =>' onPress={()=>{}}style={styles.estilo_boton}/>
            </Text>
        </ImageBackground> */}
        
        <StatusBar style="auto" />

    </View>
  );
}
/************************************ Estilos ************************************/
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center'
        },
    titulo:{
        color:'black',
        textAlign:'center',
        margin:20,
        fontSize:40,
        fontStyle: 'italic',
        
        backgroundColor: 'rgba(241, 88, 25, 0.5)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    texto:{
        color:'black',
        textAlign:'center',
        margin:30,
        fontSize:25
    },
    container_busqueda:{
        flexDirection:'row',
        justifyContent:'space-around',
        
        width:'99%',
        alignSelf:'center',
        marginTop:60,

        alignItems:'center',
        backgroundColor: 'rgba(225, 85, 35, 0.20)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        
    },
    container_lista:{
        justifyContent:'flex-end',
    },
    container_item:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: 'rgba(225, 85, 35, 0.20)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',

        marginTop:60,
    },

    input_texto:{
        /* borderBottomColor:'black',
        borderBottomWidth:5, */
        textAlign:'center',
        alignItems:'center',
        width:250,
        fontSize:35,
    },
    estilo_boton:{
        backgroundColor:'red',
        color:'#fff',
        borderBottomColor:'#eee',
        borderBottomWidth:5,
    },
    image: {
        flex: 1,
    },
    button: {
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
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
});