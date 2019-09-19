import { NavigationActions } from 'react-navigation';
import LoginService from '@services/LoginService';
import { ROUTES } from '@config/screens';

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
    return dispatch({ type: actionTypes.LOGIN_FAILURE, payload: res });
  });
};

const actionCreators = {
  login
};

export default actionCreators;
