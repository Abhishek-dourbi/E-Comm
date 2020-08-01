import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../utils/Colors';

export const itemListStyles = EStyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  headerLeftContainer: {
    flexDirection: 'row',
    paddingLeft: '10rem',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: '18rem',
    color: Colors.white,
    marginLeft: '15rem',
  },
  headerRightContainer: {
    flexDirection: 'row',
    paddingRight: '20rem',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: '20rem',
  },
  categoryContainer: {
    paddingVertical: '15rem',
    paddingLeft: '10rem',
  },
  categoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: '2rem',
    borderColor: Colors.lightGray1,
    marginRight: '10rem',
    borderRadius: '10rem',
    paddingHorizontal: '5rem',
    width: '150rem',
  },
  selectedCategoryCard: {
    borderColor: Colors.secondBlueGradientColor,
  },
  categoryImage: {
    width: '70rem',
    height: '70rem',
  },
  categoryText: {
    flexWrap: 'wrap',
    flexShrink: 1,
    marginLeft: '10rem',
    fontSize: '16rem',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: Colors.secondBlueGradientColor,
  },
  itemFilter: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.lightGray1,
    borderWidth: '1rem',
    marginRight: '10rem',
    borderRadius: '20rem',
    paddingHorizontal: '12rem',
    paddingVertical: '8rem',
  },
  selectedItemFilter: {
    backgroundColor: Colors.lightOpcaityBlue,
    borderColor: Colors.secondBlueGradientColor,
  },
  itemFilterText: {
    color: Colors.black,
    fontSize: '16rem',
    fontWeight: '500',
  },
  selectedItemFilterText: {
    color: Colors.secondBlueGradientColor,
  },
  itemContainer: {
    marginVertical: '10rem',
    flex: 1
  },
});
