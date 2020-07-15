import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from './HomeContainer';
import CartContainer from './CartContainer';
import CategoriesContainer from './CategoriesContainer';
import SearchContainer from './SearchContainer';
import OffersContainer from './OffersContainer';
import bottomNavigationOptions from './BottomNavigationOptions';

const Tab = createBottomTabNavigator();

const BottomNavigationContainer = () => {
  return (
    <Tab.Navigator screenOptions={options => bottomNavigationOptions(options)}>
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Search" component={SearchContainer} />
      <Tab.Screen name="Offers" component={OffersContainer} />
      <Tab.Screen name="Categories" component={CategoriesContainer} />
      <Tab.Screen name="Cart" component={CartContainer} />
    </Tab.Navigator>
  );
};

export default BottomNavigationContainer;
