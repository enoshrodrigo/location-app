import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type FinalPriceProps = 
 {total: number,
  deliveryFee: number,
  discount: number,}


const FinalPrice=(props:FinalPriceProps)=> {
  // Calculate the final price
  const finalPrice = props.total + props.deliveryFee - props.discount;

  return (
    <View style={styles.container}>
      <View style={styles.label}><Text style={{fontSize: 16,}}>Items Total: </Text><Text style={{fontSize: 16,}}>Rs{props.deliveryFee.toFixed(2)}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 16,}}>Delivery Fee: </Text><Text style={{fontSize: 16,}}>Rs{props.deliveryFee.toFixed(2)}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 16,}}>Distance:</Text><Text style={{fontSize: 16,}}>Rs{props.deliveryFee.toFixed(2)}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 16,}}>Discount: </Text><Text style={{fontSize: 16,}}>Rs{props.deliveryFee.toFixed(2)}</Text></View>
      <View style={styles.label}><Text style={{fontSize: 16,}}>Total Payment: </Text><Text style={{fontSize: 16,}}>Rs{props.deliveryFee.toFixed(2)}</Text></View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 16,  
    
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
   flexDirection:"row",
   justifyContent:"space-between"
    // flex:1,
    // backgroundColor:"black"
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FinalPrice;
