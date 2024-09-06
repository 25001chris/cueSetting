import { useLocalStorage, useSessionStorage } from '@vueuse/core';
import { USER_TOKEN_KEY, USER_ACCOUNT_KEY } from '@/constants.js';

export const setUserTokenToLocal = (value) => {
  useLocalStorage(USER_TOKEN_KEY).value = value;
};

export const setUserTokenToSession = (value) => {
  useSessionStorage(USER_TOKEN_KEY).value = value;
};

export const setUserAccountToLocal = (value) => {
  useLocalStorage(USER_ACCOUNT_KEY).value = value;
};

export const setUserAccountToSession = (value) => {
  useSessionStorage(USER_ACCOUNT_KEY).value = value;
};

export const setDataToLocalStorage = (key, value) => {
  useLocalStorage(key).value = value;
};

export const setDataToSessionStorage = (key, value) => {
  useSessionStorage(key).value = value;
};

export const getUserTokenFromLocal = (defaultValue = null) =>
  useLocalStorage(USER_TOKEN_KEY, defaultValue || '').value;

export const getUserTokenFromSession = (defaultValue = null) =>
  useSessionStorage(USER_TOKEN_KEY, defaultValue || '').value;

export const getUserAccountFromLocal = (defaultValue = null) =>
  useLocalStorage(USER_ACCOUNT_KEY, defaultValue || '').value;

export const getUserAccountFromSession = (defaultValue = null) =>
  useSessionStorage(USER_ACCOUNT_KEY, defaultValue || '').value;

export const getDataFromLocalStorage = (key, defaultValue = null) =>
  useLocalStorage(key, defaultValue || '').value;

export const getDataFromSessionStorage = (key, defaultValue = null) =>
  useSessionStorage(key, defaultValue || '').value;

export const deleteUserTokenInLocal = () => {
  useLocalStorage(USER_TOKEN_KEY, '').value = null;
};

export const deleteUserTokenInSession = () => {
  useSessionStorage(USER_TOKEN_KEY, '').value = null;
};

export const deleteUserAccountInLocal = () => {
  useLocalStorage(USER_ACCOUNT_KEY, '').value = null;
};

export const deleteUserAccountInSession = () => {
  useSessionStorage(USER_ACCOUNT_KEY, '').value = null;
};

export const deleteDataInLocalStorage = (key) => {
  useLocalStorage(key, '').value = null;
};

export const deleteDataInSessionStorage = (key) => {
  useSessionStorage(key, '').value = null;
};

export const deleteAllInLocalStorage = () => {
  localStorage.clear();
};

export const deleteAllInSessionStorage = () => {
  sessionStorage.clear();
};

export const deleteAllStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};
