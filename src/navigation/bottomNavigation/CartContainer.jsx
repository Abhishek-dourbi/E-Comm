import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../../tabs/cart/Cart';

const Stack = createStackNavigator();

const CartContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartScreen" component={Cart} />
        </Stack.Navigator>
    );
}

export default CartContainer;
