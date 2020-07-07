import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export class GenUtils {
  static getDimension() {
    return {width, height};
  }
}
