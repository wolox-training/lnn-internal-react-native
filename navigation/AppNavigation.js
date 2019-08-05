/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import IconComponent from '../app/components/baseComponents/IconComponent';
import LibraryContainer from '../app/screens/Library/index';
import BookDetailContainer from '../app/screens/BookDetail/index';
import WishlistContainer from '../app/screens/WishList';
import { lightBlue, gray } from '../scss/colors';

import ImageHeader from './components/ImageHeader';
import BackButtonHeader from './components/BackButtonHeader';
import { styles } from './styles';
import { HOME } from './constants';

const LibraryStack = createStackNavigator(
  {
    library: {
      screen: LibraryContainer,
      navigationOptions: {
        title: 'Library'
      }
    },
    bookDetail: {
      screen: BookDetailContainer,
      navigationOptions: {
        title: 'Book Detail'
      }
    }
  },
  {
    initialRouteName: 'library',
    defaultNavigationOptions: {
      headerBackground: <ImageHeader />,
      headerTitleStyle: styles.titleStyle,
      headerBackImage: <BackButtonHeader />
    }
  }
);

const WishlistStack = createStackNavigator(
  {
    wishlist: {
      screen: WishlistContainer,
      navigationOptions: {
        title: 'Wishlist'
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
          case HOME:
            iconName = 'bookmark';
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
