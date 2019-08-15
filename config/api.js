import { create } from 'apisauce';
import Config from 'react-native-config';

export const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 5000
});

export const loginApi = create({
  baseURL: 'https://wolox-training-rails.herokuapp.com/api/v1', //Config.LOGIN_API_BASE_URL,
  timeout: 5000
});
