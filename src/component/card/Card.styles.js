import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../utils/Colors';

export const cardStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: '10rem',
  },
  itemContainer: {
    paddingHorizontal: '10rem',
    alignItems: 'center',
    paddingVertical: '20rem',
  },
  imageContainer: {
    paddingHorizontal: '20rem',
    paddingVertical: '10rem',
  },
  image: {
    width: '80rem',
    height: '80rem',
  },
  itemDetailContainer: {
    paddingVertical: '10rem',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  currentPriceText: {
    fontWeight: 'bold',
    fontSize: '14rem',
  },
  oldPriceText: {
    fontSize: '14rem',
    textDecorationLine: 'line-through',
    marginLeft: '20rem',
  },
  itemLabel: {
    fontSize: '14rem',
  },
  buttonContainer: {
    marginTop: '10rem',
    width: '100%',
  },
  cartButton: {
    backgroundColor: Colors.secondBlueGradientColor,
    paddingVertical: '10rem',
    paddingHorizontal: '10rem',
    borderBottomLeftRadius: '10rem',
    borderBottomRightRadius: '10rem',
  },
  cartButtonLabel: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: '15rem',
  },
});
