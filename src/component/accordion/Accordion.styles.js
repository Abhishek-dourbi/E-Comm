import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../utils/Colors';

export const accordionStyle = EStyleSheet.create({
  bodyBackground: {
    backgroundColor: Colors.white,
    overflow: 'hidden',
    marginHorizontal: '10rem',
  },
  accordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.lightOpcaityBlue,
    borderRadius: '15rem',
    marginHorizontal: '10rem',
  },
  openAccordion: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  imageContainer: {
    flex: 0.8,
  },
  image: {
    height: '100rem',
  },
  titleContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '10rem',
  },
  title: {
    color: Colors.white,
    fontSize: '16rem',
    fontWeight: '600',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  icon: {
    fontSize: '40rem',
    color: Colors.white,
  },
  bodyContainer: {
    padding: '1rem',
    paddingLeft: '1.5rem',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bodyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingVertical: '10rem',
    paddingHorizontal: '15rem',
  },
  bodyCardTitle: {
    fontSize: '16rem',
    color: Colors.black,
    fontWeight: '500',
  },
  forwardIcon: {
    fontSize: '20rem',
    color: Colors.black,
  },
});
