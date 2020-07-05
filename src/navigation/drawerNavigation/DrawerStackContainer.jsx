import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Offers from '../../screens/drawer/Offers';

const Stack = createStackNavigator();

const DrawerStackContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OffersScreen" component={Offers} />
    </Stack.Navigator>
  );
};

export default DrawerStackContainer;
