<script setup>
  import { computed, ref } from 'vue';
  import CommonButton from '@/components/shared/CommonButton.vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const props = defineProps({
    startDate: {
      //預設日期
      type: Date,
      default: null
    },
    minDate: {
      //開始日期
      type: Date,
      default: null
    },
    maxDate: {
      //結束日期
      type: Date,
      default: null
    },
    isDisabledWeekend: {
      //六、日是否需disabled
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    labelMinWidth: {
      type: String,
      default: '50px'
    },
    placeholder: {
      type: String
      //required: true
    },
    //是否為必填欄位
    isRequired: {
      type: Boolean,
      default: false
    },
    // 輸入框垂直密度：default(大)、comfortable(中)、compact(小)
    inputDensity: {
      type: String,
      default: 'default'
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
    //label對齊方式
    labelAlign: {
      type: String,
      default: 'left'
    },
    // 外部元件自訂驗證邏輯
    customRules: {
      type: Array,
      default: () => []
    }
  });

  const emit = defineEmits(['update:startDate']);

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
      return props.startDate;
    },
    set(value) {
      emit('update:startDate', value);
    }
  });
</script>

<!--https://vcalendar.io/datepicker.html#input-->
<template>
  <v-date-picker
    ref="$el"
    v-model="startDateModelValue"
    :disabled-dates="props.isDisabledWeekend ? { weekdays: [1, 7] } : []"
    :min-date="props.minDate"
    :max-date="props.maxDate"
  >
    <template #default="{ inputValue, togglePopover }">
      <v-text-field
        v-model="startDateModelValue"
        variant="outlined"
        :label="props.placeholder"
        :value="inputValue"
        :rules="componentCustomRules"
        :density="props.inputDensity"
        v-bind="$attrs"
        @click="togglePopover"
      >
        <template #prepend>
          <span class="span-label"
            ><span
              v-if="props.useRequireMark"
              class="require-mark text-red-darken-3 text-h6"
              >*</span
            >{{ props.label }}
          </span>
        </template>

        <template v-if="props.useClear" #append>
          <CommonButton
            type="button"
            :text="$t('commonComponentText.button.clear')"
            :color="'resetButton'"
            :disabled="!inputValue"
            @click="startDateModelValue = null"
          >
          </CommonButton>
        </template>
      </v-text-field>
    </template>
  </v-date-picker>
</template>

<style lang="scss" scoped>
  .span-label {
    min-width: v-bind('props.labelMinWidth');
    text-align: v-bind('props.labelAlign');

    .require-mark {
      vertical-align: middle;
    }
  }
</style>
