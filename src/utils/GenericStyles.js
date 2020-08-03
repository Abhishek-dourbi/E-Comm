import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './Colors';

export const GenericStyles = EStyleSheet.create({
  boxShadow: {
    shadowOffset: {width: 0, height: '5rem'},
    shadowColor: Colors.gray,
    shadowOpacity: 0.5,
    elevation: '15rem',
  },
  headerIcon: {
    fontSize: '22rem',
    color: Colors.white,
  },
});
