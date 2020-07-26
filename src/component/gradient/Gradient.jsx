import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../utils/Colors';
import {gradientStyles} from './Gradient.styles';

const Gradient = ({style, children}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[
        Colors.firstBlueGradientColor,
        Colors.secondBlueGradientColor,
        Colors.thirdBlueGradientColor,
      ]}
      style={style ? style : gradientStyles.gradient}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
