import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../utils/Colors';

export const accordionStyle = EStyleSheet.create({
  bodyBackground: {
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
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
  },
});
