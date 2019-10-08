import { NavigationActions } from 'react-navigation';
import LoginService from '@services/LoginService';
import { setSessionData, clearAll } from '@utils/asyncStorage';
import { ROUTES } from '@config/screens';

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
      setSessionData(
        `{ accessToken: ${sessionData.accessToken}, client: ${sessionData.client}, uid: ${sessionData.uid} }`
      );
      return dispatch(NavigationActions.navigate({ routeName: ROUTES.LIBRARY }));
    }
    return dispatch({ type: actionTypes.LOGIN_FAILURE, payload: res });
  });
};

const logout = () => dispatch => {
  dispatch({ type: actionTypes.LOGOUT });
  clearAll().then(res => {
    if (res) {
      dispatch({ type: actionTypes.LOGOUT_SUCCESS });
      return dispatch(NavigationActions.navigate({ routeName: ROUTES.LOGIN }));
    }
    return dispatch({ type: actionTypes.LOGOUT_FAILURE });
  });
};

const actionCreators = {
  login,
  logout
};

export default actionCreators;
