import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import MainStackNavigator from './src/Navigation/MainStackNavigator';
import BottomTabNav from './src/Navigation/BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './src/Screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './src/Context/Context';

const AuthStack = createStackNavigator()

export default function App() {
  const [user, setUser] = useState(null)
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUser('asdf');
      }
    };
  }, []);

  return <AuthContext.Provider value={authContext}>
          <NavigationContainer>
              { user  ? <BottomTabNav />
                      :  <AuthStack.Navigator>
                            <AuthStack.Screen
                            name = "SignIn"
                            component={SignIn}
                            />
                        </AuthStack.Navigator>
              }
            </NavigationContainer>
           </AuthContext.Provider>
}