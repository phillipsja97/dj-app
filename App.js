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
import MainStackNavigator from './src/Navigation/MainStackNavigator';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export default function App() {
  return <MainStackNavigator />
}