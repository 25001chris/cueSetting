<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const props = defineProps({
    label: {
      type: String
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
    // 水平選項之間間隙
    radioSpace: {
      type: String,
      default: '20px'
    },
    // 選項是否水平排列
    isInline: {
      type: Boolean,
      default: false
    },
    // 是否隱藏提示和驗證錯誤訊息(boolean | 'auto')
    useHideDetails: {
      type: [Boolean, String],
      default: false
    }
  });

  const required = (v) => {
    return (
      (v !== null && v !== undefined) ||
      t('commonComponentText.common.required')
    );
  };
</script>

<!-- https://next.vuetifyjs.com/en/components/radio-buttons/ -->
<template>
  <div v-if="props.label != null">
    <span
      v-if="props.useRequireMark"
      class="require-mark text-red-darken-3 text-h6"
      >*</span
    >{{ props.label }}
  </div>
  <div>
    <v-radio-group
      v-bind="$attrs"
      :inline="props.isInline"
      :rules="props.isRequired ? [required] : []"
      :hide-details="props.useHideDetails"
    >
      <v-radio
        v-for="item in props.radioItems"
        :key="item"
        :class="props.isInline && 'radio-inline'"
        :label="item[props.itemTitle]"
        :value="item[props.itemValue]"
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<style scoped>
  .require-mark {
    vertical-align: middle;
  }

  .radio-inline:not(:last-child) {
    margin-right: v-bind('props.radioSpace');
  }
</style>
