import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../utils/Colors';

const getStyles = (color, width, style) => {
  return EStyleSheet.create({
    backgroundColor: color ? color : Colors.lightGray,
    height: width ? width : 2,
    width: '100%',
    ...style,
  });
};

const Line = ({color, width, style}) => {
  const lineStyles = getStyles(color, width, style);

  return <View style={lineStyles} />;
};

export default Line;
