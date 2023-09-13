import { Button, Platform, ScrollView, StyleSheet,useColorScheme  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MapView ,{Marker ,PROVIDER_GOOGLE  } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useLocalSearchParams, useRouter } from 'expo-router';

// type props ={
//   id:string
// }
export default function ModalScreen() {
  const params = useLocalSearchParams();
  const id = useRouter()
  console.log(params.name);
  
  const [location, setLocation] = useState({"coords": {"accuracy": 10, "altitude": 12.508781433105469, "altitudeAccuracy": 4, "heading": -1, "latitude": 7.238724231726712, "longitude": 79.86116434454905, "speed": 0}, "timestamp": 1693491337999.0625}||{});
  
  const [markerLocation,setMarkerLocation]=useState({"latitude": 7.238724231726712, "longitude": 79.86116434454905})
  const handleMarkerDrag = (event:any) => {
    console.log(event.nativeEvent);
    // setLocation({"coords":{"latitude":event.nativeEvent.coordinate.latitude,"longitude":event.nativeEvent.coordinate.latitude}})
    // setLocation(event.nativeEvent.coordinate);
    setMarkerLocation(event.nativeEvent.coordinate)
   
  }; 
  
   
  useEffect(()=>{
   (

   async()=>{
        const {status}= await Location.requestForegroundPermissionsAsync();
        if(status!=='granted'){
          return false
        }
        const location:any = await Location.getCurrentPositionAsync({});
      //  console.log(location);
        await setLocation(location);
        if(location){
      setMarkerLocation({"latitude": location.coords.latitude, "longitude": location.coords.longitude})
 }
      } 
   ) ()
    
  },[])

 
   
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check out</Text>
    
    <ScrollView>
        <View style={{ height: 266, margin: 3,marginLeft:6,marginRight:6 }}>
          <MapView
          focusable={true}
          showsUserLocation={true}
          followsUserLocation={true}
            // provider={PROVIDER_GOOGLE}
            style={styles.map}
        
          >
            <Marker 
           
              draggable
              coordinate={{"longitude":markerLocation.longitude,"latitude":markerLocation.latitude}}
              onDragEnd={handleMarkerDrag}
            />
          </MapView>
        </View> 
    
      <View style={styles.scrollCartView}>
        <Text>The cart will appear here</Text>
        <Text>The longitude is : {markerLocation.longitude}</Text>
        <Text>The latitude is : {markerLocation.latitude}</Text>
        <Text>The to</Text>
        <Text>The to</Text>

        </View>
      
      </ScrollView>
     
      <Button title='Rest location' onPress={async ()=>{  setMarkerLocation({"latitude": location.coords.latitude, "longitude": location.coords.longitude})}}/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
   
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:12,
   
    
  },
   map: {
    width: '99%',
    height: '99%',
    borderRadius:22
  },
  scrollCartView:{
margin:8,
marginLeft:11
  }
});
