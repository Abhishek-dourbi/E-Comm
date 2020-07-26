import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './src/navigation/drawerNavigation/DrawerContainer';
import {navigationRef, isReadyRef} from './src/utils/NavigationService';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GenUtils} from './src/utils/GenUtils';

import {StatusBar} from 'react-native';
import Gradient from './src/component/gradient/Gradient';

const {width} = GenUtils.getDimension();

EStyleSheet.build({
  $rem: width / 380,
});

const App = () => {
  const height = GenUtils.getStatusBarHeight();

  useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <>
      <Gradient style={{height}}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
      </Gradient>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <DrawerContainer />
      </NavigationContainer>
    </>
  );
};

export default App;
