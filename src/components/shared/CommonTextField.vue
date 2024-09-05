<script setup>
import { onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: null,
  },
  modelModifiers: {
    type: Object,
    default: () => ({}),
  },
  label: {
    type: String,
    default: "",
  },
  labelMinWidth: {
    type: String,
    default: "70px",
  },
  placeholder: {
    type: String,
    default: "",
  },
  // textbox後Label
  appendLabel: {
    type: String,
    default: "",
  },
  // 是否強制顯示必填要求
  mustRequired: {
    type: Boolean,
    default: false,
  },
  // 是否為須輸入資料的必填要求
  isRequired: {
    type: Boolean,
    default: false,
  },
  // 最小數值要求
  minNumRequired: {
    type: Number,
    default: null,
  },
  // 最大數值要求
  maxNumRequired: {
    type: Number,
    default: null,
  },
  // 是否使用必填欄位標記
  useRequireMark: {
    type: Boolean,
    default: false,
  },
  // v-model 輸入空白時使用預設值
  emptyDefaultValue: {
    type: [Number, String],
    default: null,
  },
  // 是否隱藏數值箭頭功能
  hideNumberArrow: {
    type: Boolean,
    default: false,
  },
  labelAlign: {
    type: String,
    default: "left",
  },
  // 外部元件自訂驗證邏輯
  customRules: {
    type: Array,
    default: () => [],
  },
  // INFO提示訊息
  infoMessage: {
    type: String,
    default: "",
  },
});

//const emit = defineEmits(['update:modelValue']);

onMounted(() => {});
</script>

<!-- https://next.vuetifyjs.com/en/components/text-fields/ -->
<template>
  <v-text-field
    ref="$el"
    :model-value="inputModelValue"
    variant="outlined"
    :label="props.placeholder"
    :rules="componentCustomRules"
    @update:model-value="updateModelValueEvent"
    density="compact"
    hide-details
  >
    <template #prepend>
      <span class="span-label"> {{ props.label }} </span>
    </template>
  </v-text-field>
</template>

<style lang="scss" scoped>
.span-label {
  min-width: v-bind("props.labelMinWidth");
  text-align: v-bind("props.labelAlign");
}
.require-mark {
  vertical-align: middle;
}
.cursor-pointer {
  cursor: pointer;
}

// 移除數值欄位功能箭頭
.hideNumberArrow {
  :deep() {
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      appearance: textfield;
    }
  }
}

.showInfoMessage {
  pointer-events: auto !important;
}

:deep .v-icon {
  opacity: var(--v-medium-emphasis-opacity) !important;
}
</style>
