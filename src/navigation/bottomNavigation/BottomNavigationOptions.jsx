import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const tabBarIcon = ({focused, color, size}, route, navigation) => {
  switch (route.name) {
    case 'Home':
      return <FontAwesome name="home" size={size} color={color} />;
    case 'Search':
      return <AntDesign name="search1" size={size} color={color} />;
    case 'Categories':
      return (
        <Entypo
          name="grid"
          size={size}
          color={color}
        />
      );
    case 'Offers':
      return (
        <Fontisto
          name="shopping-sale"
          size={size}
          color={color}
        />
      );
    case 'Cart':
      return <Entypo name="shopping-cart" size={size} color={color} />;
    default:
      return null;
  }
};

const tabBarLabel = route => {
  switch (route.name) {
    case 'Home':
      return 'Home';
    case 'Search':
      return 'Search';
    case 'Offers':
      return 'Offers';
    case 'Categories':
      return 'Categories';
    case 'Cart':
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
