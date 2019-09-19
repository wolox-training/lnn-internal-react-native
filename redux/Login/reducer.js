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
<<<<<<< HEAD
        accessToken: action.sessionData.accessToken,
        client: action.sessionData.client,
        uid: action.sessionData.uid,
        isLoading: false,
        loggedIn: true
=======
        accessToken: payload.headers['access-token'],
        client: payload.headers.client,
        uid: payload.headers.uid,
        isLoading: false
>>>>>>> login-hocs
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
