/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { white, lightBlue, gray } from '../scss/colors';
import IconComponent from '../app/components/baseComponents/IconComponent';
import LibraryContainer from '../app/screens/Library/index';
import BookDetailContainer from '../app/screens/BookDetail/index';
import WishlistContainer from '../app/screens/WishList';
import { ROUTES_TITLES } from '../constants/routes';

import ImageHeader from './components/ImageHeader';
import BackButtonHeader from './components/BackButtonHeader';

const LibraryStack = createStackNavigator(
  {
    library: { screen: LibraryContainer },
    bookDetail: { screen: BookDetailContainer }
  },
  {
    initialRouteName: 'library',
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackground: <ImageHeader />,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: white
      },
      headerBackImage: BackButtonHeader,
      headerTitle: ROUTES_TITLES[navigation.state.routeName]
    })
  }
);

const WishlistStack = createStackNavigator(
  {
    wishlist: { screen: WishlistContainer }
  },
  {
    initialRouteName: 'wishlist',
    defaultNavigationOptions: ({ navigation }) => ({
      headerBackground: <ImageHeader />,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: white
      },
      headerBackImage: BackButtonHeader,
      headerTitle: ROUTES_TITLES[navigation.state.routeName]
    })
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
      },
      headerTitle: navigation.state.routeName
    }),
    tabBarOptions: {
      tabStyle: { alignContent: 'space-between' },
      activeTintColor: lightBlue,
      inactiveTintColor: gray
    }
  }
);

export default createAppContainer(RootTab);
