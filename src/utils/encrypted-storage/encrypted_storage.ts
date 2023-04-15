import EncryptedStorage from 'react-native-encrypted-storage';

export async function store(key: string, value: any) {
  try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));
    // Congrats! You've just stored your first value!
  } catch (error) {
    throw Error(`Encrypted store error: ${error}`);
    // There was an error on the native side
  }
}

export async function retrievingValue(key: string) {
  try {
    const value: string | null = await EncryptedStorage.getItem(key);

    if (value !== undefined) {
      return JSON.parse(value ?? '');
      // Congrats! You've just retrieved your first value!
    }
  } catch (error) {
    // There was an error on the native side
    throw Error(`Encrypted store retrievingValue error: ${error}`);
  }
}

export async function remove(key: string) {
  try {
    await EncryptedStorage.removeItem(key);
    // Congrats! You've just removed your first value!
  } catch (error) {
    // There was an error on the native side
    throw Error(`Encrypted store remove ${key} error: ${error}`);
  }
}

export async function clearStorage() {
  try {
    await EncryptedStorage.clear();
    // Congrats! You've just cleared the device storage!
  } catch (error) {
    // There was an error on the native side
    throw Error(`Encrypted store clearStorage error: ${error}`);
  }
}
