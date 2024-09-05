import colors from 'vuetify/lib/util/colors';

// vuetify 顏色參考：https://vuetifyjs.com/en/styles/colors/#material-colors
// base colors
const baseColors = {
  primary: colors.grey.darken4,
  secondary: colors.shades.white,
  queryButton: colors.lightBlue.darken4, // 查詢按鈕
  cancelButton: colors.grey.lighten4, // 取消按鈕
  resetButton: colors.grey.lighten2, // 重置按鈕
  editButton: colors.green.darken2, // 編輯按鈕
  extraButton: colors.orange.darken2, // 額外按鈕
  backButton: colors.grey.lighten4, // 返回按鈕
  clearButton: colors.red.lighten3, // 清除按鈕
  clearButton2: colors.red.lighten1, // 清除按鈕2
  reportButton: colors.green.lighten4, // 匯出按鈕
  disableButton: colors.grey.darken3, // 禁用按鈕
  deleteButton: colors.red.lighten1, // 刪除按鈕
  disableColor: colors.grey.lighten1, // 禁用顏色
  tipsColor: colors.red.lighten1, // 提示文字顏色
  tableHeaderText: colors.grey.darken4, // 表格表頭文字顏色
  tableHeaderSortText: colors.indigo.darken2, // 表格排序文字顏色
  tableHeaderBackground: colors.grey.lighten1, // 表格表頭背景色  light-blue-accent-1
  commonRedColor: colors.red.lighten1, // 一般紅色使用
  scrollTopButton: colors.lightBlue.darken3 // 滾動至頂部按鈕
};

// override base light or dark colors here
const customLightColors = {
  ...baseColors,
  tipsTextColor: colors.blue.darken2, // 提示文字顏色 (藍色)
  dialogBgColor: colors.grey.lighten5, // 對話框背景顏色
  checkBoxBorderColor: colors.grey.darken4, // checkbox 邊框顏色
  tabBorderColor: colors.grey.darken1, // 選中tab邊框顏色
  disableInput: colors.grey.lighten2, // 輸入框禁用
  errorDisableInput: colors.grey.lighten2, // 警告輸入框禁用
  tableRowSelected: colors.blue.lighten3, // 表格列選中顏色
  defaultTaxtColor: colors.shades.black, // 預設淺色模式文字顏色
  defaultBgColor: colors.shades.white, // 預設淺色模式背景顏色
  tableRowBgColor: colors.grey.lighten3, // 表格列背景色
  loadingTextColor: colors.yellow.darken1, // loading 文字顏色
  toolbarBgColor: colors.grey.darken4, // 提示訊息背景色
  checkBoxBg: colors.blue.darken2, // checkbox 背景顏色
  messageToolBg: colors.grey.lighten5 // 消息彈窗背景色
};
const customDarkColors = {
  ...baseColors,
  tipsTextColor: colors.yellow.accent2, // 提示文字顏色 (黃色)
  dialogBgColor: colors.grey.darken4, // 對話框背景顏色
  checkBoxBorderColor: colors.grey.lighten5, // checkbox 邊框顏色
  tabBorderColor: colors.grey.lighten4, // 選中tab邊框顏色
  disableInput: colors.grey.darken1, // 輸入框禁用
  errorDisableInput: colors.shades.black, // 警告輸入框禁用
  tableRowSelected: colors.blue.darken3, // 可拖動項目背景色
  defaultTaxtColor: colors.shades.white, // 預設深色模式文字顏色
  defaultBgColor: colors.shades.black, // 預設深色模式背景顏色
  tableRowBgColor: colors.grey.darken3, // 表格列背景色
  loadingTextColor: colors.yellow.lighten1, // loading 文字顏色
  toolbarBgColor: colors.grey.lighten5, // 提示訊息背景色
  checkBoxBg: colors.amber.accent3, // checkbox 背景顏色
  messageToolBg: colors.grey.darken3 // 消息彈窗背景色
};

export default {
  defaultTheme: 'light', // default Theme switch
  themes: {
    light: {
      dark: false,
      colors: customLightColors
    },
    dark: {
      dark: true,
      colors: customDarkColors
    }
  }
};
