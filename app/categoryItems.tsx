import { Button, Platform, ScrollView, StyleSheet,useColorScheme  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MapView ,{Marker ,PROVIDER_GOOGLE  } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Card } from 'react-native-paper';
import electronics from '../assets//images/categories/electronics.webp';
import { Items } from '../data';
// type props ={
//   id:string
// }
export default function CategoryScreen() {
  const params = useLocalSearchParams();
  const id = useRouter()
  console.log(params.name);
  
 
const addCart =()=>{
  return "";
}
 
   
  
  return (
    <View style={styles.container}>
      {
        Items.map(  (data,index)=>(
          data.id===params.name?(
          <View key={index}>
            <Text style={styles.title}>{data.name}</Text>
    
    <ScrollView>
      <View style={styles.inBox}>
      { 
        data.items.map(  (items,indexVal)=>(
          
    
        <Card style={styles.catItems} key={indexVal} >
          
          <Text style={styles.CategorieName}>{items.itemname}</Text>
          
          <Card.Cover source={{ uri: items.link }} style={{width:100,height:100}} />
          <Text style={styles.CategorieName}>Rs.{items.price}</Text>

          <Link href={".."}   style={styles.button} >Add to cart</Link>
        </Card>  
        
        
         
        ))
      }
       </View>
    </ScrollView>
            </View>
          ):""
        ))
      }
      
       
      
      
     
          

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
   
    // justifyContent: 'center',
  },
  inBox: {
    display: "flex",
    justifyContent:'space-evenly',
    flexDirection: "row",
    flexWrap: "wrap",
    margin:5,
    borderRadius:12,
    marginBottom:40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:12,
   
    
  },
  button: {
    borderRadius:20,
    padding:8,
    marginTop:12,
    backgroundColor:"lightblue",
    textAlign:"center",
  

  },
  scrollCartView:{
margin:8,
marginLeft:11
  },
  
  catItems: {
    borderRadius: 11,
    backgroundColor: "white",
    padding: 8,
    margin: 8,
  },
  CategorieName:{
    color:'black',
   textAlign:'center'
  }
});
