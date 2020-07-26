import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import Colors from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {dashboardStyles} from './Dashboard.styles';
import {drawerComponentStyles} from '../../drawer/DrawerComponent/DrawerComponent.styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Slider from '../../../component/slider/Slider';
import Grid from '../../../component/grid/Grid';

const Dashboard = props => {
  return (
    <SafeAreaView style={dashboardStyles.container}>
      <View style={dashboardStyles.headerContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            Colors.firstBlueGradientColor,
            Colors.secondBlueGradientColor,
            Colors.thirdBlueGradientColor,
          ]}
          style={dashboardStyles.header}>
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
          <AntDesign style={dashboardStyles.searchIcon} name="search1" />
        </View>
      </View>
      <ScrollView>
        <View style={dashboardStyles.featuredContainer}>
          <Image
            source={{
              uri: 'https://cpimg.tistatic.com/03566177/b/4/Kurkure.jpg',
            }}
            style={dashboardStyles.featuredImage}
            resizeMode="cover"
          />
        </View>
        <View style={dashboardStyles.offerSliderContainer}>
          <Grid data={Array(6).fill(0)} label="Shop By Category" />
        </View>
        <View style={dashboardStyles.offerSliderContainer}>
          <Slider data={Array(10).fill(0)} label="Best Offers" />
        </View>
        <View style={dashboardStyles.offerSliderContainer}>
          <Slider data={Array(10).fill(0)} label="Best Seller" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
