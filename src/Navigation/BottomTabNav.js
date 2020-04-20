import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Home from '../Screens/Messages';
import Profile from '../Screens/Profile';
import Feed from '../Screens/Feed';
import Chat from '../Screens/Chat';
import Venue from '../Screens/Venues'

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  header: {
    backgroundColor: '#000000',
  }
})

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeBackgroundColor: '#000000',
        inactiveBackgroundColor: '#000000',
        activeTintColor: 'black'
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        onPress={() => navigation.navigate('Profile')}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon type ="MaterialIcons" name="person" color={color} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        onPress={() => navigation.navigate('Feed')}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <Icon type ="Foundation" name="social-instagram" color={color} style={styles.icon} />
            ),
          }}
      />
        <Tab.Screen
        name="Chat"
        component={Chat}
        onPress={() => navigation.navigate('Chat')}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon type ="MaterialIcons" name="notifications" color={color} style={styles.icon} />
          ),
        }}
      />
       <Tab.Screen
        name="Venues"
        component={Venue}
        onPress={() => navigation.navigate('Venues')}
        options={{
          tabBarLabel: 'Venues',
          tabBarIcon: ({ color }) => (
            <Icon type ="Ionicons" name="ios-business" color={color} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs