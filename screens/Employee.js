import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState,useEffect } from 'react';

import axios from 'axios';
export default function Employee() {
    const [data, setdata] = useState([])
    const [text, setText] = useState('');
    const fetchData=()=>{
        axios.get('http://127.0.0.1:8000/employee/')
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }
    const fetchAdd=(text)=>{
        axios.get('http://127.0.0.1:8000/employee/',{
            name:text
        })
        .then((res)=>{setdata(res.data); fetchData()})
        .catch((err)=>console.log(err))
    }
    const fetchDelete =(id)=>{
        axios.delete(`http://127.0.0.1:8000/employee/update/${id}`)
        .then(() => {alert("item Deleted successfully"),fetchData()})
        .catch((err)=>alert(err))
    }

    const add =(namer)=>{
        axios.post(`http://127.0.0.1:8000/employee/update/${id}`,{
            name:namer
        })
        .then(() => {alert("item Deleted successfully"),fetchData()})
        .catch((err)=>alert(err))
    }
    const updated =(namer)=>{
        axios.patch(`http://127.0.0.1:8000/employee/update/${id}`,{
            name:namer
        })
        .then(() => {alert("item Deleted successfully"),fetchData()})
        .catch((err)=>alert(err))
    }
    useEffect(() => {fetchData()
    }, [])
    
  return (
    <View style={styles.container}>
       
        {data.map((emp)=>{
            return(<>
                <Text>{emp.name} <button onClick={fetchDelete(emp.id)}> delete</button></Text>
                </>
            )

        })}
        <TextInput
        style={styles.input}
        placeholder="New Name to add"
        onChangeText={newText => setText(newText)}
        
      />
      <button onClick={fetchAdd(text)}>Click to Add</button>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
