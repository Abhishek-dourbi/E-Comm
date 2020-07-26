import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../utils/Colors';
import {GenericStyles} from '../../../../utils/GenericStyles';

export const dashboardStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  headerContainer: {
    marginBottom: '25rem',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '10rem',
    paddingBottom: '50rem',
  },
  headerLeft: {
    flex: 3,
    flexDirection: 'row',
    paddingLeft: '10rem',
  },
  headerRight: {
    flex: 0.5,
    alignItems: 'center',
    height: '100%',
  },
  userIconContainer: {
    marginRight: 0,
  },
  menuIcon: {
    color: Colors.white,
    fontSize: '30rem',
  },
  headerTitleContainer: {
    marginLeft: '20rem',
  },
  storeTitle: {
    fontWeight: '600',
    color: Colors.white,
    fontSize: '16rem',
  },
  storeAddress: {
    fontWeight: '400',
    color: Colors.white,
    fontSize: '14rem',
  },
  headerBottomContainer: {
    height: '50rem',
  },
  searchContainer: {
    borderRadius: '40rem',
    alignItems: 'center',
    paddingHorizontal: '15rem',
    backgroundColor: Colors.searchBarColor,
    flexDirection: 'row',
    position: 'absolute',
    bottom: '-20rem',
    height: '40rem',
    zIndex: 100,
    width: '85%',
    alignSelf: 'center',
    ...GenericStyles.boxShadow,
  },
  searchIcon: {
    color: Colors.black,
    fontSize: '20rem',
  },
  searchBar: {
    flex: 1,
    padding: 0,
  },
  offerSliderContainer: {
    marginVertical: '10rem',
  },
  featuredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '20rem',
    ...GenericStyles.boxShadow,
  },
  featuredImage: {
    width: '90%',
    height: '200rem',
    borderRadius: '20rem',
  },
});
