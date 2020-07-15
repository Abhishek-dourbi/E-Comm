import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {sliderStyles} from './Slider.styles';
import Card from '../card/Card';

const Slider = ({label}) => {
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
      <FlatList horizontal data={Array(10).fill(0)} renderItem={renderItem} />
    </View>
  );
};

export default Slider;
