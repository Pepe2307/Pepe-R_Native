import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function FlatListItems (parametros_FlatListItems) {

    const {itemList, onHandlerModal} = parametros_FlatListItems

    return(
        <View style={styles.container_lista}>


            <Text style={styles.titulo}>
                Lista de compra:
            </Text>


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

            <View style={styles.datos_item}>
                <Text style={styles.texto_items}>
                    Objeto prueba 1
                </Text>
                
                <Button title='Add' onPress={()=>{}}style={styles.estilo_boton}/>
            </View>
            
        </View>
)}


const styles = StyleSheet.create({
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
})