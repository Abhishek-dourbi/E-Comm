import EStyleSheet from 'react-native-extended-stylesheet';
import {GenericStyles} from '../../../utils/GenericStyles';

export const categoriesStyles = EStyleSheet.create({
  categoryContainer: {
    marginBottom: '20rem',
    ...GenericStyles.boxShadow,
  },
  container: {
    paddingVertical: '10rem',
  },
});
