import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurvedTabs from './CurvedTabs';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import OnboardScreen from '../screens/splash/OnboardingScreen';
import IntroScreen from '../screens/splash/IntroScreen';
import StartScreen from '../screens/splash/StartScreen';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={CurvedTabs} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
