import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from './HomeContainer';
import CartContainer from './CartContainer';
import CategoriesContainer from './CategoriesContainer';
import SearchContainer from './SearchContainer';
import OffersContainer from './OffersContainer';

const Tab = createBottomTabNavigator();

const BottomNavigationContainer = () => {
  const getTabBarVisible = route => {
    const visible = route.state ? route.state.index : 0;
    return !visible;
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
        })}
        name="Home"
        component={HomeContainer}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
        })}
        name="Search"
        component={SearchContainer}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
        })}
        name="Offers"
        component={OffersContainer}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
        })}
        name="Categories"
        component={CategoriesContainer}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisible(route),
        })}
        name="Cart"
        component={CartContainer}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationContainer;
