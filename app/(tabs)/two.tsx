// import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';
import React, { Component, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  useColorScheme
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Svg, { Ellipse } from "react-native-svg";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { color } from 'react-native-elements/dist/helpers';
import axios from 'axios';
export default function TabTwoScreen() {
    const theme = useColorScheme()
  const [count ,setCount]= useState(0)
  const cart = useRef(null) 
 if(cart){
  axios.get(`${process.env.EXPO_PUBLIC_API_URL}/api/cartCount`).then((res)=>{
    setCount(res.data[0]["COUNT(id)"])
  }).catch((err)=>{
    console.log("Error in count of cart")
  })
 }



  return (
    
      <View style={styles.container}>
       
        <ScrollView>
        <View ref={cart}  style={styles.image1StackStackStack}>
          <View style={styles.image1StackStack}>
            <View style={styles.image1Stack}>   
        
              <ImageBackground
                source={require("../../assets/macos-monterey-stock-blue-dark-mode-layers-5k-3440x1440-5895.jpg")}
                resizeMode="contain"
                style={styles.image1}
                imageStyle={styles.image1_imageStyle}
              >
                <View style={styles.icon6Row}>
                  <IoniconsIcon
                    name="ios-close-circle-outline"
                    style={styles.icon6}
                  ></IoniconsIcon>
                  <Text style={styles.myProfile1}>My Profile</Text>
                  <FontAwesomeIcon
                    name="search"
                    style={styles.icon8}
                  ></FontAwesomeIcon>
                  <IoniconsIcon
                    name="md-settings"
                    style={styles.icon7}
                  ></IoniconsIcon>
                </View>
                <View style={styles.ellipse1Stack}>
                  <Svg viewBox="0 0 68.48 68.48" style={styles.ellipse1}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(230, 230, 230,1)"
                      cx={34}
                      cy={34}
                      rx={34}
                      ry={34}
                    ></Ellipse>
                  </Svg>
                  <FontAwesomeIcon
                    name="user"
                    style={styles.icon1}
                  ></FontAwesomeIcon>
                </View>
                <View style={styles.dewmiPerera1StackStack}>
                  <View style={styles.dewmiPerera1Stack}>
                    <Text style={styles.dewmiPerera1}>Dewmi Perera</Text>
                    <ImageBackground
                      style={styles.rect2}
                      imageStyle={styles.rect2_imageStyle}
                      source={require("../../assets/profile/Gradient_gZ15yW2.png")}
                    ></ImageBackground>
                  </View>
                  <Text style={styles.loremIpsum1}>pereradewmi460@gmail.com</Text>
                </View>
                <View style={{width:"auto"}}>
                  <View   style={styles.rect1}>
                    <View style={styles.icon2Row}>
                      <OcticonsIcon name="book" style={styles.icon2}></OcticonsIcon>
                      <EntypoIcon name="shop" style={styles.icon3}></EntypoIcon>
                      <EntypoIcon
                        name="heart-outlined"
                        style={styles.icon4}
                      ></EntypoIcon>
                      <FeatherIcon name="bell" style={styles.icon5}></FeatherIcon>
                    </View>
                    <View style={styles.myOrders1Row}>
                      <Text style={styles.myOrders1}>My Orders</Text>
                      <Text style={styles.sopping1}>Shop   </Text>
                      <Text style={styles.wishList1}>WishList</Text>
                      <Text style={styles.notifications1}>Notifications</Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <Text style={[styles.discount,theme==='dark'?{color:"white"}:{color:"black"}]}>In Cart</Text>
              <Text style={[styles.coins,theme==='dark'?{color:"white"}:{color:"black"}]}>Coins</Text>
              <View style={styles.rect6}></View>
            </View>
            <View style={styles.rect3}>
              <View style={styles.ellipse2StackRow}>
                <View style={styles.ellipse2Stack}>
                  <Svg viewBox="0 0 64.52 63.11" style={styles.ellipse2}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(184,220,246,1)"
                      cx={32}
                      cy={32}
                      rx={32}
                      ry={32}
                    ></Ellipse>
                  </Svg>
                  <EntypoIcon name="shopping-cart" style={styles.icon10}></EntypoIcon>
                </View>
                <Text style={styles.loremIpsum2}>{count}</Text>
              </View>
            </View>
            <View style={styles.rect4}>
              <View style={styles.ellipse3StackRow}>
                <View style={styles.ellipse3Stack}>
                  <Svg viewBox="0 0 64.52 63.11" style={styles.ellipse3}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(184,220,246,1)"
                      cx={32}
                      cy={32}
                      rx={32}
                      ry={32}
                    ></Ellipse>
                  </Svg>
                  <EntypoIcon
                    name="credit"
                    style={styles.icon9}
                  ></EntypoIcon>
                </View>
                <Text style={styles.loremIpsum3}>6</Text>
              </View>
            </View>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              
              > 
              <View>
                {/* <Text >HIoiio</Text> */}
              </View></ScrollView>
            </View>
          </View>
          <View style={styles.rect5Stack}>
            <View style={styles.rect5}>
              <Text style={styles.newMassages}>New Messages</Text>
            </View>
            <Image
              source={require("../../assets/profile/shopping.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
        </View></ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image1: {
      top: -90,
      width: 564,
      height: 473,
      position: "absolute",
      left: 0,
       
      // backgroundColor:"white",
    },
    image1_imageStyle: {},
    icon6: {
      color: "rgba(252,248,248,1)",
      fontSize: 30,
      height: 33,
      width: 24
    },
    myProfile1: {
      // fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 22,
      marginLeft: 107,
      marginTop: 29,
      fontWeight:"800",
    },
    icon8: {
      color: "rgba(239,241,243,1)",
      fontSize: 20,
      height: 20,
      width: 19,
      marginLeft: 71,
      marginTop: 13
    },
    icon7: {
      color: "rgba(246,245,245,1)",
      fontSize: 23,
      height: 26,
      width: 19,
      marginLeft: 14,
      marginTop: 10,
    },
    icon6Row: {
      height: 55,
      flexDirection: "row",
      marginTop: 122,
      marginLeft: 69,
      marginRight: 148,
      
    },
    ellipse1: {
      top: 0,
      left: 0,
      width: 68,
      height: 68,
      position: "absolute"
    },
    icon1: {
      top: 7,
      left: 15,
      position: "absolute",
      color: "rgba(16,49,107,1)",
      fontSize: 55,
      height: 55,
      width: 39
    },
    ellipse1Stack: {
      width: 68,
      height: 68,
      marginTop: 12,
      marginLeft: 211
    },
    dewmiPerera1: {
      // top: 3,
      // left: 86,
      // position: "absolute",
      // fontFamily: "roboto-regular",
      color: "rgba(255,251,251,1)",
      fontSize: 16,
      alignSelf:'center'
    },
    rect2: {
      top: 0,
      left: 0,
      width: 288,
      height: 47,
      position: "absolute",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 60,
      shadowOpacity: 0.61,
      shadowRadius: 20,
      borderRadius: 28,
      overflow: "hidden"
    },
    rect2_imageStyle: {
      opacity: 0.18
    },
    dewmiPerera1Stack: {
      top: 0,
      left: 0,
      width: 288,
      height: 47,
      position: "absolute"
    },
    loremIpsum1: {
      top: 23,
      left: 52,
      position: "absolute",
      // fontFamily: "roboto-regular",
      color: "rgba(255,254,254,1)"
    },
    dewmiPerera1StackStack: {
      width: 288,
      height: 47,
      marginTop: 17,
      marginLeft: 107
    },
    rect1: {
      // textAlign:"center",
      
      width:320,
      height: 85,
      backgroundColor: "rgba(244,248,254,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 60,
      shadowOpacity: 0.69,
      shadowRadius: 20,
      borderRadius: 28,
      marginTop: 17,
      marginLeft: 92
    },
    icon2: {
      color: "rgba(16,49,107,1)",
      fontSize: 36,
      height: 39,
      width: 34,
      marginTop: 2
    },
    icon3: {
      color: "rgba(16,49,107,1)",
      fontSize: 36,
      height: 39,
      width: 36,
      marginLeft: 35
    },
    icon4: {
      color: "rgba(16,49,107,1)",
      fontSize: 36,
      height: 39,
      width: 36,
      marginLeft: 37
    },
    icon5: {
      color: "rgba(16,49,107,1)",
      fontSize: 36,
      height: 36,
      width: 36,
      marginLeft: 38
    },
    icon2Row: {
      height: 41,
      flexDirection: "row",
      marginTop: 12,
      marginLeft: 29,
      marginRight: 28
    },
    myOrders1: {
      // fontFamily: "roboto-700",
      color: "rgba(16,49,107,1)",
      fontSize: 12
    },
    sopping1: {
      // fontFamily: "roboto-700",
      color: "rgba(16,49,107,1)",
      fontSize: 12,
      marginLeft: 24
    },
    wishList1: {
      // fontFamily: "roboto-700",
      color: "rgba(16,49,107,1)",
      fontSize: 12,
      marginLeft: 24
    },
    notifications1: {
      // fontFamily: "roboto-700",
      color: "rgba(16,49,107,1)",
      fontSize: 12,
      marginLeft: 17
    },
    myOrders1Row: {
      height: 14,
      flexDirection: "row",
      marginLeft: 18,
      marginRight: 11,
      
       
    },
    discount: {
      top: 380,
      left: 114,
      position: "absolute",
      // fontFamily: "roboto-regular",
      // color: "white",
      fontSize: 22,
      fontWeight:"800"
    },
    coins: {
      top: 380,
      left: 305,
      position: "absolute",
      // fontFamily: "roboto-regular",
      // color: "white",
      fontSize: 22,
      fontWeight:"800"
    },
    rect6: {
      top: 442,
      left: 59,
      width: 375,
      height: 184,
      position: "absolute",
      backgroundColor: "rgba(2,2,59,1)",
      opacity: 0.06
    },
    image1Stack: {
      top: 0,
      left: 0,
      width: 564,
      height: 626,
      position: "absolute",
      // backgroundColor:"yellow",
    },
    rect3: {
      top: 420,
      left: 88,
      width: 142,
      height: 107,
      position: "absolute",
      backgroundColor: "rgba(235,233,246,1)",
      borderRadius: 20,
      shadowColor: "rgba(27,78,208,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 30,
      shadowOpacity: 0.46,
      shadowRadius: 10,
      flexDirection: "row"
    },
    ellipse2: {
      top: 0,
      left: 0,
      width: 65,
      height: 63,
      position: "absolute",
      opacity: 0.56
    },
    icon10: {
      top: 9,
      left: 12,
      position: "absolute",
      color: "rgba(16,49,107,1)",
      fontSize: 40,
      height: 43,
      width: 40
    },
    ellipse2Stack: {
      width: 65,
      height: 63
    },
    loremIpsum2: {
      // fontFamily: "roboto-700",
      color: "#121212",
      fontSize: 52,
      marginLeft: 10,
      marginTop: 1
    },
    ellipse2StackRow: {
      height: 63,
      flexDirection: "row",
      flex: 1,
      marginRight: 25,
      marginLeft: 12,
      marginTop: 24
    },
    rect4: {
      top: 420,
      left: 263,
      width: 142,
      height: 107,
      position: "absolute",
      backgroundColor: "rgba(235,233,246,1)",
      borderRadius: 20,
      shadowColor: "rgba(27,78,208,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 30,
      shadowOpacity: 0.46,
      shadowRadius: 10,
      flexDirection: "row"
    },
    ellipse3: {
      top: 0,
      left: 0,
      width: 65,
      height: 63,
      position: "absolute",
      opacity: 0.56
    },
    icon9: {
      top: 15,
      left: 11,
      position: "absolute",
      color: "rgba(16,49,107,1)",
      fontSize: 39,
      height: 39,
      width: 39
    },
    ellipse3Stack: {
      width: 65,
      height: 63
    },
    loremIpsum3: {
      // fontFamily: "roboto-700",
      color: "#121212",
      fontSize: 52,
      marginLeft: 10,
      marginTop: 4
    },
    ellipse3StackRow: {
      height: 66,
      flexDirection: "row",
      flex: 1,
      marginRight: 27,
      marginLeft: 10,
      marginTop: 22
    },
    scrollArea: {
      top: 596,
      left: 537,
      width: 55,
      height: 77,
      position: "absolute",
      backgroundColor: "rgba(230, 230, 230,1)"
    },
    scrollArea_contentContainerStyle: {
      height: 77,
      width: 55,
       
    },
    image1StackStack: {
      top: 0,
      left: 0,
      width: 592,
      height: 673,
      position: "absolute",
      // backgroundColor:"red",

    },
    rect5: {
      top: 6,
      left: 0,
      width: 334,
      height: 153,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: 34,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 30,
      shadowOpacity: 0.62,
      shadowRadius: 10
    },
    newMassages: {
      // fontFamily: "roboto-700",
      color: "#121212",
      fontSize: 18,
      marginTop: 22,
      marginLeft: 22
    },
    image2: {
      top: 0,
      left: 214,
      width: 117,
      height: 159,
      position: "absolute"
    },
    rect5Stack: {
      top: 600,
      left: 78,
      width: 334,
      height: 159,
      position: "absolute",
      

    },
    image1StackStackStack: {
      width: 592,
      height: 794,
      marginTop: -17,
      // backgroundColor:"green",
      marginLeft: -59
   
    }
  });
  