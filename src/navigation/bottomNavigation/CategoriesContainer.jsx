import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from '../../screens/tabs/categories/Categories';
import RoutesEnum from '../../utils/RoutesEnum';

const Stack = createStackNavigator();

const CategoriesContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RoutesEnum.CategoriesScreen} component={Categories} />
    </Stack.Navigator>
  );
};

export default CategoriesContainer;
