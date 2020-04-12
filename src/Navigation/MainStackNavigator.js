import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerMode: 'float'
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={({ route }) => ({
          title: route.params.item.name
      })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator;

