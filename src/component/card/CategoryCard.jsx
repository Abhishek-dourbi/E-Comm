import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {categoryCardStyles} from './CategoryCard.styles';
import {navigateScreen} from '../../utils/NavigationService';
import RoutesEnum from '../../utils/RoutesEnum';

const CategoryCard = ({data}) => {
  const onCategoryClicked = () => {
    navigateScreen(RoutesEnum.ItemList);
  };

  return (
    <TouchableOpacity
        activeOpacity={1}
      onPress={onCategoryClicked}
      style={categoryCardStyles.container}>
      <Image
        source={{
          uri:
            'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=145,h=140/app/images/category/cms_images/icon/icon_cat_14_v_3_500_1580063018.jpg',
        }}
        style={categoryCardStyles.categoryImage}
        resizeMode="cover"
      />
      <Text style={categoryCardStyles.categoryTitle}>Breakfast & Dairy</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
