import * as React from 'react';
import { View, Text } from 'react-native';
import MainStackNavigator from './src/Navigation/MainStackNavigator';
import BottomTabNav from './src/Navigation/BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return <NavigationContainer>
            <BottomTabNav />
         </NavigationContainer>
}