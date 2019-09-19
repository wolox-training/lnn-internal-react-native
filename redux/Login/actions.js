import { NavigationActions } from 'react-navigation';
import LoginService from '@services/LoginService';
<<<<<<< HEAD
import LocalStorageService from '@services/LocalStorageService';
=======
import { ROUTES } from '@config/screens';
>>>>>>> login-hocs

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

const login = (user, pass) => dispatch => {
  dispatch({ type: actionTypes.LOGIN });
  LoginService.login(user, pass).then(res => {
    if (res.ok) {
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res });
      return dispatch(NavigationActions.navigate({ routeName: ROUTES.LIBRARY }));
    }
<<<<<<< HEAD
    const sessionData = {
      accessToken: res.headers['access-token'],
      client: res.headers.client,
      uid: res.headers.uid
    };
    dispatch({ type: actionTypes.LOGIN_SUCCESS, sessionData });
    return LocalStorageService.setStoreData('access-token', sessionData.accessToken);
=======
    return dispatch({ type: actionTypes.LOGIN_FAILURE, payload: res });
>>>>>>> login-hocs
  });
};

const actionCreators = {
  login
};

export default actionCreators;
