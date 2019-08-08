import { create } from 'apisauce';
import Config from 'react-native-config';

const api = create({
  baseURL: Config.REACT_APP_API_BASE_URL,
  timeout: 5000
});

export default api;
