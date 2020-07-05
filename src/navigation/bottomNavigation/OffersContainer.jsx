import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Offers from '../../tabs/offers/Offers';

const Stack = createStackNavigator();

const OffersContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OffersScreen" component={Offers} />
        </Stack.Navigator>
    );
}

export default OffersContainer;
