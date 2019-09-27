import AsyncStorage from '@react-native-community/async-storage';
import { ACCESS_TOKEN } from '@constants/localStorage';

export const setAccessToken = async value => {
  await AsyncStorage.setItem(ACCESS_TOKEN, value);
};

export const getAccessToken = async () => {
  const value = await AsyncStorage.getItem(ACCESS_TOKEN);
  return value;
};

export const clear = async () => {
  const keys = [ACCESS_TOKEN];
  await AsyncStorage.removeItem(keys);
};
