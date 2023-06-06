import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, StyleSheet } from 'react-native';
import pexelsLogo from './assets/Pexels.png';

const stack = createNativeStackNavigator()

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='HomeScreen' 
          options={{
            headerLeft: () => <Image source={pexelsLogo} style={styles.logo} />,
            headerRight: () => (
              <Text
                style={{ color: 'white', fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}</Text>
            ),
            title: "Pexels App",
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: '#0D0D0D'
            },
            
          }}
          >
          {(props) => <HomeScreen {...props} openSearch={openSearch}/>}
          
        </stack.Screen>
        <stack.Screen name='ImageScreen' component={ImageScreen} />
      </stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5,
  }

})
