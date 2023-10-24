// import { StyleSheet } from 'react-native';

import EditScreenInfo from "../../components/EditScreenInfo";
// import { Text, View } from '../../components/Themed';
import React, { Component, useEffect, useRef, useState } from "react";
import { categoriesNamesData, cooking, Items, offers } from "../../data";
import { StyleSheet, View, ScrollView,SafeAreaView } from "react-native";
 
import Carousel from "react-native-snap-carousel";
 
import axios from "axios";
type prop = {
  offers: Object;
};
export default function TabThreeScreen(lists: prop) {
  return (
    <View style={styles.container}>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
