/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { white, lightBlue, gray } from '../scss/colors';
import IconComponent from '../app/components/baseComponents/IconComponent';
import LibraryContainer from '../app/screens/Library/index';
import BookDetailContainer from '../app/screens/BookDetail/index';
import WishlistContainer from '../app/screens/WishList';

import ImageHeader from './components/ImageHeader';
import BackButtonHeader from './components/BackButtonHeader';
import { ROUTES } from './constants';

const LibraryStack = createStackNavigator(
  {
    library: {
      screen: LibraryContainer,
      navigationOptions: {
        title: 'LIBRARY'
      }
    },
    bookDetail: {
      screen: BookDetailContainer,
      navigationOptions: {
        title: 'BOOK DETAIL'
      }
    }
  },
  {
    initialRouteName: 'library',
    defaultNavigationOptions: {
      headerBackground: <ImageHeader />,
      headerTitleStyle: {
        fontWeight: 'bold',
        color: white
      },
      headerBackImage: BackButtonHeader
    }
  }
);

const WishlistStack = createStackNavigator(
  {
    wishlist: {
      screen: WishlistContainer,
      navigationOptions: {
        title: 'WISHLIST'
      }
    }
  },
  {
    initialRouteName: 'wishlist',
    defaultNavigationOptions: {
      headerBackground: <ImageHeader />,
      headerTitleStyle: styles.titleStyle,
      headerBackImage: <BackButtonHeader />
    }
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
        let iconName = '';
        switch (routeName) {
          case ROUTES.LIBRARY:
            iconName = 'bookmark';
            break;
          case ROUTES.WISHLIST:
            iconName = 'star';
            break;
          default:
            iconName = 'circle';
            break;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      tabStyle: { alignContent: 'space-between' },
      activeTintColor: lightBlue,
      inactiveTintColor: gray
    },
    headerBackground: <ImageHeader />,
    headerTitleStyle: styles.titleStyle,
    headerBackImage: <BackButtonHeader />
  }
);

export default createAppContainer(RootTab);
