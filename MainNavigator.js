import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Home from './src/Pages/Home';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import SearchPage from './src/Pages/SearchPage';
import User from './src/Pages/User';
import Review from './src/Pages/Review';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Review"> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="User" component={User} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={SearchPage} options={{ headerShown: false }}/> 
        <Stack.Screen name="Review" component={Review} options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
