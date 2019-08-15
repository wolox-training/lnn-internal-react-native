import LoginService from '@services/LoginService';

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
    return dispatch({ type: actionTypes.LOGIN_SUCCESS, res });
  });
};

const actionCreators = {
  login
};

export default actionCreators;
