import React from 'react';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// STACKS
import Main from '../components/Main'
import Login from '../components/Login'
import Home from '../components/Home'
import PoliceStation from '../components/PoliceStation'
import Register from '../components/Register/Register'

const useNavigation = () => {

  // CREATE STACK COMPONENT
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="PoliceStation" component={PoliceStation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default useNavigation;
