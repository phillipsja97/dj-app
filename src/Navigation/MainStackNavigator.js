import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, Icon } from 'native-base';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Feed from '../Screens/Feed';
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
        headerMode: 'float',
      }}
      >
        <Stack.Screen
        name="Home"
        component={Home}
        />
        <Stack.Screen name="Feed"
        component={Feed} 
        options={({ navigation }) => ({
          title: 'Social',
          headerRight: () => (
            <Button transparent
            onPress={() => navigation.navigate('Home')}
            >
            <Icon name='home' style={styles.button}/>
          </Button>
          ),
        })}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={({ navigation, route }) => ({
            title: route.params.item.name,
            headerRight: () => (
              <Button transparent
              onPress={() => navigation.navigate('Home')}
              >
              <Icon name='home' style={styles.button}/>
            </Button>
            ),
          })}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  }
})

export default MainStackNavigator;

