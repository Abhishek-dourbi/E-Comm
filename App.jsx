import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './src/navigation/drawerNavigation/DrawerContainer';
import {navigationRef, isReadyRef} from './src/utils/NavigationService';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GenUtils} from './src/utils/GenUtils';

const {width} = GenUtils.getDimension();

EStyleSheet.build({
  $rem: width / 380,
});

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
