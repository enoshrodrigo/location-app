import React from 'react'
import { Platform, ScrollView, StyleSheet,useColorScheme  } from 'react-native';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function Items()  {
  return (

   <View style={styles.inBox}>
    <Text style={styles.box} >Hello</Text>
    <Text  style={styles.box}>Hello</Text> 
   </View>
 
  )
}


const styles = StyleSheet.create({
inBox:{ 
    display:'flex',
    // justifyContent:'space-evenly',
    flexDirection:'row'
},
box:{
    borderRadius:11,
    backgroundColor:'green', 
    padding:8,
    margin:8,
}
});