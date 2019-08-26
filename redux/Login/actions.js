import LoginService from '@services/LoginService';
import LocalStorageService from '@services/LocalStorageService';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

const login = (user, pass) => dispatch => {
  dispatch({ type: actionTypes.LOGIN });
  LoginService.login(user, pass).then(res => {
    if (!res.ok) {
      return dispatch({ type: actionTypes.LOGIN_FAILURE, res });
    }
    const sessionData = {
      accessToken: res.headers['access-token'],
      client: res.headers.client,
      uid: res.headers.uid
    };
    dispatch({ type: actionTypes.LOGIN_SUCCESS, sessionData });
    return LocalStorageService.setStoreData('access-token', sessionData.accessToken);
  });
};

const actionCreators = {
  login
};

export default actionCreators;
