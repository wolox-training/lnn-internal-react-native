import { actionTypes } from './actions';

const initialState = {
  isLoading: false,
  loggedIn: false,
  accessToken: '',
  client: '',
  uid: '',
  loginError: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoading: true,
        loginError: null
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.sessionData.accessToken,
        client: action.sessionData.client,
        uid: action.sessionData.uid,
        isLoading: false,
        loggedIn: true
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.res.data.errors[0],
        isLoading: false,
        loggedIn: false
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoading: true,
        loginError: null
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        accessToken: null,
        client: null,
        uid: null,
        isLoading: false,
        loggedIn: false
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
