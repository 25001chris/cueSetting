import moment from 'moment';
import { getCurrentInstance } from 'vue';
import { DEFAULT_YEARMONTHDATE_FORMAT } from '@/constants.js';

export default function () {
  // 在非元件內載入此 module 會發生無法取得 getCurrentInstance 錯誤，需直接使用 moment
  const $moment = getCurrentInstance()?.proxy?.$moment ?? moment;

  // 日期轉換器
  const dateChange = function (date, type) {
    if (type && typeof type == 'string') {
      const _date = date == null ? null : $moment(date).format(type);
      return _date;
    } else {
      const _date = date == null ? null : date;
      return _date;
    }
  };

  // 取得日期範圍列表
  const getListOfDateRange = (startDate, endDate, format) => {
    const dateRangeList = [
      {
        date: startDate,
        numOfWeek: $moment(startDate).day()
      }
    ];

    while (dateRangeList[dateRangeList.length - 1].date != endDate) {
      const nextDate = $moment(dateRangeList[dateRangeList.length - 1].date)
        .add(1, 'd')
        .format(format);
      const nextDateNumOfWeek = $moment(nextDate).day();

      dateRangeList.push({
        date: nextDate,
        numOfWeek: nextDateNumOfWeek
      });
    }

    return dateRangeList;
  };

  // 取回今日日期(YYYYMMDD)
  const yearMonthDateNow = $moment().format(DEFAULT_YEARMONTHDATE_FORMAT);

  // 民國日期轉換器(年)
  const dateTWChange = function (date) {
    const _date = date > 1911 ? date : 1911;
    const result = parseInt(_date) - 1911;
    return result;
  };

  // 民國日期轉換器(年月日)
  /**
   * 民國日期轉換器(年月日)
   * @param {String} value 日期
   * @returns {number} 轉換後的日期格式
   */
  const yearMonthDateTWChange = function (date) {
    const isTwYear = date.toString().length == 7;
    const symbol = !isTwYear ? '/' : '-';
    const _date = !isTwYear
      ? date.split(symbol)
      : `${date.substring(0, 3)}-${date.substring(3, 5)}-${date.substring(
          5,
          7
        )}`.split(symbol);
    const _year = !isTwYear
      ? parseInt(_date[0]) - 1911
      : parseInt(_date[0]) + 1911;
    const result = !isTwYear
      ? _year + _date[1] + _date[2]
      : _year + symbol + _date[1] + symbol + _date[2];
    return result;
  };

  /**
   * 檢查日期是否在指定範圍內
   * @param {String} checkDate 要檢查的日期
   * @param {String} checkStartDate 檢查範圍開始日期
   * @param {String} checkEndDate 檢查範圍結束日期
   * @param {String} checkUnit 要檢查的日期單位
   * @param {String} checkInclusivity 日期檢查包容性
   * @returns {Boolean} 檢查結果
   * @see https://momentjscom.readthedocs.io/en/latest/moment/05-query/06-is-between/
   */
  const checkDateInRange = (
    checkDate,
    checkStartDate,
    checkEndDate,
    checkUnit,
    checkInclusivity = '[]'
  ) =>
    $moment(checkDate).isBetween(
      checkStartDate,
      checkEndDate,
      checkUnit,
      checkInclusivity
    );

  /**
   * 取得日期區間的天數
   * @param {String} startDate
   * @param {String} endDate
   * @returns {Number} 區間天數
   */
  const getDaysCountOfRange = (startDate, endDate) => {
    const start = $moment(startDate);
    const end = $moment(endDate);
    return end.diff(start, 'days') + 1;
  };

  return {
    dateChange,
    getListOfDateRange,
    dateTWChange,
    yearMonthDateTWChange,
    yearMonthDateNow,
    checkDateInRange,
    getDaysCountOfRange
  };
}
