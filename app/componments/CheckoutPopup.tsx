import React, { useState, useEffect } from 'react';
import { View, Text,  TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import { images } from '../../data';
import { Image } from 'react-native-elements';
type prop={
    isVisible:boolean,
    onClose:()=>void;
}
const CheckoutPopup = ( prop:prop) => {
  const [modalVisible, setModalVisible] = useState(prop.isVisible);

  useEffect(() => {
    setModalVisible(prop.isVisible);
  }, [prop.isVisible]);

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={prop.onClose}
      backdropOpacity={0.5}
      style={styles.modalContainer}
      onModalHide={() => setModalVisible(false)}
    >
      <Animatable.View animation="zoomIn" style={styles.modalContent}>
        <Text style={styles.modalText}>Checkout Completed</Text>
        {
            images.map((data,index)=>(
                <Image source={{ uri: data.checkout }} style={styles.PicBox} />

            ))
        }
        <View></View>
        <TouchableOpacity onPress={prop.onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </Animatable.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    PicBox:{
        backgroundColor:"lightblue",
        borderRadius:10,
        width:120,height:102,margin:2,alignSelf:"center", 
        // padding:2,
        
      
      
      
        },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CheckoutPopup;
