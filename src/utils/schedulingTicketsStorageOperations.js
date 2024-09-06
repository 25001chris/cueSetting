import { useSessionStorage } from '@vueuse/core';
import {
  SCHEDULINGTICKETS_SALES_ID_KEY,
  SCHEDULINGTICKETS_SALES_NAME_KEY,
  SCHEDULINGTICKETS_UNIT_KEY,
  SCHEDULINGTICKETS_SCHEDULE_ID_KEY,
  SCHEDULINGTICKETS_WORK_NO_KEY,
  SCHEDULINGTICKETS_EDIT_SALES_ID_KEY,
  SCHEDULINGTICKETS_EDIT_SALES_NAME_KEY
} from '@/constants.js';

export const setSchedulingTicketsSalesIdToSession = (value) => {
  useSessionStorage(SCHEDULINGTICKETS_SALES_ID_KEY).value = value;
};

export const setSchedulingTicketsSalesNameToSession = (value) => {
  useSessionStorage(SCHEDULINGTICKETS_SALES_NAME_KEY).value = value;
};

export const setSchedulingTicketsEditSalesIdToSession = (value) => {
  useSessionStorage(SCHEDULINGTICKETS_EDIT_SALES_ID_KEY).value = value;
};

export const setSchedulingTicketsEditSalesNameToSession = (value) => {
  useSessionStorage(SCHEDULINGTICKETS_EDIT_SALES_NAME_KEY).value = value;
};

export const setSchedulingTicketsSalesUnitToSession = (value) => {
  useSessionStorage(SCHEDULINGTICKETS_UNIT_KEY).value = value;
};

export const setSchedulingTicketsScheduleIdToSession = (value) => {
  useSessionStorage(SCHEDULINGTICKETS_SCHEDULE_ID_KEY).value = value;
};

export const setSchedulingTicketsWorkNoToSession = (value) => {
  useSessionStorage(SCHEDULINGTICKETS_WORK_NO_KEY).value = value;
};

export const getSchedulingTicketsSalesIdFromSession = (defaultValue = null) =>
  useSessionStorage(SCHEDULINGTICKETS_SALES_ID_KEY, defaultValue || '').value;

export const getSchedulingTicketsSalesNameFromSession = (defaultValue = null) =>
  useSessionStorage(SCHEDULINGTICKETS_SALES_NAME_KEY, defaultValue || '').value;

export const getSchedulingTicketsEditSalesIdFromSession = (
  defaultValue = null
) =>
  useSessionStorage(SCHEDULINGTICKETS_EDIT_SALES_ID_KEY, defaultValue || '')
    .value;

export const getSchedulingTicketsEditSalesNameFromSession = (
  defaultValue = null
) =>
  useSessionStorage(SCHEDULINGTICKETS_EDIT_SALES_NAME_KEY, defaultValue || '')
    .value;

export const getSchedulingTicketsSalesUnitFromSession = (defaultValue = null) =>
  useSessionStorage(SCHEDULINGTICKETS_UNIT_KEY, defaultValue || '').value;

export const getSchedulingTicketsScheduleIdFromSession = (
  defaultValue = null
) =>
  useSessionStorage(SCHEDULINGTICKETS_SCHEDULE_ID_KEY, defaultValue || '')
    .value;

export const getSchedulingTicketsWorkNoFromSession = (defaultValue = null) =>
  useSessionStorage(SCHEDULINGTICKETS_WORK_NO_KEY, defaultValue || '').value;

export const deleteSchedulingTicketsSalesIdInSession = () => {
  useSessionStorage(SCHEDULINGTICKETS_SALES_ID_KEY, '').value = null;
};

export const deleteSchedulingTicketsSalesNameInSession = () => {
  useSessionStorage(SCHEDULINGTICKETS_SALES_NAME_KEY, '').value = null;
};

export const deleteSchedulingTicketsEditSalesIdInSession = () => {
  useSessionStorage(SCHEDULINGTICKETS_EDIT_SALES_ID_KEY, '').value = null;
};

export const deleteSchedulingTicketsEditSalesNameInSession = () => {
  useSessionStorage(SCHEDULINGTICKETS_EDIT_SALES_NAME_KEY, '').value = null;
};

export const deleteSchedulingTicketsSalesUnitInSession = () => {
  useSessionStorage(SCHEDULINGTICKETS_UNIT_KEY, '').value = null;
};

export const deleteSchedulingTicketsScheduleIdInSession = () => {
  useSessionStorage(SCHEDULINGTICKETS_SCHEDULE_ID_KEY, '').value = null;
};

export const deleteSchedulingTicketsWorkNoInSession = () => {
  useSessionStorage(SCHEDULINGTICKETS_WORK_NO_KEY, '').value = null;
};
