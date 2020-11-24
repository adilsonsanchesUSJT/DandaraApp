import React from 'react';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// STACKS
import Main from '../components/Main'
import Login from '../components/Login'
import Home from '../components/Home'

const useNavigation = () => {

  // CREATE STACK COMPONENT
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Home} />
      </Stack.Navigator>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default useNavigation;
