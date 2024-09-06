import { useLocalStorage, useSessionStorage } from '@vueuse/core';
import {
  FORECAST_SALES_ID_KEY,
  FORECAST_SALES_NAME_KEY,
  FORECAST_SALES_UNIT_KEY
} from '@/constants.js';

export const setForecastSalesIdToLocal = (value) => {
  useLocalStorage(FORECAST_SALES_ID_KEY).value = value;
};

export const setForecastSalesNameToLocal = (value) => {
  useLocalStorage(FORECAST_SALES_NAME_KEY).value = value;
};

export const setForecastSalesUnitToLocal = (value) => {
  useLocalStorage(FORECAST_SALES_UNIT_KEY).value = value;
};

export const setForecastSalesIdToSession = (value) => {
  useSessionStorage(FORECAST_SALES_ID_KEY).value = value;
};

export const setForecastSalesNameToSession = (value) => {
  useSessionStorage(FORECAST_SALES_NAME_KEY).value = value;
};

export const setForecastSalesUnitToSession = (value) => {
  useSessionStorage(FORECAST_SALES_UNIT_KEY).value = value;
};

export const getForecastSalesIdFromLocal = (defaultValue = null) =>
  useLocalStorage(FORECAST_SALES_ID_KEY, defaultValue || '').value;

export const getForecastSalesNameFromLocal = (defaultValue = null) =>
  useLocalStorage(FORECAST_SALES_NAME_KEY, defaultValue || '').value;

export const getForecastSalesUnitFromLocal = (defaultValue = null) =>
  useLocalStorage(FORECAST_SALES_UNIT_KEY, defaultValue || '').value;

export const getForecastSalesIdFromSession = (defaultValue = null) =>
  useSessionStorage(FORECAST_SALES_ID_KEY, defaultValue || '').value;

export const getForecastSalesNameFromSession = (defaultValue = null) =>
  useSessionStorage(FORECAST_SALES_NAME_KEY, defaultValue || '').value;

export const getForecastSalesUnitFromSession = (defaultValue = null) =>
  useSessionStorage(FORECAST_SALES_UNIT_KEY, defaultValue || '').value;

export const deleteForecastSalesIdInLocal = () => {
  useLocalStorage(FORECAST_SALES_ID_KEY, '').value = null;
};

export const deleteForecastSalesNameInLocal = () => {
  useLocalStorage(FORECAST_SALES_NAME_KEY, '').value = null;
};

export const deleteForecastSalesUnitInLocal = () => {
  useLocalStorage(FORECAST_SALES_UNIT_KEY, '').value = null;
};

export const deleteForecastSalesIdInSession = () => {
  useSessionStorage(FORECAST_SALES_ID_KEY, '').value = null;
};

export const deleteForecastSalesNameInSession = () => {
  useSessionStorage(FORECAST_SALES_NAME_KEY, '').value = null;
};

export const deleteForecastSalesUnitInSession = () => {
  useSessionStorage(FORECAST_SALES_UNIT_KEY, '').value = null;
};
