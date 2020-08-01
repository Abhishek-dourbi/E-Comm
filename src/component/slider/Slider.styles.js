import EStyleSheet from 'react-native-extended-stylesheet';
import {GenericStyles} from '../../utils/GenericStyles';

export const sliderStyles = EStyleSheet.create({
  container: {
    paddingLeft: '10rem',
  },
  labelText: {
    fontSize: '16rem',
    fontWeight: 'bold',
    marginBottom: '20rem',
  },
  sliderContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    marginRight: '10rem',
    marginBottom: '10rem',
    ...GenericStyles.boxShadow,
  },
});
