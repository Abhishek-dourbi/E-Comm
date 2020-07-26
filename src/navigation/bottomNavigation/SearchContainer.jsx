import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../screens/tabs/search/Search';
import RoutesEnum from '../../utils/RoutesEnum';

const Stack = createStackNavigator();

const SearchContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RoutesEnum.SearchScreen} component={Search} />
    </Stack.Navigator>
  );
};

export default SearchContainer;
