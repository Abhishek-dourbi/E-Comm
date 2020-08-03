import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {itemCardStyles, fullItemCardStyles} from './ItemCard.styles';
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

const ItemCard = ({fullCard}) => {
  const [option, setOption] = useState('');

  const onOptionChange = () => {
    setOption(option);
  };

  return fullCard ? (
    <View style={fullItemCardStyles.container}>
      <View style={fullItemCardStyles.imageContainer}>
        <Image
          source={{
            uri: 'https://i.dlpng.com/static/png/473319_preview.png',
          }}
          style={fullItemCardStyles.image}
          resizeMode="contain"
        />
      </View>
      <View style={fullItemCardStyles.detailsContainer}>
        <Text style={fullItemCardStyles.itemTitle}>Toor Dal</Text>
        <View style={fullItemCardStyles.priceContainer}>
          <Text style={itemCardStyles.currentPriceText}>₹80.00</Text>
          <Text style={itemCardStyles.oldPriceText}>₹120.00</Text>
          <Text style={fullItemCardStyles.offerText}>15% off</Text>
        </View>
        <View style={fullItemCardStyles.selectionContainer}>
          <View style={fullItemCardStyles.dropDownInputContainer}>
            <Dropdown
              value={option}
              onChangeOption={onOptionChange}
              data={data}
              rippleOpacity={0}
              useNativeDriver
              dropdownMargins={{min: 8, max: 16}}
              renderAccessory={value => (
                <View
                  style={
                    value
                      ? [
                          itemCardStyles.dropDownContainer,
                          fullItemCardStyles.dropDownContainer,
                        ]
                      : [
                          itemCardStyles.dropDownUnselectedContainer,
                          fullItemCardStyles.dropDownUnselectedContainer,
                        ]
                  }>
                  <Text
                    style={
                      value
                        ? [
                            itemCardStyles.dropDownText,
                            fullItemCardStyles.dropDownText,
                          ]
                        : [
                            itemCardStyles.unselectedText,
                            fullItemCardStyles.unselectedText,
                          ]
                    }>
                    {value ? value : 'Qty'}
                  </Text>
                  <AntDesign
                    name="caretdown"
                    style={itemCardStyles.dropDownIcon}
                  />
                </View>
              )}
              renderBase={props => (
                <View>{props.renderAccessory(props.title)}</View>
              )}
            />
          </View>
          <TouchableOpacity style={fullItemCardStyles.buttonContainer}>
            <View style={fullItemCardStyles.buttonTextContainer}>
              <Text style={fullItemCardStyles.buttonText}>Add Item</Text>
            </View>
            <View style={fullItemCardStyles.buttonIconContainer}>
              <AntDesign name="plus" style={fullItemCardStyles.addIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
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
                  value
                    ? itemCardStyles.dropDownText
                    : itemCardStyles.unselectedText
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
