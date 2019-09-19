import { create } from 'apisauce';
import Config from 'react-native-config';

export const api = create({
  baseURL: Config.API_BASE_URL,
  timeout: 5000
});

export const loginApi = create({
  baseURL: Config.LOGIN_API_BASE_URL,
  timeout: 5000
});
