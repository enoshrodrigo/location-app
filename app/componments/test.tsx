// import { StyleSheet } from 'react-native';

import EditScreenInfo from "../../components/EditScreenInfo";
// import { Text, View } from '../../components/Themed';
import React, { Component, useEffect, useRef, useState } from "react";
import { categoriesNamesData, cooking, Items, offers } from "../../data";
import { StyleSheet, View, ScrollView } from "react-native";

import Carousel from "react-native-snap-carousel";
import OfferCard from "./card";
import axios from "axios";
type prop = {
  offers: Object;
};
export default function TabThreeScreen(lists: prop) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignSelf: "center" }}>
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={lists.offers ? lists.offers : cooking}
            renderItem={(Data: any) => (
              <OfferCard
                id={Data.item.categoryid}
                name={Data.item.itemname}
                link={Data.item.link}
                price={Data.item.price}
              />
            )}
            // renderItem={(Data:any)=> <OfferCard   id={Data.item.items[0].id} name={Data.item.items[0].itemname} link={Data.item.items[0].link} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={200}
            itemWidth={200 * 0.63}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
