import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {drawerComponentStyles} from './DrawerComponent.styles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const options = [
  {
    label: 'Shop By Category',
    route: '',
  },
  {
    label: 'My Orders',
    route: '',
  },
  {
    label: 'My Account',
    route: '',
  },
  {
    label: 'User Agreement',
    route: '',
  },
  {
    label: 'Offers Zone',
    route: '',
  },
  {
    label: 'Change Store',
    route: '',
  },
];

const DrawerComponent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          Colors.firstBlueGradientColor,
          Colors.secondBlueGradientColor,
          Colors.thirdBlueGradientColor,
        ]}
        style={drawerComponentStyles.optionContainer}>
        <View style={drawerComponentStyles.optionInfo}>
          <View style={drawerComponentStyles.userIconContainer}>
            <Fontisto
              name="male"
              style={drawerComponentStyles.userIcon}
              color={Colors.white}
            />
          </View>
          <View>
            <Text style={drawerComponentStyles.userInfoText}>Welcome</Text>
            <Text style={drawerComponentStyles.userInfoText}>Devanshu</Text>
          </View>
        </View>
        <View style={drawerComponentStyles.optionBtnContainer}>
          <AntDesign name="right" style={drawerComponentStyles.forwardIcon} />
        </View>
      </LinearGradient>
      <View style={drawerComponentStyles.locationContainer}>
        <Entypo name="location" style={drawerComponentStyles.locationIcon} />
        <View style={drawerComponentStyles.locationTextContainer}>
          <Text style={drawerComponentStyles.locationText}>
            <Text style={drawerComponentStyles.storeText}>Store:</Text>{' '}
            <Text>GROCERY BASKET, New Delhi-110005</Text>
          </Text>
        </View>
      </View>
      {options.map(ele => (
        <TouchableOpacity>
          <View
            style={[
              drawerComponentStyles.optionContainer,
              drawerComponentStyles.borderOption,
            ]}>
            <View style={drawerComponentStyles.optionInfo}>
              <Text style={drawerComponentStyles.optionLabel}>{ele.label}</Text>
            </View>
            <View style={drawerComponentStyles.optionBtnContainer}>
              {ele.label === 'My Orders' ? (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={[
                    Colors.firstYellowGradientColor,
                    Colors.secondYellowGradientColor,
                  ]}
                  style={drawerComponentStyles.orderContainer}>
                  <Text style={drawerComponentStyles.orderText}>0</Text>
                </LinearGradient>
              ) : (
                <AntDesign
                  name="right"
                  style={drawerComponentStyles.forwardIcon}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
};

export default DrawerComponent;
