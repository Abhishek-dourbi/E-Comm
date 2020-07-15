import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {cardStyles} from './Card.styles';

const Card = () => {
  return (
    <View style={cardStyles.container}>
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
      <View style={cardStyles.buttonContainer}>
        <TouchableOpacity style={cardStyles.cartButton}>
          <Text style={cardStyles.cartButtonLabel}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
