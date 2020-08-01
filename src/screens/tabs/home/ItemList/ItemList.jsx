import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {itemListStyles} from './ItemList.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack} from '../../../../utils/NavigationService';
import Entypo from 'react-native-vector-icons/Entypo';
import {GenericStyles} from '../../../../utils/GenericStyles';
import {categoryCardStyles} from '../../../../component/card/CategoryCard.styles';
import Line from '../../../../component/line/Line';
import ItemCard from '../../../../component/card/ItemCard';

const ItemList = ({navigation}) => {
  navigation.setOptions({
    headerLeft: () => {
      return (
        <View style={itemListStyles.headerLeftContainer}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="arrow-back" style={GenericStyles.headerIcon} />
          </TouchableOpacity>
          <Text style={itemListStyles.categoryTitle}>Staples</Text>
        </View>
      );
    },
    headerTitle: '',
    headerRight: () => {
      return (
        <View style={itemListStyles.headerRightContainer}>
          <TouchableOpacity style={itemListStyles.searchIcon}>
            <Ionicons name="search" style={GenericStyles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="shopping-cart" style={GenericStyles.headerIcon} />
          </TouchableOpacity>
        </View>
      );
    },
  });

  const renderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          itemListStyles.categoryCard,
          index === 0 ? itemListStyles.selectedCategoryCard : {},
        ]}>
        <Image
          source={{
            uri: 'https://i.dlpng.com/static/png/473319_preview.png',
          }}
          style={itemListStyles.categoryImage}
          resizeMode="cover"
        />
        <Text
          style={[
            itemListStyles.categoryText,
            index === 0 ? itemListStyles.selectedCategoryText : {},
          ]}>
          Dal & Pulses
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItemFilters = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          itemListStyles.itemFilter,
          index === 0 ? itemListStyles.selectedItemFilter : {},
        ]}>
        <Text
          style={[
            itemListStyles.itemFilterText,
            index === 0 ? itemListStyles.selectedItemFilterText : {},
          ]}>
          Toor Dal
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItemCard = () => {
    return (
      <>
        <ItemCard fullCard />
        <Line style={{marginVertical: 10}} />
      </>
    );
  };

  return (
    <View style={itemListStyles.container}>
      <View>
        <FlatList
          data={Array(6).fill(0)}
          horizontal
          renderItem={renderCategoryItem}
          style={itemListStyles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        />
        <Line width={1} />
        <FlatList
          data={Array(6).fill(0)}
          horizontal
          renderItem={renderItemFilters}
          style={itemListStyles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        />
        <Line />
      </View>
      <FlatList
        style={itemListStyles.itemContainer}
        data={Array(10).fill(0)}
        renderItem={renderItemCard}
      />
    </View>
  );
};

export default ItemList;
