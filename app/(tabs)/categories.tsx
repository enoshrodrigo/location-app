import { LogBox, ScrollView, StyleSheet,useColorScheme } from 'react-native';
import { Button, Card } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, useThemeColor } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategorieList from '../componments/CategorieList';
import { FontAwesome } from '@expo/vector-icons';

export default function Categories() {
  const theme =useColorScheme();
  return (
    <View style={styles.container}>

      <Text style={styles.title}><FontAwesome
                    name="tags"      
                    size={25}
                    color="white"
                    // color={Colors[colorScheme ?? 'light'].text}
                    style={[{ marginRight: 15},theme==='dark'?{color:"white"}:{color:"black"}]}
                  /> Select your Favorite </Text>
      

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/categories.tsx" /> */}
     
       <View style={styles.catBox}>
       
       
           <ScrollView style={{margin:12,marginBottom:32,}}>
      
      
          
       <CategorieList />
         
  

   
        </ScrollView>
       
       
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // marginTop:18,
  },
  catBox:{
  // backgroundColor:'white',
  marginTop:12,
  
  
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
marginTop:11,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    borderRadius: 12,
  },
 
});
