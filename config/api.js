import { create } from 'apisauce';
// import Config from 'react-native-config';

const api = create({
  baseURL: 'https://wolox-training-rails.herokuapp.com/api/v1',
  timeout: 5000
});

export default api;
