import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Offers from '../../screens/tabs/offers/Offers';
import RoutesEnum from '../../utils/RoutesEnum';
import Gradient from '../../component/gradient/Gradient';

const Stack = createStackNavigator();

const OffersContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <Gradient />,
      }}>
      <Stack.Screen name={RoutesEnum.SearchScreen} component={Offers} />
    </Stack.Navigator>
  );
};

export default OffersContainer;
