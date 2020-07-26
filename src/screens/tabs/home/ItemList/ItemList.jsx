import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {itemListStyles} from './ItemList.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemList = ({navigation}) => {
  navigation.setOptions({
    headerLeft: () => {
      return (
        <View style={itemListStyles.headerLeftContainer}>
          <Ionicons name="arrow-back" style={itemListStyles.backIcon} />
          <Text>Staples</Text>
        </View>
      );
    },
  });

  return (
    <View>
      <Text>Item List</Text>
    </View>
  );
};

export default ItemList;
