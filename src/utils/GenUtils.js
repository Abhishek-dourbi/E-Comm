import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

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
}
