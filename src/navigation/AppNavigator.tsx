import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Login' 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
};

export default AppNavigator;
