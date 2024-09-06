import { getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';

//組件使用 : https://element.eleme.io/#/zh-CN/component/message-box
export default function () {
  const { $alert, $confirm, $prompt } = getCurrentInstance().proxy;
  const { t } = useI18n();

  // 預設彈窗訊息內容
  const defaultMessage = t('commonComponentText.message.defaultMessage');

  class AlertOption {
    constructor(options = {}) {
      this.title =
        options.title || t('commonComponentText.message.defaultTitle');
      this.option = {
        type: options.type || t('commonComponentText.message.defaultType'),
        confirmButtonText:
          options.confirmButtonText || t('commonComponentText.button.done'),
        cancelButtonText:
          options.cancelButtonText || t('commonComponentText.button.cancel'),
        callback: options.callback || null,
        dangerouslyUseHTMLString: true,
        customClass: 'el-messagebox-force-top el-messagebox-bg' // 強制讓 element ui messageBox 位於最上層(class in app.scss)
      };
    }

    // 加入自訂OPTION
    add(element) {
      if (!element) return;
      const arr = Object.keys(element);
      arr.forEach((a) => {
        this.option[a] = element[a];
      });
    }
  }

  // Alert呼叫組件
  /** alertMessage(text,{option});
   * @param {String} message message文字
   * @param {*} option messageTool控制項
   */
  const alertMessage = (message = defaultMessage, option) => {
    const alertOption = new AlertOption(option);
    alertOption.add(option);
    $alert(message, alertOption.title, alertOption.option);
  };

  // Confirm呼叫組件
  /** confirmMessage(text,{option}).then(() => {}).catch(() => {});
   * @param {String} message message文字
   * @param {*} option messageTool控制項
   * @returns confirm呼叫器
   */
  const confirmMessage = (message = defaultMessage, option) => {
    const alertOption = new AlertOption(option);
    alertOption.add(option);
    return $confirm(message, alertOption.title, alertOption.option);
  };

  // Prompt呼叫組件
  /** promptMessage(text,{option}).then(() => {}).catch(() => {});
   * @param {String} message message文字
   * @param {*} option messageTool控制項
   * @returns prompt呼叫器
   */
  const promptMessage = (message = defaultMessage, option) => {
    const alertOption = new AlertOption(option);
    alertOption.add(option);
    return $prompt(message, alertOption.title, alertOption.option);
  };

  return {
    alertMessage,
    confirmMessage,
    promptMessage
  };
}
