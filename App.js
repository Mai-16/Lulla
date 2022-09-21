import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import LoginScreen from './src/screens/Login';
import OnBoardingScreen from './src/screens/OnBoarding';
import SignupScreen from './src/screens/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='onboarding' component={OnBoardingScreen} />
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='signup' component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

