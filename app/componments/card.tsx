import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform, StyleSheet } from 'react-native'
import React from 'react' 
import { useNavigation } from '@react-navigation/native'
import { Items, } from '../../data';
import { Button,Card } from "react-native-paper";
import { Link, router } from "expo-router";
 


  

   type list={
    id:string,
    name:string,
    link:string,
    price:number,
    width:number,
    height:number
  
   }
export default function OfferCard(list:list) {
  const navigation = useNavigation();
  
  return (

    //   <View>
    //      <View style={styles.card}>
    //         <View style={styles.innerCard}>
    //             <Text>Hello world</Text>
    //         </View>
            
    //         </View>
             

    //   </View>
    <View style={styles.inBox}>
   
       
        <Card style={styles.catInBox}  >
          
        <Text style={styles.OfferName}  >{list.name}</Text>
        
        <Image source={{ uri: list.link }} style={{width:list.width,height:list.height,margin:2,alignSelf:"center",objectFit:"contain"}} />
        <Text style={styles.OfferPrice}>Rs.{list.price}</Text>
 
        <Link style={{ marginTop:12,alignSelf:"center"}} href={{ pathname: '/categoryItems', params: { name: list.id } }}><View style={styles.button}><Text style={{  textAlign:"center",color:"white", fontWeight:"800", }}>Go to Details</Text></View></Link>
      </Card>   
        
   
  
    </View>
    
  )
}

const styles=  StyleSheet.create({
card:{
    // backgroundColor:"#F6F6F6",
    margin:4,
     
    borderRadius:8
},
innerCard:{
margin:2,
alignSelf:"center"
},
inBox: {
    display: "flex",
    justifyContent:'space-evenly',
    flexDirection: "row",
    flexWrap: "wrap",
    margin:5,
    borderRadius:12,
  },

  box: {
    borderRadius: 11,
    // backgroundColor: "green",
    padding: 8,
    margin: 8,
  },

  button: {
    borderRadius: 20,
   
    backgroundColor:"darkblue",
    padding:8,
  

  },

  catInBox: {
    borderRadius: 11,
    backgroundColor: "white",
    padding: 8,
    margin: 8,
  },
  OfferName:{
    color:'black',
   textAlign:'center',
   fontWeight:"800",
   marginBottom:6,
  },
  OfferPrice:{
    color:'black',
   textAlign:'center',
   marginTop:6,
  
  }
})