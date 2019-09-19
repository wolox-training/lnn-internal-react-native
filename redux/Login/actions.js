import { NavigationActions } from 'react-navigation';
import LoginService from '@services/LoginService';
import LocalStorageService from '@services/LocalStorageService';
import { ROUTES } from '@config/screens';

import { SESSION_DATA } from '@constants';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE'
};

const login = (user, pass) => dispatch => {
  dispatch({ type: actionTypes.LOGIN });
  LoginService.login(user, pass).then(res => {
    if (res.ok) {
      const sessionData = {
        accessToken: res.headers['access-token'],
        client: res.headers.client,
        uid: res.headers.uid
      };
      LocalStorageService.setStoreData(SESSION_DATA.ACCESS_TOKEN, sessionData.accessToken);
      LocalStorageService.setStoreData(SESSION_DATA.CLIENT, sessionData.client);
      LocalStorageService.setStoreData(SESSION_DATA.UID, sessionData.uid);
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: sessionData });
      return dispatch(NavigationActions.navigate({ routeName: ROUTES.LIBRARY }));
    }
    return dispatch({ type: actionTypes.LOGIN_FAILURE, payload: res });
  });
};

const logout = () => dispatch => {
  dispatch({ type: actionTypes.LOGOUT });
  LocalStorageService.removeItem(SESSION_DATA.ACCESS_TOKEN).then(res => {
    if (res) {
      return dispatch({ type: actionTypes.LOGOUT_SUCCESS });
    }
    return dispatch({ type: actionTypes.LOGOUT_FAILURE });
  });
};

const actionCreators = {
  login,
  logout
};

export default actionCreators;
