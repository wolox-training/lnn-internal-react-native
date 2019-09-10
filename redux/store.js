import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { fetchMiddleware } from 'redux-recompose';
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

const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav);

const middlewares = [thunk, navMiddleware, fetchMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state, action) => reducers(state, action);

const store = createStore(rootReducer, composeEnhancers(...enhancers, Reactotron.createEnhancer()));

export default store;
