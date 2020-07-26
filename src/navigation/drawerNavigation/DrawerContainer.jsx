import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigationContainer from '../bottomNavigation/BottomNavigationContainer';
import DrawerStackContainer from './DrawerStackContainer';
import DrawerComponent from '../../screens/drawer/DrawerComponent/DrawerComponent';
import RoutesEnum from '../../utils/RoutesEnum';

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name={RoutesEnum.Home} component={BottomNavigationContainer} />
      <Drawer.Screen name={RoutesEnum.Drawer} component={DrawerStackContainer} />
    </Drawer.Navigator>
  );
};

export default DrawerContainer;
