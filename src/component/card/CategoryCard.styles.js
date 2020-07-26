import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../utils/Colors';
import {GenericStyles} from '../../utils/GenericStyles';

export const categoryCardStyles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.firstYellowGradientColor,
    borderRadius: '15rem',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10rem',
    width: '31%',
    marginBottom: '10rem',
    paddingBottom: '10rem',
    ...GenericStyles.boxShadow,
  },
  categoryImage: {
    height: '80rem',
    width: '100%',
  },
  categoryTitle: {
    fontSize: '12rem',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
