import React from "react"; 
import { Platform, ScrollView, StyleSheet, useColorScheme} from "react-native";
import { Text, View } from "../../components/Themed";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button,Card } from "react-native-paper";

import {categoriesNamesData} from '../../data';
import { Link, router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import fashion from '../../assets//images/categories/fashion.webp';
import electronics from '../../assets//images/categories/electronics.webp';
import furniture from '../../assets//images/categories/furniture.webp';
import beauty from '../../assets//images/categories/beauty.webp';
import toys from '../../assets//images/categories/toys.webp';
import sports from '../../assets//images/categories/sports.png';
import books from '../../assets//images/categories/books.webp';
import jewelry from '../../assets//images/categories/jewelry.png';
import deals from '../../assets//images/categories/deals.gif';


  const images = [
    fashion,
    electronics,
    furniture,
    beauty,
    toys,
    sports,
    books,
    jewelry,
    deals,

    // Add more images as needed
   ];
export default function CategorieList() {

 
    return (
    <View style={styles.inBox}>
      {
        categoriesNamesData.map((list,inedx)=>(
        <Card style={styles.catInBox} key={inedx}>
          
        <Text style={styles.CategorieName} key={inedx}>{list.name}</Text>
        
        <Card.Cover source={images[inedx]?images[inedx]:{uri:list.link}} style={{width:110,height:110,alignSelf:"center"}} />
        {/* <Link style={styles.button} href={{ pathname: '/categoryItems', params: { name: list.id } }}>Go to Details</Link> */}
        <Link style={{ marginTop:18,alignSelf:"center", }} href={{ pathname: '/categoryItems', params: { name: list.id } }}><View style={styles.button}><Text style={{  textAlign:"center",color:"white", fontWeight:"600",fontSize:16 }}>Explore</Text></View></Link>
      </Card>   
        ))
      }
  
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "green",
    padding: 8,
    margin: 8,
  },

  button: {
    borderRadius: 20,
   width:90,
    backgroundColor:"darkblue",
    padding:8,

  },

  catInBox: {
    borderRadius: 11,
    backgroundColor: "white",
    padding: 18,
    margin: 8,
  },
  CategorieName:{
    color:'black',
   textAlign:'center',
   fontSize:21,
   marginTop:6,
   marginBottom:8,
   fontWeight:"600"
  }
});
