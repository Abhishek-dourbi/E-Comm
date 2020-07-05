import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './src/navigation/drawerNavigation/DrawerContainer';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerContainer />
    </NavigationContainer>
  );
};

export default App;
