import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {dashboardStyles} from './Dashboard.styles';
import {drawerComponentStyles} from '../../drawer/DrawerComponent/DrawerComponent.styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Dashboard = props => {
  return (
    <SafeAreaView style={dashboardStyles.container}>
      <ScrollView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            Colors.firstBlueGradientColor,
            Colors.secondBlueGradientColor,
            Colors.thirdBlueGradientColor,
          ]}
          style={dashboardStyles.headerContainer}>
          <View style={dashboardStyles.headerLeft}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Entypo name="menu" style={dashboardStyles.menuIcon} />
            </TouchableOpacity>
            <View style={dashboardStyles.headerTitleContainer}>
              <Text style={dashboardStyles.storeTitle}>GROCERY BASKET</Text>
              <Text style={dashboardStyles.storeAddress}>New-Delhi 110005</Text>
            </View>
          </View>
          <View style={dashboardStyles.headerRight}>
            <View
              style={[
                drawerComponentStyles.userIconContainer,
                dashboardStyles.userIconContainer,
              ]}>
              <Fontisto
                name="male"
                style={drawerComponentStyles.userIcon}
                color={Colors.white}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={dashboardStyles.searchContainer}>
          <TextInput
            style={dashboardStyles.searchBar}
            placeholder="Search(e.g, atta, salt, surf)"
            returnKeyType="search"
          />
            <AntDesign
                style={dashboardStyles.searchIcon}
                name="search1"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
