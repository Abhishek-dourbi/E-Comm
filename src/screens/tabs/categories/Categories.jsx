import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Accordion from '../../../component/accordion/Accordion';
import {categoriesStyles} from './Categories.styles';
import {itemListStyles} from '../home/ItemList/ItemList.styles';
import {goBack} from '../../../utils/NavigationService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GenericStyles} from '../../../utils/GenericStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import {dashboardStyles} from '../home/Dashboard/Dashboard.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {drawerComponentStyles} from '../../drawer/DrawerComponent/DrawerComponent.styles';
import Colors from '../../../utils/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';

const items = [
  {
    title: 'Salt Sugar and Jaggery',
  },
  {
    title: 'Atta & Other flours',
  },
  {
    title: 'Dal & Pulses',
  },
  {
    title: 'Rice & Other Grains',
  },
  {
    title: 'Edible Oils',
  },
  {
    title: 'Poha & Daliya',
  },
];

const Categories = ({navigation}) => {
  navigation.setOptions({
    headerLeft: () => {
      return (
        <View style={itemListStyles.headerLeftContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo name="menu" style={categoriesStyles.menuIcon} />
          </TouchableOpacity>
          <Text style={itemListStyles.categoryTitle}>All Categories</Text>
        </View>
      );
    },
    headerTitle: '',
    headerRight: () => {
      return (
        <View style={categoriesStyles.headerRightContainer}>
          <TouchableOpacity>
            <View
              style={[
                drawerComponentStyles.userIconContainer,
                dashboardStyles.userIconContainer,
              ]}>
              <Fontisto
                name="male"
                style={GenericStyles.headerIcon}
                color={Colors.white}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    },
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Array(10).fill(0));
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={categoriesStyles.categoryContainer}>
        <Accordion title="Grocery & Staples" data={items} />
      </View>
    );
  };

  return (
    <View style={categoriesStyles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
