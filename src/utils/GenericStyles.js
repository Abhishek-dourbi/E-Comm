import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './Colors';

export const GenericStyles = EStyleSheet.create({
  boxShadow: {
    shadowOffset: {width: '2rem', height: '2rem'},
    shadowColor: 'black',
    shadowOpacity: 0.3,
    elevation: '15rem',
  },
  headerIcon: {
    fontSize: '22rem',
    color: Colors.white,
  },
});
