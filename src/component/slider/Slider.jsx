import React, {memo} from 'react';
import {View, Text, FlatList} from 'react-native';
import {sliderStyles} from './Slider.styles';
import Card from '../card/ItemCard';

const Slider = memo(({label, data}) => {
  const renderItem = () => {
    return (
      <View style={sliderStyles.cardContainer}>
        <Card />
      </View>
    );
  };

  return (
    <View style={sliderStyles.container}>
      <Text style={sliderStyles.labelText}>{label}</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        horizontal
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
});

export default Slider;
