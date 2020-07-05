import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigationContainer from '../bottomNavigation/BottomNavigationContainer';
import DrawerStackContainer from './DrawerStackContainer';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomNavigationContainer} />
      <Drawer.Screen name="Offers" component={DrawerStackContainer} />
    </Drawer.Navigator>
  );
};

export default DrawerContainer;
