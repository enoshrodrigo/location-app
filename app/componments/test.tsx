// import { StyleSheet } from 'react-native';

import EditScreenInfo from "../../components/EditScreenInfo";
// import { Text, View } from '../../components/Themed';
import React, { Component, useEffect, useRef, useState } from "react";
import { categoriesNamesData, cooking, Items, offers } from "../../data";
import { StyleSheet, View, ScrollView,Text } from "react-native";

import Carousel,{Pagination} from "react-native-snap-carousel";
import OfferCard from "./card";
import axios from "axios";
type prop = {
  offers: [],
  offerName:string,
  width:number,
  height:number,
};
export default function TabThreeScreen(lists: prop) {
  const [dot,setDot]=useState(0)
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrapContainer}>
          <Text style={styles.offerName}>
            {lists.offerName}
          </Text>
          <View style={{ alignSelf:"center", backgroundColor:"transparent",}}>
              <Pagination
              dotsLength={lists.offers.length}
              dotColor="red"
              activeDotIndex={dot}
              inactiveDotColor="red"
              dotStyle={{
                width: 12,
                height: 12,
                borderRadius: 12,
                marginHorizontal: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
                        }}
                        
                        
                        />
            </View>
          <View style={styles.blockContainer}>
            <Carousel
              containerCustomStyle={{ overflow: "visible" }}
              data={lists.offers ? lists.offers : cooking}
              renderItem={(Data: any) => (
                 <OfferCard
                  id={Data.item.categoryid}
                  name={Data.item.itemname}
                  link={Data.item.link}
                  price={Data.item.price}
                  width={lists.width}
                  height={lists.height}

                />
              )}
              // activeDotIndex={1}
              // renderItem={(Data:any)=> <OfferCard   id={Data.item.items[0].id} name={Data.item.items[0].itemname} link={Data.item.items[0].link} />}
              firstItem={0}
              loop={true}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.75}
              sliderWidth={lists.width+(lists.width*0.5)}
              itemWidth={lists.width+(lists.width*0.085)}
              slideStyle={{ display: "flex", alignItems: "center" }}
              onSnapToItem={(index:number) =>  setDot(index)}
            />
         
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    margin:2,
    
  },
blockContainer:{
  alignSelf: "center", 
  margin:0 
 
    
},
wrapContainer:{
  backgroundColor:"white",
  borderRadius:8,

},
offerName:{
  
    color: "#2F2F2F",
    fontWeight: "900",
    textAlign: "center",
    fontSize: 20,
    
    marginTop:8
  
},
});
