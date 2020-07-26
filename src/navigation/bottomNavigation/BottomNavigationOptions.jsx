import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import RoutesEnum from '../../utils/RoutesEnum';

const tabBarIcon = ({focused, color, size}, route, navigation) => {
  switch (route.name) {
    case RoutesEnum.HomeTab:
      return <FontAwesome name="home" size={size} color={color} />;
    case RoutesEnum.SearchTab:
      return <AntDesign name="search1" size={size} color={color} />;
    case RoutesEnum.CategoriesTab:
      return <Entypo name="grid" size={size} color={color} />;
    case RoutesEnum.OffersTab:
      return <Fontisto name="shopping-sale" size={size} color={color} />;
    case RoutesEnum.CartTab:
      return <Entypo name="shopping-cart" size={size} color={color} />;
    default:
      return null;
  }
};

const tabBarLabel = route => {
  switch (route.name) {
    case RoutesEnum.HomeTab:
      return 'Home';
    case RoutesEnum.SearchTab:
      return 'Search';
    case RoutesEnum.OffersTab:
      return 'Offers';
    case RoutesEnum.CategoriesTab:
      return 'Categories';
    case RoutesEnum.CartTab:
      return 'Cart';
    default:
      return '';
  }
};

const bottomNavigationOptions = ({route, navigation}) => {
  return {
    tabBarIcon: options => tabBarIcon(options, route, navigation),
    tabBarLabel: tabBarLabel(route),
  };
};

export default bottomNavigationOptions;
