import { actionTypes } from './actions';

const initialState = {
  isLoading: false,
  accessToken: '',
  client: '',
  uid: '',
  error: null
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: payload.headers['access-token'],
        client: payload.headers.client,
        uid: payload.headers.uid,
        isLoading: false
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: payload.data.errors[0],
        isLoading: false
      };
    default:
      return { ...state };
  }
}

export default reducer;
