import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import books from '@redux/Books/reducer';
import login from '@redux/Login/reducer';

import Reactotron from '../config/reactotronConfig';
import AppNavigator from '../navigation/AppNavigation';

const navReducer = createNavigationReducer(AppNavigator);

const reducers = combineReducers({
  books,
  login,
  nav: navReducer
});

const middleware = createReactNavigationReduxMiddleware(state => state.nav);

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(middleware, thunk),
    Reactotron.createEnhancer()
  )
);
