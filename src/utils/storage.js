import { AsyncStorage } from 'react-native';

export async function storeValue(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (err) {
    return false;
  }
}

export async function getStoredValue(key) {
  try {
    return await AsyncStorage.getItem(key).then((value) => {
      if (value !== null) {
        return value;
      }
      return false;
    });
  } catch (err) {
    return false;
  }
}

export async function removeStoredValue(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
}
