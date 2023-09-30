import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


const CheckoutButton = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Checkout"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={() => {
          
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff', // Change the background color as desired
    borderRadius: 10,
    width: 200,
    height: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Change the text color as desired
  },
});

export default CheckoutButton;
