import AsyncStorage from '@react-native-community/async-storage';
import { SESSION_DATA } from '@constants/localStorage';

export const setSessionData = async value => {
  await AsyncStorage.setItem(SESSION_DATA, value);
};

export const getSessionData = async () => {
  const value = await AsyncStorage.getItem(SESSION_DATA);
  return value;
};

export const clearAll = async () => {
  await AsyncStorage.removeItem(SESSION_DATA);
};
