import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurvedTabs from './CurvedTabs';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={CurvedTabs} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
