import EStyleSheet from 'react-native-extended-stylesheet';

export const gridStyles = EStyleSheet.create({
  container: {
    paddingHorizontal: '15rem',
  },
  gridContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
