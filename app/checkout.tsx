import { Button, Platform, Pressable, ScrollView, StyleSheet,useColorScheme, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MapView ,{Marker ,PROVIDER_GOOGLE  } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import CheckoutButton from './componments/checkoutButton';
import FinalPrice from './componments/finalPrice';
import CheckoutPopup from './componments/CheckoutPopup';
// type props ={
//   id:string
// }


function calculateDistance(lat2:number, lon2:number) {
  // Radius of the Earth in kilometers
  const earthRadius = 6371; // Use 3958.8 for miles
  const lat1=7.1978727606182265;
  const lon1=79.86529458541452;
  //     lat2 = 34.0522; // Latitude of Place 2
  //     lon2 = -118.2437; // Longitude of Place 2
  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (Math.PI * lat1) / 180;
  const lon1Rad = (Math.PI * lon1) / 180;
  const lat2Rad = (Math.PI * lat2) / 180;
  const lon2Rad = (Math.PI * lon2) / 180;

  // Haversine formula
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  // console.log(distance)
  
  return distance;

}

export default function ModalScreen() {

  // const params = useLocalSearchParams();
  // const id = useRouter()
  // console.log(params.name);
 
  const [totalPrice,setTotal]=useState(0);
  const [Distance,setDistance]=useState(0);
  const [isCheckoutPopupVisible, setCheckoutPopupVisible] = useState(false);


  const OrderConfirm = () => {
    
    setCheckoutPopupVisible(true);
  
  };

 const getTotal=async()=>{
     await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/getTotal`).then((res)=>{
     setTotal(res.data.total);
    //  console.log(res.data.total)
     })
 }

  const [CheckOutItems, setCheckOutItems] = useState(
    [{ categoryid: "0", id: ' 111', itemname: "jew", price: 2400.34, link: "https://assets-global.website-files.com/5cdcb07b95678db167f2bd86/6340bdfbeb3b663555ee1dca_Best%20receipts%20app%20HERO.png",quntity:4 },]
  );



   
  
  const [location, setLocation] = useState({"coords": {"accuracy": 0, "altitude": 0, "altitudeAccuracy": 0, "heading": -0, "latitude": 0, "longitude": 0, "speed": 0}, "timestamp": 0}||{});
  
  const [markerLocation,setMarkerLocation]=useState({"latitude":7.1978727606182265, "longitude":  79.86529458541452})
  const handleMarkerDrag = (event:any) => {
    // console.log(event.nativeEvent);
    setMarkerLocation(event.nativeEvent.coordinate)
    setDistance(calculateDistance(event.nativeEvent.coordinate.latitude,event.nativeEvent.coordinate.longitude))

    
   
  }; 
  
   async function deleteCart(ids:string){
    
    await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/delete`,{id:ids}).then((res)=>{
      alert("Item deleted succesfully");
       getTotal();
    ( async()=>{ await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/getcart`).then((res)=>{
      setCheckOutItems(res.data)
     }).catch((err)=>{
       console.log(err);})
    }) ()
   }).catch((err)=>{
     console.log(err);})
  }

  async function quntity(id:string,quntity:number,plusOrMinus:string) {
    plusOrMinus==="+"?quntity++:quntity--;
      
      if(quntity>5){
        return  alert("Maximum quntity reached");
          
      }
      if(quntity<1){
        return  alert("Minimum quntity reached");
      
      } 
    await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/quntity`,{id:id,quntity:quntity}).then((res)=>{
      // alert("Item deleted succesfully");
        getTotal();
      ( async()=>{ await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/getcart`).then((res)=>{
        
        setCheckOutItems(res.data)
       }).catch((err)=>{
         console.log(err);})
      }) ()
    })
  
 }
  

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
      console.log(`${location.coords.latitude}  ${location.coords.longitude}`);
      setDistance(calculateDistance(location.coords.latitude,location.coords.longitude))
 }
      } 
   ) ()
   ,

   ( async()=>{ await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/getcart`).then((res)=>{
    getTotal();
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
          // followsUserLocation={true}
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
  <Pressable style={styles.button} 
  onPress={()=>quntity(cart.id,cart.quntity,"-")}
  >
  {({ pressed }) => (
              <FontAwesome
                name="minus"
                 size={16}
                color={"black"}
                style={{  opacity: pressed ? 0.5 : 1 ,alignItems:"center"}}
              />
            )}
   
  
  </Pressable>
  <Text style={{alignSelf:"center",margin:8,color:"black"}}>{cart.quntity}</Text>
  <Pressable style={styles.button} 
  onPress={()=>quntity(cart.id,cart.quntity,"+")}
  
  >
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
<Pressable 
onPress={()=>{deleteCart(cart.id)}}
style={{  
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
       <FinalPrice itemsTotal={totalPrice}   discount={10} userLocation={markerLocation} distance={Distance} />
 
        <CheckoutButton  onPress={OrderConfirm}/>
        <CheckoutPopup
        isVisible={isCheckoutPopupVisible}
        onClose={() => setCheckoutPopupVisible(false)}
      />
 
        
      </ScrollView>
     
      <Button  title='Rest location' onPress={async ()=>{  setMarkerLocation({"latitude": location.coords.latitude, "longitude": location.coords.longitude}); setDistance(calculateDistance(location.coords.latitude,location.coords.longitude))}}/>
      

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
