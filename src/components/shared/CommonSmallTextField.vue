<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    labelMinWidth: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: ''
    },
    // 是否為須輸入資料的必填要求
    isRequired: {
      type: Boolean,
      default: false
    },
    // v-model 輸入空白時使用預設值
    modelvalue: {
      type: [Number, String],
      default: 0
    },
    isError: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object,
      default: () => {}
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['update:modelvalue']);
  //const modelValue = toRef(props, 'emptyDefaultValue');

  const modelvalue = computed({
    get() {
      return props.modelvalue;
    },
    set(value) {
      emit('update:modelvalue', value);
    }
  });

  const widthCompute = () => {
    const length = `${props.labelMinWidth}px`;
    return props.labelMinWidth > 0
      ? `width: calc(100% - ${length})`
      : 'width: 100%';
  };
</script>

<!-- https://next.vuetifyjs.com/en/components/text-fields/ -->
<template>
  <label class="text-label">
    {{ props.label }}
    <el-input
      v-model="modelvalue"
      type="text"
      v-bind="$attrs"
      class="text-input"
      :class="{
        error: props.isError
      }"
      :style="widthCompute()"
      :disabled="props.isDisabled"
    >
      <template v-if="props.icon" #append>
        <el-button
          :icon="props.icon"
          v-bind="$attrs"
          @click="emit('btnClick')"
        /> </template></el-input
  ></label>
</template>
<style lang="scss" scoped>
  $dark-gray: #989898;
  $light-gray: #d7d7d7;
  .text-label {
    display: flex;
  }
  .text-input {
    border-radius: 5px;
    margin: 0 0.5em;
    padding: 0 5px;
    width: 100%;
  }
  .text-border {
    border: 1px solid $dark-gray;
  }
  :deep .error .el-input__wrapper {
    border: 1px solid #ef5350 !important;
  }
  :deep .error .el-input__wrapper .el-input__inner {
    color: #ef5350 !important;
  }
</style>
