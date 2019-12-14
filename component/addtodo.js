import React,{useState} from 'react';
import {Text, View,TextInput,Button} from 'react-native';

export default function Addtodo({submit}){

    const [text,settext]=useState('');
    const changeHandler=(val)=>{
            console.warn("ghjb",val)
        settext(val)
    }
    return(
        <View>
            <TextInput
                style={{marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',}}
                placeholder="new to add.."
                onChangeText={changeHandler} />
            <Button onPress={()=>submit(text)} title='add to' color='coral'/>
        </View>
    )

}
// const styles=StyleSheet.create({
//     input:{
//         marginBottom:10,
//         paddingHorizontal:8,
//         paddingVertical:6,
//         borderBottomWidth:1,
//         borderBottomColor:'#ddd',
//     }
// })