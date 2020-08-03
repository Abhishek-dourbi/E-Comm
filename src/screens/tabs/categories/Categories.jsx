import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Accordion from '../../../component/accordion/Accordion';
import {categoriesStyles} from './Categories.styles';

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

const Categories = () => {
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
