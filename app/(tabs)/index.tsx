import { Platform, ScrollView, StyleSheet, useColorScheme , FlatList,  } from "react-native";
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
import { color } from "framer-motion";
import { FontAwesome } from "@expo/vector-icons";
interface Item {
  id: string;
  name: string;
  price: string;
  link: string;
}


const data: Item[] = [
  { id: '1', name: "Brown Shirt", price: '1000', link: "https://ae01.alicdn.com/kf/S9427cf6b55f14f99a4c04dbefc8a5c76g.jpg_640x640Q90.jpg_.webp" },
  { id: '2', name: "Brown Shirt", price: '1000', link: "https://ae01.alicdn.com/kf/S9427cf6b55f14f99a4c04dbefc8a5c76g.jpg_640x640Q90.jpg_.webp" },
  { id: '3', name: "Brown Shirt", price: '1000', link: "https://ae01.alicdn.com/kf/S9427cf6b55f14f99a4c04dbefc8a5c76g.jpg_640x640Q90.jpg_.webp" },
  { id: '4', name: "Brown Shirt", price: '1000', link: "https://ae01.alicdn.com/kf/S9427cf6b55f14f99a4c04dbefc8a5c76g.jpg_640x640Q90.jpg_.webp" },
  { id: '5', name: "Brown Shirt", price: '1000', link: "https://ae01.alicdn.com/kf/S9427cf6b55f14f99a4c04dbefc8a5c76g.jpg_640x640Q90.jpg_.webp" },
  { id: '6', name: "Brown Shirt", price: '1000', link: "https://ae01.alicdn.com/kf/S9427cf6b55f14f99a4c04dbefc8a5c76g.jpg_640x640Q90.jpg_.webp" },

];

const data2: Item[] = [
  { id: '1', name: "Brown Shirt", price: '1000', link: "https://www.adorainteriors.com/wp-content/uploads/2021/08/2-1.png" },
  { id: '2', name: "Brown Shirt", price: '1000', link: "https://www.adorainteriors.com/wp-content/uploads/2021/08/2-1.png" },
  { id: '3', name: "Brown Shirt", price: '1000', link: "https://www.adorainteriors.com/wp-content/uploads/2021/08/2-1.png" },
  { id: '4', name: "Brown Shirt", price: '1000', link: "https://www.adorainteriors.com/wp-content/uploads/2021/08/2-1.png" },
  { id: '5', name: "Brown Shirt", price: '1000', link: "https://www.adorainteriors.com/wp-content/uploads/2021/08/2-1.png" },
  { id: '6', name: "Brown Shirt", price: '1000', link: "https://www.adorainteriors.com/wp-content/uploads/2021/08/2-1.png" },

];

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
  const carouselData = [
    'https://www.thesunglassfix.com.au/image/cache/MANUFACTURER%20PHOTOS%202020/SUNGLASS-HUT-replacement-sunglass-lenses-690x447.png',
    'https://pagebuilder.webshopworks.com/202-medium_default/wooden-chair.jpg',
    'https://static.vecteezy.com/system/resources/previews/021/054/428/original/3d-wooden-bookshelf-png.png',
  ];
  const renderItem = ({ item }: { item: string }) => (
    <View style={{backgroundColor:"white",margin:2,padding:9, alignSelf:"center",borderRadius:12}}>
      <Image
        source={{ uri: item }}
        style={styles.carouselImage}
      />
    </View>
  );
  // const [fontsLoaded] = useFonts({
  //   'Playpen Sans': 'https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@5500;400;500&display=swap',
  // });

  return (
    <View style={styles.container}>
       <View style={styles.titleView}>
          <Text style={styles.Mtexts}>The Shooping</Text>
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

        <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={360} 
        itemWidth={320} 
        autoplay={true}
        autoplayInterval={5000} // 5 seconds
      />
{/* //dulara code */}

<View style={styles.headingContainer}>
        <Text style={styles.heading}>Today's Special</Text>
      </View>

      <FlatList
        data={data2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.link }}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />
      
{/* End dulara code */}
        <View style={styles.Offers}>
         
          <TabThreeScreen offers={offers} width={180} height={150} offerName="Limited Offers"/>
        </View>




        <View style={styles.Offers}>
       
          <TabThreeScreen offers={cooking} width={180} height={150}  offerName="Cooking Offer"/>
        </View>
        <View style={styles.Offers}>
          
          <TabThreeScreen offers={offers} width={135} height={99}  offerName="End Soon"/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Offers: {
    margin: 8,
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
    width: 300, 
    height: 200, 
    
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
    padding: 10,
    borderRadius: 5,
    marginBottom: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    backgroundColor:"black",

    borderRadius:12
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:"center",
    marginTop:4
  },
  itemPrice: {
    fontSize: 16,
    color: 'white',
    // alignSelf:"baseline"
  },

});
