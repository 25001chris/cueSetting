<!-- HTML Input 原生 datePicker 元件 -->
<script setup>
  import { computed, ref, getCurrentInstance, watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { isStringNullOrBlank } from '@/utils/commonTools.js';
  import {
    DEFAULT_HTML_DATE_FORMAT,
    DEFAULT_DATE_FORMAT,
    DEFAULT_HTML_DATEPICKER_MIN_DATE,
    DEFAULT_HTML_DATEPICKER_MAX_DATE
  } from '@/constants.js';
  import dateTool from '@/utils/dateTool';
  import CommonButton from '@/components/shared/CommonButton.vue';

  const props = defineProps({
    //預設日期
    startDate: {
      type: String,
      default: null
    },
    // 最小可選日期
    minDate: {
      type: String,
      default: null
    },
    // 最大可選日期
    maxDate: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    labelMinWidth: {
      type: String,
      default: '50px'
    },
    placeholder: {
      type: String,
      default: null
    },
    //是否為必填欄位
    isRequired: {
      type: Boolean,
      default: false
    },
    // 是否使用清除按鈕
    useClear: {
      type: Boolean,
      default: false
    },
    // 是否使用必填欄位標記
    useRequireMark: {
      type: Boolean,
      default: false
    },
    // 外部元件自訂驗證邏輯
    customRules: {
      type: Array,
      default: () => []
    },
    labelAlign: {
      type: String,
      default: 'left'
    }
  });

  const emit = defineEmits(['update:startDate']);

  const { $moment } = getCurrentInstance().proxy;
  const { t } = useI18n();
  const { dateChange } = dateTool();
  const minDateValue = ref(DEFAULT_HTML_DATEPICKER_MIN_DATE);
  const maxDateValue = ref(DEFAULT_HTML_DATEPICKER_MAX_DATE);
  const $el = ref();
  defineExpose({ $el });

  const emptyRequireRule = (v) => {
    return !!v || t('commonComponentText.common.required');
  };

  const componentCustomRules = computed(() => {
    const rules = [];

    if (props.isRequired) {
      rules.push(emptyRequireRule);
    }

    if (props.customRules.length > 0) {
      rules.push(...props.customRules);
    }

    return rules;
  });

  // props 雙向綁定
  const startDateModelValue = computed({
    get() {
      if (isStringNullOrBlank(props.startDate)) {
        // 無日期資料
        return null;
      } else if ($moment(props.startDate, 'DATE').isValid()) {
        // 驗證日期格式正確，回傳 HTML 5 Date 需要的格式
        return dateChange(props.startDate, DEFAULT_HTML_DATE_FORMAT);
      } else {
        // 有日期字串但驗證日期格式錯誤，回傳原字串不處理
        return props.startDate;
      }
    },
    set(value) {
      if (isStringNullOrBlank(value)) {
        // 無日期資料
        emit('update:startDate', null);
      } else if ($moment(value, 'DATE').isValid()) {
        // 驗證日期格式正確，回傳 EBC 需要的格式
        emit('update:startDate', dateChange(value, DEFAULT_DATE_FORMAT));
      } else {
        // 有日期字串但驗證日期格式錯誤，回傳原字串不處理
        emit('update:startDate', value);
      }
    }
  });

  // const minDateModelValue = computed(() =>
  //   isStringNullOrBlank(props.minDate)
  //     ? null
  //     : dateChange(props.minDate, DEFAULT_HTML_DATE_FORMAT)
  // );

  // const maxDateModelValue = computed(() =>
  //   isStringNullOrBlank(props.maxDate)
  //     ? null
  //     : dateChange(props.maxDate, DEFAULT_HTML_DATE_FORMAT)
  // );

  const setMinMaxDateEvent = () => {
    minDateValue.value = dateChange(
      props.minDate ?? DEFAULT_HTML_DATEPICKER_MIN_DATE,
      DEFAULT_HTML_DATE_FORMAT
    );

    maxDateValue.value = dateChange(
      props.maxDate ?? DEFAULT_HTML_DATEPICKER_MAX_DATE,
      DEFAULT_HTML_DATE_FORMAT
    );
  };
</script>

<!--https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date-->
<template>
  <v-text-field
    ref="$el"
    v-model="startDateModelValue"
    :label="props.placeholder"
    :rules="componentCustomRules"
    type="date"
    :min="minDateValue"
    :max="maxDateValue"
    @focus="setMinMaxDateEvent"
    @blur="setMinMaxDateEvent"
  >
    <template v-if="props.label != null" #prepend>
      <span class="span-label"
        ><span
          v-if="props.useRequireMark"
          class="require-mark text-red-darken-3 text-h6"
          >*</span
        ><span>{{ props.label }}</span>
      </span>
    </template>

    <template v-if="props.useClear" #append>
      <CommonButton
        type="button"
        :text="$t('commonComponentText.button.clear')"
        :color="'resetButton'"
        :disabled="startDateModelValue == null"
        @click="startDateModelValue = null"
      >
      </CommonButton>
    </template>
  </v-text-field>
</template>

<style lang="scss" scoped>
  .span-label {
    min-width: v-bind('props.labelMinWidth');
    text-align: v-bind('props.labelAlign');

    .require-mark {
      vertical-align: middle;
    }
  }

  :deep(.v-field__input) {
    display: inline-block !important;
  }
</style>
