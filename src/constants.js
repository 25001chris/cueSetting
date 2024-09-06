export const REQUEST_HEADER_PREFIX = 'Bearer';
export const USER_TOKEN_KEY = 'EbcSalesUserToken';
export const USER_ACCOUNT_KEY = 'EbcSalesUserAccount';
// 1=AdminSystem (管理員系統)、2=SalesSystem (業務系統)
export const WEBSITE_TYPE_CODE = 2;
// 1=account api、2=common api、3=sales api
export const API_URL_TYPE_CODE = {
  ACCOUNT: 1,
  COMMON: 2,
  SALES: 3,
  SALES_REPORT: 4,
  INVOICE: 5,
  INVOICE_REPORT: 6
};
export const API_CONTENT_TYPE = {
  FORM_DATA: 'multipart/form-data',
  FROM_BODY: 'application/x-www-form-urlencoded',
  JSON: 'application/json'
};
export const DEFAULT_HOME_ROUTE_NAME = 'schedulingTicketsList'; // 預設首頁路由名稱
export const DEFAULT_SELECT_ALL_VALUE = -1;
export const DEFAULT_DATE_FORMAT = 'yyyy/MM/DD';
export const DEFAULT_YEARMONTH_FORMAT = 'yyyyMM';
export const DEFAULT_YEARMONTHDATE_FORMAT = 'yyyyMMDD';
export const DEFAULT_HTML_DATE_FORMAT = 'yyyy-MM-DD';
export const DEFAULT_PER_PAGE_SIZE = 50;
export const DEFAULT_COMMON_LIST_SORT_FIELD = 'id';
export const DEFAULT_COMMON_LIST_SORT_ORDER = 'desc';
export const DEFAULT_REMOVE_PATTERN = "[']";
export const DEFAULT_MATERIAL_REMOVE_PATTERN = /["']/;
export const DEFAULT_SELECTED_COLOR = '#B8DCFF';
export const DEFAULT_DATEPICKER_MIN_DATE = '1911/01/01';
export const DEFAULT_DATEPICKER_MAX_DATE = '9999/12/31';
export const DEFAULT_HTML_DATEPICKER_MIN_DATE = '1911-01-01';
export const DEFAULT_HTML_DATEPICKER_MAX_DATE = '9999-12-31';
export const DEFAULT_EXCLUDE_SYMBOL = '^';

// 網站建置環境
export const BASE_BUILD_ENV = {
  DEV: 'development',
  STG: 'staging',
  PROD: 'production'
};

// 網站主題樣式名稱
export const BASE_WEB_THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// 銷售類型：01=一般銷售、02=專案、03=廣告交換
export const BASE_SALES_TYPE = {
  GENERAL: '01',
  PROJECT: '02',
  EXCHANGE: '03'
};

// 銷售方式：01=檔購、02=CPRP、03=檔購看事後
export const BASE_SALES_MODE = {
  SPOT_BUY: '01',
  CPRP: '02',
  SPOT_BUY_CPRP: '03'
};

// 頻道類型：N=東森八頻、Y=亞洲台、K=新頻道'、B=東森八頻(報表用)
export const BASE_CHANNEL_GROUP = {
  EBC_CHANNEL: 'N',
  ASIA_CHANNEL: 'Y',
  NEW_CHANNEL: 'K',
  EBC_CHANNEL_R: 'B',
  ALL_CHANNEL: -1
};

//東森八頻
export const EBC_CHANNEL = {
  U5: 'U5',
  US: 'US',
  U2: 'U2',
  UD: 'UD',
  U1: 'U1',
  U6: 'U6',
  U4: 'U4',
  UP: 'UP'
};

// 專案類型首字代碼
export const BASE_PROJECT_FIRST_CODE = {
  EBC: 'B', // 東森專案
  NEW_CHANNEL: 'Z' // 新頻道專案
};

// 選項(是、否)
export const BASE_YES_NO_VALUE = {
  YES: 1,
  NO: 0
};

// 網頁開啟方式
export const BASE_OPEN_TARGET_VALUE = {
  TARGET_PARENT: 1,
  TARGET_BLANK: 0
};

// 左側選單類型
export const BASE_MENU_TYPE_VALUE = {
  MENU_PARENT: 1,
  MENU_CHILD: 2
};

// 執行匯出方式
export const BASE_EXPORT_FORMAT = {
  EXPORT_PDF: '1',
  EXPORT_EXCEL: '2',
  EXPORT_VIEWER: '3'
};

// 選項(啟用、停用)
export const BASE_ENABLE_STATE_VALUE = {
  ENABLE: 0,
  DISABLE: 1
};

// 選項(啟用、停用)
export const BASE_JUDGE_STATE_VALUE = {
  CHECK_ENABLE: 1,
  CHECK_UNABLE: 0
};

// 選項(啟用、停用)
export const BASE_SPORT_STATUS = {
  ENABLE: 0,
  DISABLE: 1,
  CANCEL: 8
};

// 在職狀態
export const BASE_JOB_STATUS = {
  IN_JOB: 0,
  LEAVE_JOB: 1,
  ALL_JOB: -1
};

// 預排轉託播狀態(0:未託播2:已託播9:刪除)
export const CUE_TYPE = {
  CUE_NOTYET_TYPE: 0,
  CUE_ALREADY_TYPE: 2,
  CUE_DELETE_TYPE: 9,
  CUE_ALL_TYPE: -1
};

// 發票對象
export const BASE_INVOICE_TARGET = {
  AGENT: '1',
  CUSTOMER: '2'
};

// 存取報表資料 key 名稱
export const ACCESS_REPORT_KEYS = {
  RTP109R: 'rpt109r',
  QA4100R: 'qac4100r',
  RTP106R: 'rpt106r',
  RPT107R: 'rpt107r',
  RTP103R: 'rpt103r',
  RTP110R: 'rpt110r',
  RPT111R: 'rpt111r',
  RPT108R: 'rpt108r',
  RPT112R: 'rpt112r',
  RPT115R: 'rpt115r',
  ES4500R: 'es4500r',
  ES4600R: 'es4600r',
  ES4700R: 'es4700r',
  Es4900R: 'es4900r',
  Es4800P: 'es4800p',
  RPTCPRP: 'rptcprp',
  CUE009R: 'cue009r',
  SP4500R: 'sp4500r',
  SP4600R: 'sp4600r',
  SP4700R: 'sp4700r',
  EVE113R: 'eve113r',
  EVE114R: 'eve114r',
  AR1000: 'ar1000'
};

// 多支材料設定方式
export const BASE_MULTI_MATERIAL_VALUE = {
  HORIZONTAL_ORDER: 'A', // 輪走(橫)
  AB_ORDER: 'B', // A+B材料
  VERTICAL_ORDER: 'C', // 輪走(直)
  DATE_COUNTDOWN_ORDER: 'D' // 指定日期
};

// 多支材料單據類型
export const BASE_MULTI_MATERIAL_TYPE = {
  NON_MULTI_MATERIAL: 'S', // 非多材料
  MAIN_MULTI_MATERIAL: 'M', // 多材料主單
  SUB_MULTI_MATERIAL: 'D' // 多材料子單
};

// 託播狀態
export const BASE_CUE_STATUS = {
  CUE_NOT_YET: '0', // 未託播
  CUE_ALREADY: '2', // 已託播
  CUE_DELETE: '9' // 刪除
};

// 審單狀態
export const BASE_CUE_REVIEW_STATUS = {
  REVIEW_CANCEL: '1', // 作廢
  REVIEW_NONE: '2' // 未審
};

// 運動賽事賽程級別
export const BASE_SPORT_PROGRAM_LEVEL = {
  S_LEVEL: 'S',
  A_LEVEL: 'A',
  B_LEVEL: 'B',
  Z_LEVEL: 'Z',
  ELSE_LEVEL: 'C' // 非賽事時間
};

// 運動賽事賽程級別分類群組
export const BASE_SPORT_LEVEL_CATEGORY = {
  FIRST_RUN: 1, // 首播
  REPEAT_RUN: 2, // 重播
  OTHER_RUN: 3, // 非賽事/字卡宣傳
  BEGIN_CLOSE_RUN: 99 // 開幕閉幕
};

// 是否為中華隊狀態(0:中華隊1:非中華隊2:未定)
export const BASE_SPORT_CHINESETAIPEI = {
  IS_CHINESETAIPEI: 'Y',
  NOT_CHINESETAIPEI: 'N',
  UNDECIDED: ''
};

// 運動賽事材料類型(0:賽程1:非賽程)
export const BASE_SPORT_MATERIAL_TYPE = {
  IS_SCHEDULE: '0',
  NOT_SCHEDULE: '1'
};

// 是否為可排酒類(0:可排1:不可排)
export const BASE_SPORT_ACHOLEL = {
  IS_ACHOLEL: 1,
  NOT_ACHOLEL: 0
};

// 檔購組合種類
export const BASE_SPOT_BUY_TYPE = {
  GENERAL: 0, // 一般
  SPORT: 1, // 運動賽事
  EVENT: 2 // 特殊事件
};

// 營管設定 > 進單權限類型
export const BASE_ECSETTING_AUTH_TYPE = {
  EVENT: 1, // 特殊事件
  SPORT: 2 // 運動賽事
};

// 營管設定 > 進單權限查詢類別
export const BASE_ECSETTING_AUTH_CATEGORY = {
  PROGRAM: 1, // 節目
  SALES: 2 // 業務員
};

// 發票帳本
export const BASE_INVOICE_BOOK = {
  EBC_BOOK: 'U81', //東森
  ASIA_BOOK: 'K81' //亞衛
};

//0=未寄送、1=已寄送、 -10 僅留存
export const BASE_INVOICE_DELIVERY_STATUS = {
  N: 0,
  Y: 1,
  S: -10
};

// 檔購組合指定的日期規則類型
export const BASE_SPOTBUY_DATE_RULE = {
  BY_DEFAULT: 1, // 依檔購組合起迄日期
  BY_PROJECT: 2, // 依專案起迄日期
  BY_SPORT_EVENT: 3 // 依運動賽事、特殊事件起迄日期
};

// 新頻道可補禁用
export const BASE_NEW_CHANNEL_DISABLE = ['K4', 'K5'];
// 新頻道可補不顯示
export const BASE_NEW_CHANNEL_HIDE = ['K6', 'K7', 'K8', 'K9', 'KZ', 'KT', 'KY'];
//預設排除部門
export const DEFAULT_EXCLUDE_DEPTS =
  (import.meta.env.MODE ?? '').toLowerCase() === BASE_BUILD_ENV.PROD
    ? 'AD'
    : '';
export const DEFAULT_AGENT_QUERY_MIN_LENGTH = 1;
export const DEFAULT_AGENT_ID_QUERY_LENGTH = 5;
export const DEFAULT_CUSTOMER_QUERY_MIN_LENGTH = 1;
export const DEFAULT_CUSTOMER_NO_QUERY_LENGTH = 5;
export const DEFAULT_MATERIAL_QUERY_MIN_LENGTH = 1;
export const DEFAULT_SALES_METHOD_FROM_PROJECT = 'B';
export const DEFAULT_RUNTIME_TIME_LENGTH = 4;
export const DEFAULT_WEBSITE_THEME_NAME = BASE_WEB_THEMES.DARK;
export const DEFAULT_REPORT_ACCOUNT_VERIFICATION_KEY = 'account';
export const DEFAULT_SPORT_REPORT_SPOTBUY_COLS_INCREASE = 1;
export const DEFAULT_SPORT_REPORT_EXTRA_SPOTBUY_COLS_INCREASE = 2;
export const WEBSITE_THEME_NAME_KEY = 'EbcSalesWebTheme';
export const FORECAST_SALES_ID_KEY = 'EbcForecastSalesId';
export const FORECAST_SALES_NAME_KEY = 'EbcForecastSalesName';
export const FORECAST_SALES_UNIT_KEY = 'EbcForecastSalesUnit';
export const SCHEDULINGTICKETS_SALES_ID_KEY = 'SchedulingTicketsSalesId';
export const SCHEDULINGTICKETS_SALES_NAME_KEY = 'SchedulingTicketsSalesName';
export const SCHEDULINGTICKETS_EDIT_SALES_ID_KEY =
  'SchedulingTicketsEditSalesId';
export const SCHEDULINGTICKETS_EDIT_SALES_NAME_KEY =
  'SchedulingTicketsEditSalesName';
export const SCHEDULINGTICKETS_UNIT_KEY = 'SchedulingTicketsSalesUnit';
export const SCHEDULINGTICKETS_SCHEDULE_ID_KEY = 'SchedulingTicketsScheduleId';
export const SCHEDULINGTICKETS_WORK_NO_KEY = 'SchedulingTicketsWorkNo';
export const SPORTSCHEDUL_SPORT_NAME_KEY = 'SportSchedulSportName';
export const DEFAULT_CUE_EVENT_STOP_REOPEN_SEC = 0;
export const DEFAULT_CUE_EVENT_SPOTBUY_COUNT = 3;
export const CUEEVENTPROG_EVENT_ID_KEY = 'CueEventProgEventId';
export const CUEEVENTPROG_EVENT_NAME_KEY = 'CueEventProgEventName';
