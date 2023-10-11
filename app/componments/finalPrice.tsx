import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

type FinalPriceProps = 
 {itemsTotal: number, 
  discount: number, 
  userLocation:any,
  distance:number,
}

 
const FinalPrice=(props:FinalPriceProps)=> {
    // const storeLoction={"latitude": 7.1978727606182265, "longitude": 79.86529458541452};
    const accpectDistance=20;

  const discount=props.itemsTotal*(props.distance/100); 
  const delevery=10;
 const finalPrice =( props.itemsTotal +30) - (discount);
  return (
    <View style={styles.container}>
      
      {
        props.distance<accpectDistance?
        <View>
          <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Items Total: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{props.itemsTotal.toLocaleString('en-US', { maximumFractionDigits: 2 })}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Delivery Fee: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{props.itemsTotal.toLocaleString('en-US', { maximumFractionDigits: 2 })}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Distance(KM):</Text>
        <Text style={{fontSize: 18,color:"white"}}>{props.distance.toFixed(2)} KM</Text>
        </View>

        <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Discount: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{discount.toLocaleString('en-US', { maximumFractionDigits: 2 })}</Text></View>
        <View style={{
    marginBottom: 1,
   flexDirection:"row", 
    padding:1,alignSelf:"flex-end"
     }}><Text style={{color:"red"}}>Rs.</Text><Text style={{fontSize: 16,color:"red",textDecorationLine:"line-through"}}>{props.itemsTotal.toLocaleString('en-US', { maximumFractionDigits: 2 })}</Text></View>

      <View style={styles.label}><Text style={{fontSize: 18,color:"white"}}>Total Payment: </Text><Text style={{fontSize: 18,color:"white"}}>Rs.{finalPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}</Text>
      </View>
      <Text style={{fontSize: 12,color:"red",alignSelf:"flex-end"}}>You Saved Rs.{discount.toLocaleString('en-US', { maximumFractionDigits: 2 })} </Text>
      </View>
        :<Text style={{fontSize: 18,color:"red"}}>(Offer not valid)select only in {accpectDistance}KM</Text>
      }
      
      
      
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
