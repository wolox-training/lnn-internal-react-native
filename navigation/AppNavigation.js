/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { ROUTES } from '@config/screens';
import { screenNavOptions } from '@config/navigation';

import { lightBlue, gray } from '../scss/colors';
import IconComponent from '../app/components/baseComponents/IconComponent';
import LibraryContainer from '../app/screens/Library/index';
import BookDetailContainer from '../app/screens/BookDetail/index';
import WishlistContainer from '../app/screens/WishList';
import LoginContainer from '../app/screens/Login';
import LoadingScreen from '../app/screens/LoadingScreen';

const LibraryStack = createStackNavigator(
  {
    [ROUTES.LIBRARY]: {
      screen: LibraryContainer,
      navigationOptions: screenNavOptions[ROUTES.LIBRARY]
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        return <IconComponent routeName={routeName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      tabStyle: { alignContent: 'space-between' },
      activeTintColor: lightBlue,
      inactiveTintColor: gray
    }
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
