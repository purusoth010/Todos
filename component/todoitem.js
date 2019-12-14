import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function Todoitem({item,pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={style.item}>{item.text}></Text>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    item:{
        padding:10,
        borderRadius:10,
        marginTop:30,
        borderColor:'#000',
        borderStyle:'solid',
        borderWidth:2,
        
    }
    
})
