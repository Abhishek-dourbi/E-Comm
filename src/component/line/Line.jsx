import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../utils/Colors';

const getStyles = (color, width) => {
  return EStyleSheet.create({
    backgroundColor: color ? color : Colors.lightGray,
    height: width ? width : 2,
    width: '100%',
  });
};

const Line = ({color, width}) => {
  const lineStyles = getStyles(color, width);

  return <View style={lineStyles} />;
};

export default Line;
