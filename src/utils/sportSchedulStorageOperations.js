import { useSessionStorage } from '@vueuse/core';
import { SPORTSCHEDUL_SPORT_NAME_KEY } from '@/constants.js';

export const setSportSchedulSportNameToSession = (value) => {
  useSessionStorage(SPORTSCHEDUL_SPORT_NAME_KEY).value = value;
};
export const getSportSchedulSportNameFromSession = (defaultValue = null) =>
  useSessionStorage(SPORTSCHEDUL_SPORT_NAME_KEY, defaultValue || '').value;

export const deleteSportSchedulSportNameInSession = () => {
  useSessionStorage(SPORTSCHEDUL_SPORT_NAME_KEY, '').value = null;
};
