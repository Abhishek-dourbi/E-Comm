import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {drawerComponentStyles} from './DrawerComponent.styles';
import Colors from '../../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Gradient from '../../../component/gradient/Gradient';

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
    <DrawerContentScrollView
      contentContainerStyle={drawerComponentStyles.drawer}
      {...props}>
      <Gradient style={drawerComponentStyles.optionContainer}>
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
      </Gradient>
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
                <Gradient
                  colors={[
                    Colors.yellowGradient.firstYellowGradientColor,
                    Colors.yellowGradient.secondYellowGradientColor,
                  ]}
                  style={drawerComponentStyles.orderContainer}>
                  <Text style={drawerComponentStyles.orderText}>0</Text>
                </Gradient>
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
