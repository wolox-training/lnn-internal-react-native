import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import Reactotron from '../config/reactotronConfig';
import AppNavigator from '../navigation/AppNavigation';

const navReducer = createNavigationReducer(AppNavigator);

const reducers = combineReducers({
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
