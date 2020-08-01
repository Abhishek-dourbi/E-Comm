import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../utils/Colors';

export const itemCardStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: '10rem',
    overflow: 'hidden',
  },
  exemptionContainer: {
    position: 'absolute',
    top: '-5rem',
    left: '-5rem',
    backgroundColor: Colors.lightGreen,
    width: '56rem',
    height: '56rem',
    borderRadius: '28rem',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5rem',
  },
  exemptionText: {
    color: Colors.white,
    fontSize: '14rem',
  },
  itemContainer: {
    paddingHorizontal: '20rem',
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
  dropDownContainer: {
    backgroundColor: Colors.lightGray,
    marginHorizontal: '10rem',
    borderRadius: '5rem',
    paddingVertical: '10rem',
    borderWidth: '1rem',
    borderColor: Colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dropDownUnselectedContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: '10rem',
    borderRadius: '20rem',
    paddingVertical: '10rem',
    borderWidth: '1rem',
    borderColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dropDownText: {
    color: Colors.black,
    fontSize: '16rem',
    textAlign: 'center',
  },
  unselectedText: {
    color: Colors.gray,
    fontSize: '16rem',
    textAlign: 'center',
  },
  dropDownIcon: {
    color: Colors.gray,
    fontSize: '16rem',
  },
});

export const fullItemCardStyles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10rem',
    paddingVertical: '10rem',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100rem',
    height: '100rem',
  },
  detailsContainer: {
    flex: 2,
  },
  itemTitle: {
    fontSize: '18rem',
  },
  offerText: {
    fontWeight: 'bold',
    fontSize: '14rem',
    color: Colors.lightGreen,
    marginLeft: '20rem',
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: '10rem',
  },
  selectionContainer: {
    marginVertical: '10rem',
    marginRight: '30rem',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dropDownInputContainer: {
    flex: 1,
    marginRight: '10rem',
  },
  dropDownContainer: {
    marginHorizontal: 0,
  },
  dropDownUnselectedContainer: {
    marginHorizontal: 0,
    borderRadius: '5rem',
  },
  dropDownText: {
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  buttonTextContainer: {
    paddingHorizontal: '10rem',
    paddingVertical: '10rem',
    borderWidth: 1,
    borderColor: Colors.secondBlueGradientColor,
    borderTopLeftRadius: '5rem',
    borderBottomLeftRadius: '5rem',
  },
  buttonText: {
    color: Colors.secondBlueGradientColor,
    fontSize: '16rem',
    fontWeight: 'bold',
  },
  buttonIconContainer: {
    borderLeftWidth: 0,
    backgroundColor: Colors.lightOpcaityBlue,
    paddingHorizontal: '10rem',
    paddingVertical: '10rem',
    borderWidth: 1,
    borderColor: Colors.secondBlueGradientColor,
    borderTopRightRadius: '5rem',
    borderBottomRightRadius: '5rem'
  },
  addIcon: {
    color: Colors.secondBlueGradientColor,
    fontSize: '17rem',
  },
});
