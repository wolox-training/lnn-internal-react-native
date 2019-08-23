import { AsyncStorage } from 'react-native';

export async function setStoreData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getStoreData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value === null ? false : value;
  } catch (error) {
    return false;
  }
}

export async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export default {
  getStoreData,
  setStoreData,
  removeItem
};
