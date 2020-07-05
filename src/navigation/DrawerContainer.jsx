import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Offers from '../drawer/Offers';
import BottomNavigationContainer from './bottomNavigation/BottomNavigationContainer';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomNavigationContainer}/>
      <Drawer.Screen name="Offers" component={Offers} />
    </Drawer.Navigator>
  );
};

export default DrawerContainer;
