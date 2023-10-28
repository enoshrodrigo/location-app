import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, View, Text, TextInput, Button,StyleSheet  ,   Image, SafeAreaView, TouchableOpacity, Dimensions,KeyboardAvoidingView, Platform} from 'react-native';
import React, { useState,} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'Main', // Change this to the name of your main route.
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Implement authentication state and logic
  const [authenticated, setAuthenticated] = useState(false);

  if (!loaded) {
    return null;
  }

  return authenticated ? <MainContent /> : <LoginScreen onLogin={() => setAuthenticated(true)} />;
}

function MainContent() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="checkout" options={{ presentation: 'modal' }} />
        <Stack.Screen name="categoryItems" options={{ presentation: 'modal' }} /> 
        {/* <Stack.Screen name="categoryItems" options={{ presentation: 'modal' }} /> */}

      </Stack>
    </ThemeProvider>
  );
} 

function LoginScreen({ onLogin }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '123' && password === '123') {
       alert("Login Succesfull")
      onLogin(); // Set authentication status to true.
    } else {
      // Display an error message or take appropriate action for failed login.
      alert("Invalid details")
    } 
  };

  return (
   
    <KeyboardAvoidingView
    style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
      
            <Text style={styles.bold}>Welcome!</Text>
            <Text style={styles.instruction}>Please</Text>

            <Text style={[styles.instruction,{marginBottom:8}]}>Log in or sign up to get started.</Text>

          <View style={styles.picBox}>
            <Image
                  source={require("../assets/images/login/load.webp")}
                  style={styles.image}
             />
          </View>
      
            <TextInput
            style={styles.input2}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input2}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
              {/* // Display login and signup buttons with a small space in between */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.loginButton]}
                  onPress={handleLogin}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.buttonSpacer} />
                <TouchableOpacity
                  style={[styles.button, styles.signupButton]}
                  onPress={()=>{alert('Please contact admin to get you login details');}}
                >
                  <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
              </View>
      
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:50,
    // justifyContent: 'center'
    // alignItems: 'center',
  
    backgroundColor: 'white',
  },  input2: {
    width: 300,
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'purple', 
    borderRadius: 12,
    margin:12,
    alignSelf: 'center',

  },
  content: { 
    // alignItems: 'center',
  },
  image: {
    width: window.width * 0.5, // Adjust the desired width
    height: window.width * 0.6,
    // marginBottom: 20,
    alignSelf: 'center',
   
    top:10
  },
  picBox:{
    marginBottom: 20,
    backgroundColor:"#8da4c9",
    boxShadow:1,
    padding:4,
    paddingBottom:0,
    borderColor:"lightblue",
    borderWidth:1,
    borderRadius:12,
    margin:16, 
    
  

  },
  bold: {
    // fontFamily: "Roboto",
    color: "#121212",
    fontSize: 50,
    top:0,
    fontWeight:"700",
    textAlign: "center",
    marginBottom: 0,
  },
  instruction: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    // marginBottom: 20,
    fontFamily:'SpaceMono'
  },
  loggedInText: {
    fontSize: 20,
    color: "#0a0", 
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  marginTop:12,
  // Center buttons vertically
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: 120,
    alignItems: 'center',
    alignSelf: 'center',

  },
  loginButton: {
    backgroundColor: '#051e73',
  

  },
  signupButton: {
    backgroundColor: '#051e73',
    
  
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonSpacer: {
    width: 10, // Adjust the desired space width
  },
  
  splashImage: {
    width: 'auto', // Set the desired width
    height: 'auto', // Set the desired height
  }
})
;

// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { SplashScreen, Stack } from 'expo-router';
// import { useEffect } from 'react';
// import { useColorScheme } from 'react-native';

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     ...FontAwesome.font,
//   });

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return <RootLayoutNav />;
// }

// function RootLayoutNav() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="checkout" options={{ presentation: 'modal' }} />
//         <Stack.Screen name="categoryItems" options={{ presentation: 'modal' }} />

//       </Stack>
//     </ThemeProvider>
//   );
// }
