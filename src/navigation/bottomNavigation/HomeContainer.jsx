import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../screens/tabs/home/Dashboard';

const Stack = createStackNavigator();

const HomeContainer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default HomeContainer;
