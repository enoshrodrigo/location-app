import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

type FinalPriceProps = 
 {itemsTotal: number,
  deliveryFee: number,
  discount: number, 
  userLocation:any,
  distance:number,
}

 
const FinalPrice=(props:FinalPriceProps)=> {
    const storeLoction={"latitude": 7.1978727606182265, "longitude": 79.86529458541452};
  
//    console.log(`Distance is ${props.distance}KM`)
     
   
 
  const finalPrice =( props.itemsTotal + props.deliveryFee) - (props.discount);

  return (
    <View style={styles.container}>
      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Items Total: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{props.itemsTotal.toFixed(2)}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Delivery Fee: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{props.deliveryFee.toFixed(2)}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Distance(KM):</Text><Text style={{fontSize: 18,color:"white"}}>{props.distance.toFixed(2)} KM</Text></View>
      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Discount: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{props.deliveryFee.toFixed(2)}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Total Payment: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{finalPrice.toFixed(2)}</Text></View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 16,  
    margin:4,
    
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
   flexDirection:"row",
   justifyContent:"space-between",
    // flex:1,
    borderRadius:4,
    padding:4,
    color:"white",
    // textAlign:"justify",
    backgroundColor:"#111111",
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FinalPrice;
