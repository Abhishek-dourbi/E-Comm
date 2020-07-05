import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './src/navigation/drawerNavigation/DrawerContainer';
import {navigationRef, isReadyRef} from './src/utils/NavigationService';

const App = () => {
  useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <DrawerContainer />
    </NavigationContainer>
  );
};

export default App;
