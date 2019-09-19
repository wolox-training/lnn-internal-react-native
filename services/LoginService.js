import { loginApi } from '../config/api';

export default {
  login: (user, pass) => loginApi.post('/auth/sign_in', { email: user, password: pass })
};
