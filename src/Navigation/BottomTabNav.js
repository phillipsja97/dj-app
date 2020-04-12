import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Feed from '../Screens/Feed';
import Chat from '../Screens/Chat';

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  }
})

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='white'
      style={{ backgroundColor: 'green' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        onPress={() => navigation.navigate('Home')}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon type ="MaterialIcons" name="home" style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        onPress={() => navigation.navigate('Profile')}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon type ="MaterialIcons" name="person" style={styles.icon} />
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
            <Icon type ="Foundation" name="social-instagram" style={styles.icon} />
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
            <Icon type ="MaterialIcons" name="notifications" style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs