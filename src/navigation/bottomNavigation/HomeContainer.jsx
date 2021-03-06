import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../screens/tabs/home/Dashboard/Dashboard';
import ItemList from '../../screens/tabs/home/ItemList/ItemList';
import RoutesEnum from '../../utils/RoutesEnum';
import Gradient from '../../component/gradient/Gradient';

const Stack = createStackNavigator();

const HomeContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <Gradient />,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={RoutesEnum.Dashboard}
        component={Dashboard}
      />
      <Stack.Screen name={RoutesEnum.ItemList} component={ItemList} />
    </Stack.Navigator>
  );
};

export default HomeContainer;
