import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './src/navigation/drawerNavigation/DrawerContainer';
import {navigationRef, isReadyRef} from './src/utils/NavigationService';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GenUtils} from './src/utils/GenUtils';

import Colors from './src/utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';

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
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          Colors.firstBlueGradientColor,
          Colors.secondBlueGradientColor,
          Colors.thirdBlueGradientColor,
        ]}
        style={{height}}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={'transparent'}
        />
      </LinearGradient>
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
