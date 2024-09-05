<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    // 設定按鈕顏色
    color: {
      type: [String, null],
      default: null
    },
    // 設定按鈕類型
    type: {
      type: [String, null],
      default: null
    },
    // 設定按鈕樣式
    variant: {
      type: [String, null],
      default: null
    },
    // 設定按鈕陰影
    elevation: {
      type: [Number, String, null],
      default: null
    },
    // 設定按鈕大小
    density: {
      type: [String, null],
      default: null
    },
    // 設定字體粗細
    fontWeight: {
      type: [Number, String, null],
      default: null
    },
    // 設定按鈕型別
    buttonType: {
      type: [String, null],
      default: 'query'
    }
  });

  const $el = ref();
  defineExpose({ $el });

  const componentConfig = {
    delayEnableMillis: 1500
  };

  // 定義按鈕型別樣式
  const buttonObj = {
    // 查詢
    query: {
      type: 'button',
      color: 'queryButton',
      variant: 'elevated',
      elevation: 0,
      density: 'default',
      fontWeight: 'normal'
    },
    // 編輯
    edit: {
      type: 'button',
      color: 'editButton',
      variant: 'elevated',
      elevation: 0,
      density: 'default',
      fontWeight: 'normal'
    },
    // 報表
    report: {
      type: 'button',
      color: 'light-green-lighten-4',
      variant: 'elevated',
      elevation: 1,
      density: 'default',
      fontWeight: 'bold'
    },
    // 次要
    minor: {
      type: 'button',
      color: 'editButton',
      variant: 'outlined',
      elevation: 2,
      density: 'default',
      fontWeight: 'normal'
    },
    // Excel
    excel: {
      type: 'button',
      color: 'editButton',
      variant: 'text',
      elevation: 0,
      density: 'compact',
      fontWeight: 'bold'
    },
    // 禁用
    disable: {
      type: 'button',
      color: 'disableButton',
      variant: 'outlined',
      elevation: 0,
      density: 'default',
      fontWeight: 'normal'
    },
    // 刪除
    delete: {
      type: 'button',
      color: 'deleteButton',
      variant: 'elevated',
      elevation: 0,
      density: 'default',
      fontWeight: 'normal'
    },
    // 刪除Disabled
    deleteDisabled: {
      type: 'button',
      color: 'primary',
      variant: 'elevated',
      elevation: 0,
      density: 'default',
      fontWeight: 'normal'
    },
    // 取消
    cancel: {
      type: 'button',
      color: 'cancelButton',
      variant: 'elevated',
      elevation: 0,
      density: 'default',
      fontWeight: 'normal'
    },
    // 清除
    clear: {
      type: 'button',
      color: 'clearButton',
      variant: 'outlined',
      elevation: 0,
      density: 'default',
      fontWeight: 'normal'
    }
  };

  const baseDisabled = ref(false);

  // 按鈕類型
  const type = computed(() => {
    return props.type || buttonObj[props.buttonType].type;
  });

  // 按鈕顏色
  const color = computed(() => {
    return props.color || buttonObj[props.buttonType].color;
  });

  // 按鈕陰影
  const elevation = computed(() => {
    return props.elevation || buttonObj[props.buttonType].elevation;
  });

  // 按鈕大小
  const density = computed(() => {
    return props.density || buttonObj[props.buttonType].density;
  });

  // 字體粗細
  const fontWeight = computed(() => {
    return props.fontWeight || buttonObj[props.buttonType].fontWeight;
  });

  // 按鈕樣式
  const variant = computed(() => {
    return props.variant || buttonObj[props.buttonType].variant;
  });

  // 判斷按鈕類型
  const isButtonType = computed(() => {
    return (n) => {
      return props.buttonType == n;
    };
  });

  // 按鈕點擊事件
  // 點擊後延遲啟用按鈕並立即停止事件冒泡，預防連續點擊
  const baseClick = (event) => {
    if (baseDisabled.value) {
      event.stopImmediatePropagation();
    } else {
      baseDisabled.value = true;
      const timeout = setTimeout(() => {
        baseDisabled.value = false;
        clearTimeout(timeout);
      }, componentConfig.delayEnableMillis);
    }
  };
</script>

<!-- https://next.vuetifyjs.com/en/components/buttons/ -->
<template>
  <v-btn
    ref="$el"
    :type="type"
    :color="color"
    :variant="variant"
    :elevation="elevation"
    :density="density"
    :class="{
      'text-green-darken-3': isButtonType('report')
    }"
    :style="{
      'font-weight': fontWeight,
      'border-width': variant == 'outlined' ? '2px' : '0px',
      'text-decoration-line': variant == 'text' ? 'underline' : 'none',
      'background-color': variant == 'outlined' ? 'white' : ''
    }"
    :disabled="baseDisabled"
    @click="baseClick"
  >
    <slot></slot>
  </v-btn>
</template>
<style scoped>
  button.v-btn[disabled] {
    /* 按鈕disable 透明度改為0.36 */
    opacity: 0.36 !important;
  }
</style>
