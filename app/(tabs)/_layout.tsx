import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, useColorScheme, Text } from "react-native"; 
import Colors from "../../constants/Colors";
import React, { useState, useRef, useEffect } from "react";  
import axios from "axios";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [count, setCount] = useState(9);
  const cart = useRef(null)
  
 if(cart){
  axios.get(`${process.env.EXPO_PUBLIC_API_URL}/api/cartCount`).then((res)=>{
    setCount(res.data[0]["COUNT(id)"])
  }).catch((err)=>{
    console.log("Error in count of cart")
  })
 }

 useEffect(()=>{

 },[cart])

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Welcome",

          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/checkout" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View style={{ marginRight: 14 }}>
                    <FontAwesome
                      name="shopping-cart"
                      size={34}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                    <View
                  ref={cart}
                      style={{
                        position: "absolute",
                        backgroundColor: "white",
                        borderRadius: 22,
                        width: 24,
                        height: 24,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          color: "red",
                          textAlign: "center",
                          fontSize: 16,
                          fontWeight: "900",
                          margin: 1,
                        }}
                      >
                        {count}
                      </Text>
                    </View>
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="sitemap" color={color} />
          ),
          // headerRight: () => (
          //   <Link href="/categoryItems" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Me",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
