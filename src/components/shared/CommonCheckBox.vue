<script setup>
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  const props = defineProps({
    // 標籤文字
    label: {
      type: String,
      default: ''
    },
    // 標籤寬度
    labelMinWidth: {
      type: String,
      default: '70px'
    },
    // CheckBox選項
    checkBoxItems: {
      type: Array,
      default: () => []
    },
    // 是否使用必填欄位標記
    useRequireMark: {
      type: Boolean,
      default: false
    },
    // label對齊方式
    labelAlign: {
      type: String,
      default: 'left'
    },
    // 綁定已選清單
    selectListData: {
      type: Array,
      default: () => []
    },
    // 設定驗證測試規則
    rules: {
      type: Array,
      default: () => []
    },
    // 顯示不要disabled的項目
    useNotDisabledItems: {
      type: Array,
      default: () => []
    },
    // 是否禁用
    isReadonly: {
      type: Boolean,
      default: false
    }
  });

  const $el = ref();
  const emit = defineEmits(['update:selectListData']);
  defineExpose({ $el });

  // props 雙向綁定
  const selectListData = computed({
    get() {
      return props.selectListData;
    },
    set(value) {
      emit('update:selectListData', value);
    }
  });

  const isError = computed(() => {
    return props.rules.length > 0 && typeof props.rules[0] !== 'boolean';
  });

  const isDisabled = (itemValue) => {
    let isDisabled = false;

    if (props.useNotDisabledItems.length === 0) isDisabled = false;
    else isDisabled = !props.useNotDisabledItems.includes(itemValue);

    return isDisabled;
  };
</script>

<!-- https://next.vuetifyjs.com/en/components/checkboxes/ -->
<template>
  <div class="i-flex" :class="{ 'text-red-darken-3': isError }">
    <span class="span-label"
      ><span
        v-if="props.useRequireMark"
        class="require-mark text-red-darken-3 text-h6"
        >*</span
      >{{ props.label }}
    </span>
    <v-checkbox
      v-for="(item, index) in checkBoxItems"
      ref="$el"
      :key="index"
      v-model="selectListData"
      :value="item.itemValue"
      :label="item.itemTitle"
      :rules="props.rules"
      :hide-details="index !== checkBoxItems.length - 1"
      :disabled="isDisabled(item.itemValue)"
      :readonly="props.isReadonly"
    ></v-checkbox>
  </div>
</template>

<style lang="scss" scoped>
  .i-flex {
    display: inline-flex;
    align-items: center;
  }
  .span-label {
    min-width: v-bind('props.labelMinWidth');
    text-align: v-bind('props.labelAlign');

    .require-mark {
      vertical-align: middle;
    }
  }

  :deep(.v-input) {
    position: relative;
    min-width: 100px;
  }
  :deep(.v-input__details) {
    position: absolute;
  }
</style>
