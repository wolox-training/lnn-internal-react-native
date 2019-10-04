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
        accessToken: payload.accessToken,
        client: payload.client,
        uid: payload.uid,
        isLoading: false
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: payload.data.errors[0],
        isLoading: false
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: null,
        client: null,
        uid: null,
        isLoading: false
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return { ...state };
  }
}

export default reducer;
