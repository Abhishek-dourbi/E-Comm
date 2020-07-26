import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {itemCardStyles} from './ItemCard.styles';
import {Dropdown} from 'react-native-material-dropdown-v2';
import AntDesign from 'react-native-vector-icons/AntDesign';

let data = [
  {
    label: '200gm',
    value: '200',
  },
  {
    label: '500gm',
    value: '500',
  },
  {
    label: '1kg',
    value: '1000',
  },
];

const ItemCard = () => {
  const [option, setOption] = useState('');

  const onOptionChange = () => {
    setOption(option);
  };

  return (
    <View style={itemCardStyles.container}>
      <View style={itemCardStyles.exemptionContainer}>
        <Text style={itemCardStyles.exemptionText}>43% {'\n'} Off</Text>
      </View>
      <View style={itemCardStyles.itemContainer}>
        <View style={itemCardStyles.imageContainer}>
          <Image
            source={{
              uri: 'https://i.dlpng.com/static/png/473319_preview.png',
            }}
            style={itemCardStyles.image}
            resizeMode="cover"
          />
        </View>
        <View style={itemCardStyles.itemDetailContainer}>
          <View style={itemCardStyles.priceContainer}>
            <Text style={itemCardStyles.currentPriceText}>₹80.00</Text>
            <Text style={itemCardStyles.oldPriceText}>₹120.00</Text>
          </View>
          <Text style={itemCardStyles.itemLabel}>Toor Dal</Text>
        </View>
      </View>
      <View>
        <Dropdown
          value={option}
          onChangeOption={onOptionChange}
          data={data}
          inputContainerStyle={itemCardStyles.dropDownInputContainer}
          rippleOpacity={0}
          useNativeDriver
          dropdownMargins={{min: 8, max: 16}}
          renderAccessory={value => (
            <View
              style={
                value
                  ? itemCardStyles.dropDownContainer
                  : itemCardStyles.dropDownUnselectedContainer
              }>
              <Text
                style={
                  value ? itemCardStyles.dropDownText : itemCardStyles.unselectedText
                }>
                {value ? value : 'Qty'}
              </Text>
              <AntDesign name="caretdown" style={itemCardStyles.dropDownIcon} />
            </View>
          )}
          renderBase={props => (
            <View>{props.renderAccessory(props.title)}</View>
          )}
        />
      </View>
      <View style={itemCardStyles.buttonContainer}>
        <TouchableOpacity style={itemCardStyles.cartButton}>
          <Text style={itemCardStyles.cartButtonLabel}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCard;
