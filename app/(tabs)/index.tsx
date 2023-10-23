import { Platform, ScrollView, StyleSheet, useColorScheme } from "react-native";

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
export default function TabOneScreen() {
  // const [fontsLoaded] = useFonts({
  //   'Playpen Sans': 'https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@5500;400;500&display=swap',
  // });

  return (
    <View style={styles.container}>
     
        <View style={styles.titleView}>
          <Text style={styles.texts}>Hello main branch</Text>
        </View>
        <Items /> 
        <ScrollView>
        <View style={styles.Offers}>
          <Text style={styles.OffersText}>Limited offers</Text>
          <TabThreeScreen offers={offers} />
        </View>

        <View style={styles.Offers}>
          <Text style={styles.OffersText}>Limited offers</Text>
          <TabThreeScreen offers={cooking} />
        </View>
        <View style={styles.Offers}>
          <Text style={styles.OffersText}>Limited offers</Text>
          <TabThreeScreen offers={offers} />
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
  OffersText: {
    color: "red",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 33,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 3,
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  texts: {
    color: "white",
    fontSize: 18,
    margin: 8,
  },
});
