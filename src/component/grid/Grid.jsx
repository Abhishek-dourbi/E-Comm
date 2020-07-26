import React, {memo} from 'react';
import {View, Text} from 'react-native';
import CategoryCard from '../card/CategoryCard';
import {gridStyles} from './Grid.styles';
import {sliderStyles} from '../slider/Slider.styles';

const Grid = memo(({data, label}) => {
  const renderItem = item => {
    return <CategoryCard item={item} />;
  };

  return (
    <View style={gridStyles.container}>
      <Text style={sliderStyles.labelText}>{label}</Text>
      <View style={gridStyles.gridContainer}>{data.map(renderItem)}</View>
    </View>
  );
});

export default Grid;
