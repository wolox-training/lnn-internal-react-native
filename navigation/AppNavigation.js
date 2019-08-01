import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LibraryContainer from '../app/screens/Library/index';
import BookDetailContainer from '../app/screens/BookDetail/index';

import ImageHeader from './components/ImageHeader';
import BackButtonHeader from './components/BackButtonHeader';
import { styles } from './styles';

const AppNavigator = createStackNavigator({
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

export default createAppContainer(AppNavigator);
