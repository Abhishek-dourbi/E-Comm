import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Offers from '../../screens/tabs/offers/Offers';
import Gradient from '../../component/gradient/Gradient';

const Stack = createStackNavigator();

const DrawerStackContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <Gradient />,
      }}>
      <Stack.Screen name="OffersScreen" component={Offers} />
    </Stack.Navigator>
  );
};

export default DrawerStackContainer;
