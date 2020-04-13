import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Home from '../Screens/Messages';
import Profile from '../Screens/Profile';
import Feed from '../Screens/Feed';
import Chat from '../Screens/Chat';

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
      activeColor='white'
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        onPress={() => navigation.navigate('Profile')}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
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