import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../../screens/tabs/categories/Categories';

const Stack = createStackNavigator();

const CategoriesContainer = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CategoriesScreen" component={Categories} />
        </Stack.Navigator>
    );
}

export default CategoriesContainer;
