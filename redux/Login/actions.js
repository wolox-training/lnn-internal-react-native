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
    dispatch({ type: actionTypes.LOGIN_SUCCESS, res });
    const accessToken = res.headers['access-token'];
    const client = ['client', res.headers.client];
    const uid = ['uid', res.headers.uid];
    LocalStorageService.setStoreData('access-token', accessToken);
    LocalStorageService.setStoreData('client', client);
    return LocalStorageService.setStoreData('uid', uid);
  });
};

const actionCreators = {
  login
};

export default actionCreators;
