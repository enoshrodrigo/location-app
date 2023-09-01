import { Platform, ScrollView, StyleSheet,useColorScheme  } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MapView ,{Marker ,PROVIDER_GOOGLE  } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function TabOneScreen() {
  
   
  return (
    <View style={styles.container}>
   
      <ScrollView>
        <Text style={styles.texts}>Hello Enosh</Text>
    
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:3,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  texts:{
    color:'white',
    fontSize:18,
    margin:8
  }
  
});