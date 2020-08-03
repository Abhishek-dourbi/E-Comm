import EStyleSheet from 'react-native-extended-stylesheet';
import {GenericStyles} from '../../../utils/GenericStyles';
import Colors from '../../../utils/Colors';

export const categoriesStyles = EStyleSheet.create({
  categoryContainer: {
    marginBottom: '20rem',
    ...GenericStyles.boxShadow,
  },
  container: {
    paddingVertical: '10rem',
  },
  menuIcon: {
    color: Colors.white,
    fontSize: '30rem',
  },
  headerRightContainer: {
    paddingRight: '10rem',
    alignItems: 'center',
  },
});
