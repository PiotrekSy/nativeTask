import { MMKV } from 'react-native-mmkv';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';
import type { StateStorage } from 'zustand/middleware';

export const storage = new MMKV({ id: 'fcapp-storage', encryptionKey: '' });
if (__DEV__) {
  initializeMMKVFlipper({ default: storage });
}

export const queryStorage = new MMKV({ id: 'query-storage', encryptionKey: '' });

// interface StorageKeys {
//   environment: string;
// }

// export const getValueFromStorage = <K extends keyof StorageKeys>(key: K) => {
//   const value = storage.getString(key);
//   if (value) {
//     return JSON.parse(value) as StorageKeys[K];
//   }
//   return undefined;
// };

// export const setValueInStorage = <K extends keyof StorageKeys, V extends StorageKeys[K]>(
//   key: K,
//   value: V
// ) => {
//   storage.set(key, JSON.stringify(value));
// };

export const zustandStorageHandler: StateStorage = {
  setItem: (name, value) => storage.set(name, value),
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => storage.delete(name),
};
