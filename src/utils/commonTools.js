import moment from 'moment';
import { BASE_BUILD_ENV, DEFAULT_EXCLUDE_SYMBOL } from '@/constants.js';

// 頻道排序列表，越靠前優先級越高
const baseChannelSort = [
  'U5',
  'US',
  'U2',
  'UD',
  'UP',
  'U1',
  'U6',
  'U4',
  'BZ',
  'CT',
  'CY',
  'YO',
  'MB',
  'K1',
  'K2',
  'K3',
  'K4',
  'K5',
  'K6',
  'K7',
  'K8',
  'K9',
  'KZ',
  'KT',
  'KY',
  'KU'
];

/**
 * 檢查當前是否為生產環境
 */
export const isProductionEnv =
  (import.meta.env.MODE ?? '').toLowerCase() === BASE_BUILD_ENV.PROD;

/**
 * 檢查當前是否為測試環境
 */
export const isStagingEnv =
  (import.meta.env.MODE ?? '').toLowerCase() === BASE_BUILD_ENV.STG;

/**
 * 檢查當前是否為開發環境
 */
export const isDevelopmentEnv =
  (import.meta.env.MODE ?? '').toLowerCase() === BASE_BUILD_ENV.DEV;

/**
 * 取得當前建置的環境模式
 */
export const currentBuildEnv = import.meta.env.MODE;

/**
 * 檢查傳入參數是否為數值
 * @param {*} value 要檢查的資料
 * @returns 檢查結果
 */
export const isNumeric = (value) => {
  if (typeof value != 'string' && typeof value != 'number') {
    return false;
  }
  return !isNaN(value) && !isNaN(parseFloat(value));
};

/**
 * 字串模糊比對(忽略大小寫、忽略任何空白)
 * @param {String} str1 要比對的第一組字串
 * @param {String} str2 要比對的第二組字串
 * @returns 比對結果
 */
export const stringFuzzyCompare = (str1, str2) => {
  if (typeof str1 === 'string' && typeof str2 === 'string') {
    const str1Fuzzy = String(str1).toLowerCase().replace(/\s+/g, '');
    const str2Fuzzy = String(str2).toLowerCase().replace(/\s+/g, '');
    return str1Fuzzy == str2Fuzzy;
  }
  return false;
};

/**
 * JSON 資料移除特定符號
 * flags：https://www.fooish.com/regex-regular-expression/flags.html
 * @param {Object} json JSON 物件
 * @param {String | RegExp} pattern 正則表達式
 * @param {String} flags 修飾詞
 * @returns 移除特定符號後的 JSON 物件
 */
export const removeJsonAllPattern = (json, pattern, flags = 'g') => {
  const jsonString = JSON.stringify(json);
  return JSON.parse(jsonString.replace(new RegExp(pattern, flags), ''));
};

/**
 * 移除字串特定符號
 * flags：https://www.fooish.com/regex-regular-expression/flags.html
 * @param {String} inputString 要處理的字串
 * @param {String | RegExp} pattern 正則表達式
 * @param {Boolean} useTrim 是否移除前後空白
 * @param {String} flags 修飾詞
 * @returns 移除特定符號後的字串
 */
export const removeStringSymbol = (
  inputString,
  pattern,
  useTrim = true,
  flags = 'g'
) => {
  const result = String(inputString).replace(new RegExp(pattern, flags), '');
  return useTrim ? result.trim() : result;
};

/**
 * 依據指定格式取得當前的時間資料
 * @param {String} format 指定格式
 * @returns 格式化的當前的時間資料
 */
export const getTimestamp = (format) => moment().format(format);

/**
 * 檢查字串是否為 null、undefined 或空格字串
 * @param {*} value 要檢查的字串
 * @returns 檢查結果
 */
export const isStringNullOrBlank = (value) =>
  value == 'undefined' || String(value ?? '').trim().length === 0;

/**
 * 轉換 4 碼時間字串為 EBC 30小時制
 * @param {String} timeString 要轉換的時間字串
 * @returns EBC 30小時制時間字串
 */
export const toEbcTime30 = (timeString) => {
  if (typeof timeString != 'string') {
    throw 'the type of the time string must be a string';
  }

  if (timeString.length != 4) {
    throw 'the length of time string length is equal to 4';
  }

  if (timeString >= '0000' && timeString <= '0559') {
    return String(parseInt(timeString, 10) + 2400);
  }

  return timeString;
};

/**
 * 滾動位置至傳入值，無設定預設為置底
 * @param {*} position
 */
export const toPosition = async (position) => {
  const height = position ? position : document.body.clientHeight;
  window.scroll({ top: height, left: 0, behavior: 'smooth' });
};

/**
 * 取得 elTable 流水號
 * @param {*} currentPage 頁碼
 * @param {*} pageSize 每頁顯示筆數
 * @param {*} index tableIndex
 * @returns elTable 流水號
 */
export const getelTableIndex = (currentPage, pageSize, index) => {
  return (currentPage - 1) * pageSize + index + 1;
};

/**
 * 直接更改傳入的陣列值頻道排序
 * @param {Array} data 要排序的來源陣列
 * @param {String} key 要排序的 key
 */
export const sortChannel = (data, key) => {
  data.sort((a, b) => {
    return baseChannelSort.indexOf(String(a[key]).toUpperCase()) >
      baseChannelSort.indexOf(String(b[key]).toUpperCase())
      ? 1
      : -1;
  });
};

/**
 * 依據傳入的陣列值回傳新的頻道排序
 * @param {Array} data 要排序的來源陣列
 * @param {String} key 要排序的 key
 * @returns 頻道排序後的新陣列
 */
export const toSortedChannel = (data, key) => {
  return data.toSorted((a, b) => {
    return baseChannelSort.indexOf(String(a[key]).toUpperCase()) >
      baseChannelSort.indexOf(String(b[key]).toUpperCase())
      ? 1
      : -1;
  });
};

/**
 * 移除非英數字元
 * @param {String} str 要處理的字串
 * @returns 處理完畢的字串
 */
export const romeveNonEnglishDigitalChar = (str) => {
  let output = '';
  for (const s of str) {
    output += /^[A-Za-z0-9]*$/.test(s) ? s : '';
  }

  return output;
};

/**
 * 金額格式化
 * @param {number} value
 * @returns {number} 格式化後的數字
 */
export const stateFormat = (value) => {
  return new Intl.NumberFormat().format(value);
};

/**
 * eltable 金額格式化
 * @param {number} cellValue 要格式化的數字
 * @returns {number} 格式化後的數字
 */
export const moneyFormat = (row, column, cellValue) => {
  if (cellValue !== null) {
    const money = stateFormat(cellValue);
    return money;
  }
};

/**
 * eltable 字串格式化數字
 * @param {object} obj1 要排序的DATA1
 * @param {object} obj2 要排序的DATA2
 * @param {string} column 要排序的欄位
 * @returns {number} 比較後的結果是否大於0
 */
export const sortTextData = (obj1, obj2, column) => {
  const firstplaytlength1 = parseInt(obj1[column]);
  const firstplaytlength2 = parseInt(obj2[column]);
  return firstplaytlength1 - firstplaytlength2;
};

/**
 * 取得公用設定檔
 * @returns {object} 公用設定檔 json 物件
 */
export const fetchPublicConfig = async () => {
  const response = await fetch('/config.json');
  return await response.json();
};

/**
 * vuetify vIcon tabIndex設定-1
 * @param {string} vueTag
 */
export const closeVIconTabIndex = async (vueTag) => {
  const $VIcon = document.querySelectorAll(`.${vueTag} .v-icon`);
  $VIcon.forEach((item) => {
    item.tabIndex = -1;
  });
};

/**
 * 取得檔案的 base64 編碼
 * @param {Blob} file 檔案物件
 * @returns {String} base64 編碼
 */
export const getFileBase64Encode = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * 淺層轉換 Json 物件 null 值為空字串
 * @param {Object} obj Json 物件
 */
export const simpleObjectNullToEmpty = (obj) =>
  Object.keys(obj).forEach((key) => {
    if (obj[key] == null) {
      obj[key] = '';
    }
  });

/**
 * 過濾陣列中的空值
 * @param {Array} data 要過濾的來源陣列
 */
export const filterArrayNullAndEmpty = (data) =>{
  return data.filter((item) => item != null && item != '');
}

/**
 * 指定或排除物件陣列中指定的首字代碼
 * @param {*} sourceAry 要處理的物件陣列
 * @param {*} ruleAry 排除或指定的字元規則陣列
 * @param {*} itemKey 要處理的物件 key
 * @param {*} excludeSymbol 指定的排除符號
 */
export const fetchSpecifyObjArray = (
  sourceAry,
  ruleAry,
  itemKey,
  excludeSymbol = DEFAULT_EXCLUDE_SYMBOL
) => {
  let tempArray = [];

  Array.from(ruleAry).forEach((ruleKey) => {
    if (String(ruleKey).includes(excludeSymbol)) {
      const excludeRuleKey = String(ruleKey).replace(excludeSymbol, '');
      tempArray = Array.from(sourceAry).filter(
        (item) => String(item[itemKey]).slice(0, 1) !== excludeRuleKey
      );
    } else {
      tempArray = Array.from(sourceAry).filter(
        (item) => String(item[itemKey]).slice(0, 1) === ruleKey
      );
    }
  });

  return tempArray;
};
