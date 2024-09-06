import { useSessionStorage } from '@vueuse/core';
import {
  CUEEVENTPROG_EVENT_NAME_KEY,
  CUEEVENTPROG_EVENT_ID_KEY
} from '@/constants.js';

export const setCueEventIdToSession = (value) => {
  useSessionStorage(CUEEVENTPROG_EVENT_ID_KEY).value = value;
};
export const getCueEventIdFromSession = (defaultValue = null) =>
  useSessionStorage(CUEEVENTPROG_EVENT_ID_KEY, defaultValue || '').value;

export const deleteCueEventIdInSession = () => {
  useSessionStorage(CUEEVENTPROG_EVENT_ID_KEY, '').value = null;
};

export const setCueEventNameToSession = (value) => {
  useSessionStorage(CUEEVENTPROG_EVENT_NAME_KEY).value = value;
};
export const getCueEventNameFromSession = (defaultValue = null) =>
  useSessionStorage(CUEEVENTPROG_EVENT_NAME_KEY, defaultValue || '').value;

export const deleteCueEventNameInSession = () => {
  useSessionStorage(CUEEVENTPROG_EVENT_NAME_KEY, '').value = null;
};
