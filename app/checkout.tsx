import { Button, Platform, Pressable, ScrollView, StyleSheet,useColorScheme, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MapView ,{Marker ,PROVIDER_GOOGLE  } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

// type props ={
//   id:string
// }
export default function ModalScreen() {
  // const params = useLocalSearchParams();
  // const id = useRouter()
  // console.log(params.name);
  const [CheckOutItems, setCheckOutItems] = useState(
    [{ categoryid: "0", id: ' 111', itemname: "jew", price: 2400.34, link: "https://assets-global.website-files.com/5cdcb07b95678db167f2bd86/6340bdfbeb3b663555ee1dca_Best%20receipts%20app%20HERO.png",quntity:4 },]
  );
   
  
  const [location, setLocation] = useState({"coords": {"accuracy": 10, "altitude": 12.508781433105469, "altitudeAccuracy": 4, "heading": -1, "latitude": 7.238724231726712, "longitude": 79.86116434454905, "speed": 0}, "timestamp": 1693491337999.0625}||{});
  
  const [markerLocation,setMarkerLocation]=useState({"latitude": 7.238724231726712, "longitude": 79.86116434454905})
  const handleMarkerDrag = (event:any) => {
    console.log(event.nativeEvent);
     
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
          setLocation(location);
        if(location){
      setMarkerLocation({"latitude": location.coords.latitude, "longitude": location.coords.longitude})
 }
      } 
   ) ()
   ,

   ( async()=>{ await axios.post("http://192.168.1.4:5000/getcart").then((res)=>{
    setCheckOutItems(res.data)
   }).catch((err)=>{
     console.log(err);})
  }) ()
    
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
        
        {/* Item */}
        {
          CheckOutItems.map((cart,index)=>(
<View>


<View style={styles.inBox} key={index}>
 
  {/* <Card.Cover source={{ uri: cart.link}} style={styles.PicBox} key={index} /> */}
  <Image source={{ uri: cart.link }} style={styles.PicBox} />

  {/* <Text>Name</Text> */}
 


  <View style={styles.secondBox} >
  <Text style={{color:"black",textAlign:"center",fontSize:16,fontWeight:"bold"}}>{cart.itemname}  </Text> 

<View style={{ flexDirection:'row',alignSelf:"stretch",justifyContent:"space-between",backgroundColor:"white",borderRadius:12}}>

<Text  style={{alignSelf:"center",margin:2,color:"black"}}>Rs.{(cart.price*cart.quntity).toFixed(2)}</Text>
<View style={{flexDirection:"row",margin:2,backgroundColor:"white",borderRadius:12}}>
  <Pressable style={styles.button} >
  {({ pressed }) => (
              <FontAwesome
                name="minus"
                 size={16}
                color={"black"}
                style={{  opacity: pressed ? 0.5 : 1 ,alignItems:"center"}}
              />
            )}
   
  
  </Pressable>
  <Text style={{alignSelf:"center",margin:8,color:"black"}}>1</Text>
  <Pressable style={styles.button} >
  {({ pressed }) => (
              <FontAwesome
                name="plus"
                 size={16}
                color={"black"}
                style={{  opacity: pressed ? 0.5 : 1 ,alignItems:"center"}}
              />
            )}
   
  
  </Pressable>

</View>
<Pressable style={{  
// borderRadius:12,
padding:7,
margin:2,
alignSelf:"center",
backgroundColor:"transparent", }} >
  {({ pressed }) => (
              <FontAwesome
                name="trash"
                 size={22}
                color={"black"}
                style={{  opacity: pressed ? 0.5 : 1 ,alignItems:"center",alignSelf:"center"}}
              />
            )}
   
  
  </Pressable>

  </View>
  </View>

</View>








</View>
          ))
        }
         
       {/* Item */}
        
      </ScrollView>
     
      <Button  title='Rest location' onPress={async ()=>{  setMarkerLocation({"latitude": location.coords.latitude, "longitude": location.coords.longitude})}}/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 , 
  },
  button: {
    borderRadius:12,
    padding:7,
    margin:2,
    backgroundColor:"lightblue",
    textAlign:"center", 
  },
  PicBox:{
  backgroundColor:"lightblue",
  borderRadius:10,
  width:105,height:105,margin:2,alignSelf:"center",objectFit:"contain",
  // padding:2,
  



  },inBox:{ 
   
  // backgroundColor:"black",
  borderRadius:8,
    flexDirection:'row',
    margin:9,
    width:"auto",
    padding:4,
},
secondBox:{ 
  flex:1,
  backgroundColor:"#FFFFFF",
borderRadius:12,
  marginLeft:2,
  marginRight:2,
  justifyContent:"space-between",
},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:12,
   
    
  },
   map: {
    width: '98%',
    height: '88%',
    borderRadius:22
  },
  scrollCartView:{
margin:8,
marginLeft:11
  }
});
