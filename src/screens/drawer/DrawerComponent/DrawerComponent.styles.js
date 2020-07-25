import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../utils/Colors';

export const drawerComponentStyles = EStyleSheet.create({
  drawer: {
    paddingTop: 0,
  },
  optionContainer: {
    flexDirection: 'row',
    paddingVertical: '20rem',
  },
  borderOption: {
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.lightGray,
  },
  optionInfo: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '15rem',
  },
  userIconContainer: {
    width: '30rem',
    height: '30rem',
    borderColor: 'white',
    borderWidth: '2rem',
    borderRadius: '15rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20rem',
  },
  userIcon: {
    fontSize: '22rem',
  },
  optionBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoText: {
    fontSize: '15rem',
    color: Colors.white,
    fontWeight: '600',
  },
  forwardIcon: {
    fontSize: '20rem',
    color: Colors.black,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: '15rem',
    paddingVertical: '20rem',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: '20rem',
    color: Colors.black,
  },
  locationTextContainer: {
    marginLeft: '10rem',
    flexShrink: 1,
  },
  locationText: {
    fontSize: '16rem',
    flexWrap: 'wrap',
  },
  storeText: {
    fontWeight: 'bold',
  },
  optionLabel: {
    fontWeight: '600',
    fontSize: '16rem',
  },
  orderContainer: {
    backgroundColor: Colors.golden,
    paddingHorizontal: '10rem',
    paddingVertical: '2rem',
    borderRadius: '6rem',
  },
  orderText: {
    color: Colors.white,
    fontSize: '14rem',
  },
});
