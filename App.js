// import React, { Component } from 'react';
// import { ImageBackground, View, Text, StyleSheet, Image, Alert } from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button, Icon } from 'native-base';
// import Navigator from './routes/Homestack.js';


// export default function App() {
//     return (
//       <Navigator />
//     );
//   }

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Homescreen';
import Profile from './Profile';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

