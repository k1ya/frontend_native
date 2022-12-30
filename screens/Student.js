import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';

import axios from 'axios';
export default function Student() {
    const [data, setdata] = useState([])

    const fetchData=()=>{
        axios.get('http://127.0.0.1:8000/student/')
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }

    const fetchDelete =(id)=>{
        axios.delete(`http://127.0.0.1:8000/student/update/${id}`)
        .then(() => alert("item Deleted successfully"))
        .catch((err)=>alert(err))
    }

    const add =(namer)=>{
        axios.post(`http://127.0.0.1:8000/student/update/${id}`,{
            name:namer
        })
        .then(() => {alert("item Deleted successfully"),fetchData()})
        .catch((err)=>alert(err))
    }
    const updated =(namer)=>{
        axios.patch(`http://127.0.0.1:8000/student/update/${id}`,{
            name:namer
        })
        .then(() => {alert("item Deleted successfully"),fetchData()})
        .catch((err)=>alert(err))
    }

    useEffect(() => {fetchData()
    }, [])
    
  return (
    <View style={styles.container}>
       
        {data.map((stud)=>{
             return(<>
                <Text>{stud.name} <button onClick={fetchDelete(stud.id)}> delete</button></Text>
                
                </>
            )

        })}
   
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
});
