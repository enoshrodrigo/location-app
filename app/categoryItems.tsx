import { Button, Platform, Pressable, ScrollView, StyleSheet,useColorScheme  } from 'react-native';

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
import axios from 'axios';
import { Items } from '../data';
import { json } from 'body-parser';
// type props ={
//   id:string
// }
export default function CategoryScreen() {
  const params = useLocalSearchParams();
  const id = useRouter()
  console.log(params.name);
  const [cartItems, setCartItems] = useState(
      [{ categoryid: "0", id: ' ', itemname: " ", price: 0, link: "https://assets-global.website-files.com/5cdcb07b95678db167f2bd86/6340bdfbeb3b663555ee1dca_Best%20receipts%20app%20HERO.png" },]
    );
    
  const addToCart = async (item:any) => {
    
 
      await axios.post("http://192.168.1.3:5000/api/addtocart",{data:item}).then((res)=>{
       setCartItems(res.data)
       alert("Item added to cart ")
      }).catch((err)=>{
        console.log(err);
      })
     
  };
 useEffect(  ()=>{
  
    axios.post("http://192.168.1.3:5000/getcart").then((res)=>{
    setCartItems(res.data)
   }).catch((err)=>{
     console.log(err);})
  
  
 },[])
   
  
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

          <Pressable
  style={[styles.button, cartItems.some((cartItem) => cartItem.id === items.id) && styles.disabledButton]}
  onPress={() => {
    addToCart(items);
  }}
  disabled={cartItems.some((cartItem) => cartItem.id === items.id)}
>
  <Text style={styles.addCart}>
    {cartItems.some((cartItem) => cartItem.id === items.id)
      ? 'Added cart'
      : 'Add to Cart'}
  </Text>
</Pressable>

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
  disabledButton: {
    backgroundColor: 'gray', // Change this to your preferred disabled button style
    opacity: 0.6, // Adjust opacity as needed
    // Add other styles to visually indicate a disabled button
  },
  addCart:{
    textAlign:"center",
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
