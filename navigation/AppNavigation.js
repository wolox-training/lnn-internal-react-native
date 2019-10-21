import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { ROUTES } from '@config/screens';
import { screenNavOptions, bottomTabDefaultOptions } from '@config/navigation';

import LibraryContainer from '../app/screens/Library';
import SearchLibrary from '../app/screens/SearchLibrary';
import BookDetailContainer from '../app/screens/BookDetail';
import WishlistContainer from '../app/screens/WishList';
import LoginContainer from '../app/screens/Login';
import LoadingScreen from '../app/screens/LoadingScreen';

const LibraryStack = createStackNavigator(
  {
    [ROUTES.LIBRARY]: {
      screen: LibraryContainer,
      navigationOptions: screenNavOptions[ROUTES.LIBRARY]
    },
    [ROUTES.SEARCH_LIBRARY]: {
      screen: SearchLibrary,
      navigationOptions: screenNavOptions[ROUTES.SEARCH_LIBRARY]
    },
    [ROUTES.BOOKDETAIL]: {
      screen: BookDetailContainer,
      navigationOptions: screenNavOptions[ROUTES.BOOKDETAIL]
    }
  },
  {
    initialRouteName: ROUTES.LIBRARY
  }
);

const WishlistStack = createStackNavigator(
  {
    [ROUTES.WISHLIST]: {
      screen: WishlistContainer,
      navigationOptions: screenNavOptions[ROUTES.WISHLIST]
    }
  },
  {
    initialRouteName: ROUTES.WHISHLIST
  }
);

const RootTab = createBottomTabNavigator(
  {
    Library: LibraryStack,
    WishList: WishlistStack
  },
  {
    defaultNavigationOptions: bottomTabDefaultOptions
  }
);

const LoginStack = createStackNavigator(
  {
    [ROUTES.LOADING_SCREEN]: {
      screen: LoadingScreen,
      navigationOptions: screenNavOptions[ROUTES.LOADING_SCREEN]
    },
    [ROUTES.LOGIN]: {
      screen: LoginContainer,
      navigationOptions: screenNavOptions[ROUTES.LOGIN]
    }
  },
  {
    initialRouteName: ROUTES.LOADING_SCREEN
  }
);

const AppNavigator = createStackNavigator(
  {
    loginStack: LoginStack,
    tab: RootTab
  },
  {
    initialRouteName: 'loginStack',
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default AppNavigator;
