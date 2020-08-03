import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from '../../screens/tabs/categories/Categories';
import RoutesEnum from '../../utils/RoutesEnum';
import Gradient from '../../component/gradient/Gradient';
import ItemList from '../../screens/tabs/home/ItemList/ItemList';

const Stack = createStackNavigator();

const CategoriesContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <Gradient />,
      }}>
      <Stack.Screen name={RoutesEnum.CategoriesScreen} component={Categories} />
      <Stack.Screen name={RoutesEnum.ItemList} component={ItemList} />
    </Stack.Navigator>
  );
};

export default CategoriesContainer;
