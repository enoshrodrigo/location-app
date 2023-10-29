import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
 
import { Link, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, View, Text, TextInput, Button,StyleSheet  ,   Image, SafeAreaView, TouchableOpacity, Dimensions,KeyboardAvoidingView, Platform,Alert} from 'react-native';
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
 
  const [Register, setRegister] = useState(false);
 

  if (!loaded) {
    return null;
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
        
              <Text style={styles.bold}>U-Store</Text>
              <Text style={styles.instruction}>Welcome!</Text>
  
              {/* <Text style={[styles.instruction,{marginBottom:8}]}>Log in or sign up to get started.</Text> */}
  
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
                  onPress={()=>setRegister(true)}
  
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
  
function RegisterScreen({ Onreg }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  // const [language, setLanguage] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegistration = () => {
    // You can implement your registration logic here
    console.log('Registration Data:', {
      name,
      email,
      password,
      gender,
      dob,
     
      address,
      phone,
    });

    // Clear input fields
    setName('');
    setEmail('');
    setPassword('');
    setGender('');
    setDob('');
    // setLanguage('');
    setAddress('');
    setPhone('');

    // Show success message
    Alert.alert('Successfully Registered', 'You are now registered!', [{ text: 'OK' }]);
    setRegister(false)
  };

  return (
    
      <KeyboardAvoidingView style={styles2.container}>
      
         
          <Text style={styles2.title}>Register Yourself !!!</Text>
          <TextInput
            style={styles2.input}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <TextInput
            style={styles2.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            style={styles2.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          {/* Add more input fields for gender, dob, language, address, and phone */}
          <TextInput
            style={styles2.input}
            placeholder="Gender"
            onChangeText={(text) => setGender(text)}
            value={gender}
          />
          <TextInput
            style={styles2.input}
            placeholder="Date of Birth"
            onChangeText={(text) => setDob(text)}
            value={dob}
          />
          {/* <TextInput
            style={styles2.input}
            placeholder="Language"
            onChangeText={(text) => setLanguage(text)}
            value={language}
          /> */}
          <TextInput
            style={styles2.input}
            placeholder="Address"
            onChangeText={(text) => setAddress(text)}
            value={address}
          />
          <TextInput
            style={styles2.input}
            placeholder="Phone Number"
            onChangeText={(text) => setPhone(text)}
            value={phone}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles2.button} onPress={handleRegistration}>
            <Text style={styles2.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles2.button} onPress={() => setRegister(false)}>
            <Text style={styles2.buttonText}>Back</Text>
          </TouchableOpacity>
        
        </KeyboardAvoidingView>
       
    
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '99%',
    alignItems: 'center',
    margin: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

return !Register?  authenticated ? <MainContent /> : <LoginScreen onLogin={() => setAuthenticated(true)} />:<RegisterScreen  Onreg={()=>{setRegister(true)}}/>

 
}

function MainContent() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="checkout" options={{ presentation: 'modal' }} />
 
        <Stack.Screen name="categoryItems" options={{ presentation: 'modal' }} /> 
        {/* <Stack.Screen name="RegisterScreen" options={{ presentation: 'modal' }} /> */}

 
      </Stack>
    </ThemeProvider>
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
    height:214
    
  

  },
  bold: {
    // fontFamily: "Roboto",
    color: "#121212",
    fontSize: 50,
    top:0,
    fontWeight:"800",
    textAlign: "center",
    marginBottom: 0,
    fontFamily:'SpaceMono',
    letterSpacing:12,
    alignSelf:"center"

  },
  instruction: {
    fontSize: 24,
    color: "#555",
    textAlign: "center",
    alignSelf:"center",
    // marginBottom: 20,
    // fontFamily:'SpaceMono'
    fontWeight:'600',
    letterSpacing:8
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
 
function LoginScreen({ onLogin }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '123' && password === '123') {
      onLogin(); // Set authentication status to true.
    } else {
      // Display an error message or take appropriate action for failed login.
      alert("Invalid details")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});
 


 

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
