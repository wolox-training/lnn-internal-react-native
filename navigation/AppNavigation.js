import { createStackNavigator, createAppContainer } from 'react-navigation';

import LibraryContainer from '../app/screens/Library/index';
import BookDetailContainer from '../app/screens/BookDetail/index';

const AppNavigator = createStackNavigator({
  library: { screen: LibraryContainer },
  bookDetail: { screen: BookDetailContainer }
}, {
  initialRouteName: 'library'
});

export default createAppContainer(AppNavigator);
