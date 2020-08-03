import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Colors from './Colors';

const {width, height} = Dimensions.get('window');

export class GenUtils {
  static getDimension() {
    return {width, height};
  }

  static getStatusBarHeight() {
    return getStatusBarHeight();
  }

  static getStatusBarHeightOnlyIos() {
    return getStatusBarHeight(true);
  }

  static getGradientThemeColors() {
    return Object.values(Colors.themeGradient);
  }

  static getGradientColors(colors) {
    return Object.values(colors);
  }
}
