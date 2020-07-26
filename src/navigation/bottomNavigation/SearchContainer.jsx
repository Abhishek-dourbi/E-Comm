import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../screens/tabs/search/Search';
import RoutesEnum from '../../utils/RoutesEnum';
import Gradient from '../../component/gradient/Gradient';

const Stack = createStackNavigator();

const SearchContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <Gradient />,
      }}>
      <Stack.Screen name={RoutesEnum.SearchScreen} component={Search} />
    </Stack.Navigator>
  );
};

export default SearchContainer;
