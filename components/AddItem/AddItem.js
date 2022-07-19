import {Button, StyleSheet, Text, TextInput, View} from 'react-native'

export default function CustomAddItem (parametros_AddItem) {

    const {textItem, onHandlerChangeItem, onHandlerAddItem} = parametros_AddItem

    return(
        <View style={styles.container_busqueda}>

                <TextInput
                placeholder="Buscar Item..."
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
    )
}
const styles = StyleSheet.create({
    
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
})