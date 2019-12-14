import React,{useState} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './component/header'
import Todoitem from './component/todoitem';
import Addtodo from './component/addtodo';


export default function App() {

  const [Todos,setTodo]=useState([
    {text:'1st line',key:'1'},
    {text:'2nd line',key:'2'},
    {text:'3rd line',key:'3'}
  ]);

  const pressHandler=(key)=>{
    setTodo((prevTodo)=>{
      return prevTodo.filter(todo =>todo.key!=key);
    }
    );}
    const submit=(text)=>{
      console.warn("ythbj",text)
      setTodo((prevTodo)=>{
        console.warn("thishjn",text)
        return [{text:text, key:Math.random().toString()},
         ...prevTodo];

      }
      )}

  return (
    <View style={styles.container}>
      <Header/>

<View style={styles.content}>

  <Addtodo submit={submit}/>


<View style={styles.list}>
<FlatList
      data={Todos}
      renderItem={({item})=>(
     <Todoitem  item={item}pressHandler={pressHandler}/>
      )}
/>
</View>

</View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:53,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
  
  list:{
    marginTop:40,
    alignItems:'center'
  },
});
