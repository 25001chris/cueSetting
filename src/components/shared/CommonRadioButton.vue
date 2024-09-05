<script setup>
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { mdiInformation } from '@mdi/js';

  const { t } = useI18n();

  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    labelMinWidth: {
      type: String,
      default: '70px'
    },
    //排列方式 True:水平  false:垂直
    isinline: {
      type: Boolean,
      default: true
    },
    // radioItems: {
    //   type: Array,
    //   required: true,
    //   validator(items) {
    //     const isValidObj = items.every(
    //       (item) =>
    //         // eslint-disable-next-line no-prototype-builtins
    //         item.hasOwnProperty('radioText') && item.hasOwnProperty('radioValue')
    //     );

    //     if (!isValidObj) {
    //       console.warn('The radioItems should have radioText and radioValue');
    //     }
    //     return isValidObj;
    //   }
    // },
    radioItems: {
      type: Array,
      default: () => []
    },
    itemTitle: {
      type: [String, Number, Boolean],
      required: true
    },
    itemValue: {
      type: [String, Number, Boolean],
      required: true
    },
    //是否為必填欄位
    isRequired: {
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
    },
    radioItemSpace: {
      type: String,
      default: '10px'
    },
    // INFO提示訊息
    infoMessage: {
      type: String,
      default: ''
    }
  });

  const $el = ref();
  defineExpose({ $el });

  const emptyRequireRule = (v) => {
    return v != null || t('commonComponentText.common.required');
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
</script>

<!-- https://next.vuetifyjs.com/en/components/radio-buttons/ -->
<template>
  <v-radio-group
    ref="$el"
    class="commonRadioButton"
    :inline="props.isinline"
    :rules="componentCustomRules"
  >
    <template #label>
      <span class="span-label"
        ><span
          v-if="props.useRequireMark"
          class="require-mark text-red-darken-3 text-h6"
          >*</span
        >{{ props.label }}
      </span>
      <v-tooltip
        v-if="props.infoMessage"
        activator="parent"
        location="top"
        :text="props.infoMessage"
        content-class="tooltip-background-color"
      >
        <template #activator>
          <v-icon :icon="mdiInformation" class="cursor-pointer"></v-icon>
        </template>
      </v-tooltip>
    </template>
    <v-radio
      v-for="item in props.radioItems"
      :key="item"
      class="radio-style"
      :label="item[props.itemTitle]"
      :value="item[props.itemValue]"
    ></v-radio>
  </v-radio-group>
</template>

<style lang="scss" scoped>
  .span-label {
    min-width: v-bind('props.labelMinWidth');
    text-align: v-bind('props.labelAlign');

    .require-mark {
      vertical-align: middle;
    }
  }

  .radio-style {
    vertical-align: middle;
    margin-right: v-bind('props.radioItemSpace');
  }
</style>
