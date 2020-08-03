import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../utils/Colors';
import {gradientStyles} from './Gradient.styles';
import {GenUtils} from '../../utils/GenUtils';

const Gradient = ({style, children, colors}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors ? [...colors] : [...GenUtils.getGradientThemeColors()]}
      style={style ? style : gradientStyles.gradient}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
