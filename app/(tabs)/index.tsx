import { Platform, ScrollView, StyleSheet,Dimensions , useColorScheme , FlatList,Pressable  } from "react-native";
import Carousel from 'react-native-snap-carousel';

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import Items from "../componments/Items";
import TabThreeScreen from "../componments/test";
import { cooking, offers } from "../../data";
import { useFonts } from "expo-font";
import { Image } from "react-native-elements";
// import { color } from "framer-motion";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import axios from "axios";
import { threeItemsOffer,Todayspecial,carouselData } from "../../data";
interface Item {
  id: string;
  name: string;
  price: string;
  link: string;
}


 

 

const discountData: Item[] = [
  { id: '1', name: "Brown Shirt", price: '1000', link: "https://p4-ofp.static.pub/fes/cms/2023/03/28/7dch8vg9lz0tzeg74u3x9paoln4o8z319478.png" },
  { id: '2', name: "Brown Shirt", price: '1000', link: "https://p4-ofp.static.pub/fes/cms/2023/03/28/7dch8vg9lz0tzeg74u3x9paoln4o8z319478.png" },
  { id: '3', name: "Brown Shirt", price: '1000', link: "https://p4-ofp.static.pub/fes/cms/2023/03/28/7dch8vg9lz0tzeg74u3x9paoln4o8z319478.png" },
  { id: '4', name: "Brown Shirt", price: '1000', link: "https://p4-ofp.static.pub/fes/cms/2023/03/28/7dch8vg9lz0tzeg74u3x9paoln4o8z319478.png" },
  { id: '5', name: "Brown Shirt", price: '1000', link: "https://p4-ofp.static.pub/fes/cms/2023/03/28/7dch8vg9lz0tzeg74u3x9paoln4o8z319478.png" },
  { id: '6', name: "Brown Shirt", price: '1000', link: "https://p4-ofp.static.pub/fes/cms/2023/03/28/7dch8vg9lz0tzeg74u3x9paoln4o8z319478.png" },
];

export default function TabOneScreen() {
  const colorScheme = useColorScheme();
  const { width } = Dimensions.get('window');
  const renderItem = ({ item }: { item: string }) => (
    <View style={{alignSelf:"center",borderRadius:12,width:'100%'}}>
      <Image
        source={{ uri: item }}
        style={styles.carouselImage}
      />
    </View>
  );
  // const [fontsLoaded] = useFonts({
  //   'Playpen Sans': 'https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@5500;400;500&display=swap',
  // });
  const [cartItems, setCartItems] = useState(
    [{ categoryid: "0", id: ' ', itemname: " ", price: 0, link: "https://assets-global.website-files.com/5cdcb07b95678db167f2bd86/6340bdfbeb3b663555ee1dca_Best%20receipts%20app%20HERO.png" },]
  );

  const addToCart = async (item:any) => {
    
 
    await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/api/addtocart`,{data:item}).then((res)=>{
     setCartItems(res.data)
     alert("Item added to cart ")
    }).catch((err)=>{
      console.log(err);
    })
   
};
// const refreshCart=async()=>{ await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/getcart`).then((res)=>{
//   setCartItems(res.data)
//  }).catch((err)=>{
//    console.log(err);})
// }
useEffect(  ()=>{

( async()=>{ await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/getcart`).then((res)=>{
  setCartItems(res.data)
 }).catch((err)=>{
   console.log(err);})
}) ()

},[ ])
  return (
    <View style={styles.container}>
       <View style={styles.titleView}>
          <Text style={styles.Mtexts}>U STORE</Text>
        </View>
     <View >
       <View style={[styles.searchContainer,colorScheme==='dark'?{backgroundColor:"white"}:{backgroundColor:"white"}]}>
          <TextInput
            style={ [styles.searchBar,]}
            placeholder="Search for items"
          />
       
        </View>
         
           <FontAwesome
                          name="search"
                          size={33}
                          color={"black"}
                          style={{position:"absolute",alignSelf:"flex-end",top:"25%",right:15,}}
                        />
         
     </View>
        {/* <Items />  */}
        <ScrollView>

        <View  style={{marginLeft:4}}>
        <Carousel
        data={carouselData}
      loop={true}
        renderItem={renderItem}
        sliderWidth={width-9.5} 
        itemWidth={width-8} 
        objectFit={"contain"}
        autoplay={true}
        autoplayInterval={3000}
      
      /></View>
       
{/* //dulara code */}

<View style={styles.headingContainer}>
        <Text style={styles.heading}>Today's Special</Text>
      </View>

      <FlatList
        data={Todayspecial}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.link }}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.itemname}</Text>
          <View style={[{alignSelf:"flex-start",top:50,margin:9,backgroundColor:"#1f1f1f"}]}>
               <Text style={[styles.itemPrice]}>RS.{item.price}</Text>
            
            </View>  
 
        {/* <Link style={{ margin:8,alignSelf:"flex-end", }} href={{ pathname: '/categoryItems', params: { name: 'list.id' } }}><View style={styles.button}><Text style={{  textAlign:"center",color:"black", fontWeight:"700",fontSize:16 }}>Explore</Text></View></Link> */}
       
        
          <Pressable
          style={[styles.button, cartItems.some((cartItem) => cartItem.id === item.id) && styles.disabledButton]}
          onPress={() => {
            addToCart(item);
          }}
          disabled={cartItems.some((cartItem) => cartItem.id === item.id)}
        >
           <View style={[cartItems.some((cartItem) => cartItem.id === item.id)?{backgroundColor:"gray"}:{backgroundColor:"lightblue"},{alignItems:"center"}]}>
            {cartItems.some((cartItem) => cartItem.id === item.id)
              ?(<Text >
                <Text style={[styles.addCart,{backgroundColor:"gray"}]}>Added </Text>
                <FontAwesome
                name="check-circle"
                size={24}
                color="black"
                // style={{ marginRight: 15 }}
              />
              </Text>)
              :  (<Text >
                <Text style={styles.addCart}>Add </Text>
              <FontAwesome
                name="check-circle-o"
                size={24}
                color="darkblue"
                // style={{ margin: 2 }}
              /></Text>)}
           </View>
        </Pressable>
       
    
            </View>
            </View>
        
        )}
      />
      


{/* End dulara code */}


        <View style={styles.Offers}>
         
          <TabThreeScreen offers={offers} width={180} height={150} offerName="Limited Offers"/>
        </View>

{/*   dulara code */}

        <View style={styles.headingContainer}>
        <Text style={styles.heading}>3+ Items for 2000</Text>
      </View>
      <FlatList
        data={threeItemsOffer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.link }}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.itemname}</Text>
            <View style={[{alignSelf:"flex-start",top:50,margin:9,backgroundColor:"#1f1f1f"}]}>
               <Text style={[styles.itemPrice]}>RS.{item.price}</Text>
            
            </View>  
 
        {/* <Link style={{ margin:8,alignSelf:"flex-end", }} href={{ pathname: '/categoryItems', params: { name: 'list.id' } }}><View style={styles.button}><Text style={{  textAlign:"center",color:"black", fontWeight:"700",fontSize:16 }}>Explore</Text></View></Link> */}
       
        
          <Pressable
          style={[styles.button, cartItems.some((cartItem) => cartItem.id === item.id) && styles.disabledButton]}
          onPress={() => {
            addToCart(item);
          }}
          disabled={cartItems.some((cartItem) => cartItem.id === item.id)}
        >
           <View style={[cartItems.some((cartItem) => cartItem.id === item.id)?{backgroundColor:"gray"}:{backgroundColor:"lightblue"},{alignItems:"center"}]}>
            {cartItems.some((cartItem) => cartItem.id === item.id)
              ?(<Text >
                <Text style={[styles.addCart,{backgroundColor:"gray"}]}>Added </Text>
                <FontAwesome
                name="check-circle"
                size={24}
                color="black"
                // style={{ marginRight: 15 }}
              />
              </Text>)
              :  (<Text >
                <Text style={styles.addCart}>Add </Text>
              <FontAwesome
                name="check-circle-o"
                size={24}
                color="darkblue"
                // style={{ margin: 2 }}
              /></Text>)}
           </View>
        </Pressable>
       
    
            </View>
          </View>
        )}
      />
     {/* End dulara code */} 

        <View style={styles.Offers}>
       
          <TabThreeScreen offers={cooking} width={180} height={150}  offerName="Food Offers"/>
        </View>
        <View style={styles.Offers}>
          
          <TabThreeScreen offers={offers} width={135} height={99}  offerName="Ending Soon"/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  disabledButton: {
    backgroundColor: 'gray', // Change this to your preferred disabled button style
    opacity: 0.6, 
    width:99,// Adjust opacity as needed
    // Add other styles to visually indicate a disabled button
  },
  addCart:{    color:"#1f1f1f", fontWeight:"700",fontSize:18 },
  Offers: { 
    margin: 8,
  },
  
  button:{
    borderRadius: 20,
    width:100,
    backgroundColor:"lightblue",
    padding:7.2,
    margin:10,
    alignSelf:"flex-end"
   
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
  },
 
  Mtexts: {
    // color: "white",
    fontSize: 22,
    margin: 8,
    fontWeight:"700"
  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:3,   
  
  }, OffersText: {
    color: "red",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 33,
  },
 
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  searchContainer: {
    // backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 10,
    // position: 'absolute',
    margin: 16,
    // flex:1,
  marginRight:6,
  
    // top: 0,
    // left: 0,
    // right: 0,
    borderRadius:10,
    borderWidth: 1, 
    // borderColor: 'black', 
  },
  searchBar: {
    fontSize: 16,
    

  },
  headingContainer: {
    marginTop: 16,
    // paddingHorizontal: 16,
    alignSelf:"center",
   

  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
  },
  carouselImage: {
    width:  366.2, 
    height:215,
    objectFit:"fill",
    borderRadius:8.8,
    borderColor:'lightblue',
    borderWidth:1.4,
 
    
  },
  discountSection: {
    marginBottom: 16,
  },
  discountItem: {
    width: 325, 
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  discountItemImage: {
    width: 150, 
    height: 150, 
    borderRadius: 5,
  },
  discountItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 5,
    marginBottom: 12,
  },
  itemImage: {
    backgroundColor:"lightblue",
    borderRadius:10,
    width:110,
    height:"auto" ,
    margin:2.9,
    alignSelf:"center",
    objectFit:'cover',
    padding:1
  },
  itemDetails: {
    flex: 1,
    backgroundColor:"#1f1f1f",
  
    borderRadius:12
  },
  itemName: {
    fontSize: 20,
    // fontWeight: 'bold',
    alignSelf:"center",
    marginTop:4,
    fontWeight:'500',
    color:"white",
  },
  itemPrice: {
    fontSize: 18,
    color: 'white',
    // alignSelf:"baseline"
    flexDirection:"row",
    // display:"flex", 
    fontWeight:'500'
    // alignSelf:"flex-end"
  },

});
