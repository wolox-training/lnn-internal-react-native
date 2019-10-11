/* eslint-disable new-cap */
import Immutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = completeState({
  books: []
});

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

const reducer = createReducer(Immutable(defaultState), completeReducer(reducerDescription));

export default reducer;
