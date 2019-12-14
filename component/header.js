import React from 'react'
import {StyleSheet, Text,View,} from 'react-native'

export default function Header(){
    return(

        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>

        </View>
    )
}

const styles=StyleSheet.create({
header:{
    height:60,
    width:'100%',
    paddingTop:10,
    alignItems:'center',
    backgroundColor:'blue'
},
title:{
    fontSize:30,
    alignItems:'center',
    fontStyle:'italic',
    color:'#fff'
    


}
})