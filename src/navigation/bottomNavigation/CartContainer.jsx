import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../../screens/tabs/cart/Cart';
import RoutesEnum from '../../utils/RoutesEnum';

const Stack = createStackNavigator();

const CartContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RoutesEnum.CartScreen} component={Cart} />
    </Stack.Navigator>
  );
};

export default CartContainer;
