import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from './HomeContainer';
import CartContainer from './CartContainer';
import CategoriesContainer from './CategoriesContainer';
import SearchContainer from './SearchContainer';
import OffersContainer from './OffersContainer';
import bottomNavigationOptions from './BottomNavigationOptions';
import RoutesEnum from '../../utils/RoutesEnum';

const Tab = createBottomTabNavigator();

const BottomNavigationContainer = () => {
  return (
    <Tab.Navigator screenOptions={options => bottomNavigationOptions(options)}>
      <Tab.Screen name={RoutesEnum.HomeTab} component={HomeContainer} />
      <Tab.Screen name={RoutesEnum.SearchTab} component={SearchContainer} />
      <Tab.Screen name={RoutesEnum.OffersTab} component={OffersContainer} />
      <Tab.Screen name={RoutesEnum.CategoriesTab} component={CategoriesContainer} />
      <Tab.Screen name={RoutesEnum.CartTab} component={CartContainer} />
    </Tab.Navigator>
  );
};

export default BottomNavigationContainer;
