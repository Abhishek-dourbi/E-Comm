import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {cardStyles} from './Card.styles';
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

const Card = () => {
  const [option, setOption] = useState('');

  const onOptionChange = () => {
    setOption(option);
  };

  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.exemptionContainer}>
        <Text style={cardStyles.exemptionText}>43% {'\n'} Off</Text>
      </View>
      <View style={cardStyles.itemContainer}>
        <View style={cardStyles.imageContainer}>
          <Image
            source={{
              uri: 'https://i.dlpng.com/static/png/473319_preview.png',
            }}
            style={cardStyles.image}
            resizeMode="cover"
          />
        </View>
        <View style={cardStyles.itemDetailContainer}>
          <View style={cardStyles.priceContainer}>
            <Text style={cardStyles.currentPriceText}>₹80.00</Text>
            <Text style={cardStyles.oldPriceText}>₹120.00</Text>
          </View>
          <Text style={cardStyles.itemLabel}>Toor Dal</Text>
        </View>
      </View>
      <View>
        <Dropdown
          value={option}
          onChangeOption={onOptionChange}
          data={data}
          inputContainerStyle={cardStyles.dropDownInputContainer}
          rippleOpacity={0}
          useNativeDriver
          dropdownMargins={{min: 8, max: 16}}
          renderAccessory={value => (
            <View
              style={
                value
                  ? cardStyles.dropDownContainer
                  : cardStyles.dropDownUnselectedContainer
              }>
              <Text
                style={
                  value ? cardStyles.dropDownText : cardStyles.unselectedText
                }>
                {value ? value : 'Qty'}
              </Text>
              <AntDesign name="caretdown" style={cardStyles.dropDownIcon} />
            </View>
          )}
          renderBase={props => (
            <View>{props.renderAccessory(props.title)}</View>
          )}
        />
      </View>
      <View style={cardStyles.buttonContainer}>
        <TouchableOpacity style={cardStyles.cartButton}>
          <Text style={cardStyles.cartButtonLabel}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
