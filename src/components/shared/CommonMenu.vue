<script setup>
  import { ref } from 'vue';
  import CommonButton from '@/components/shared/CommonButton.vue';
  const emit = defineEmits(['update:modelValue']);
  const props = defineProps({
    // 設定按鈕顏色
    color: {
      type: [String, null],
      default: null
    },
    // 設定按鈕型別
    buttonType: {
      type: [String, null],
      default: 'query'
    },
    buttonText: {
      type: [String, null],
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  });
  const $el = ref();
  defineExpose({ $el });
  const itemAction = (item) => {
    emit('update:modelValue', item.value);
  };
</script>
<template>
  <v-menu>
    <template #activator="{ props }">
      <CommonButton class="ma-3" button-type="report" v-bind="props">{{
        buttonText
      }}</CommonButton>
    </template>
    <v-list class="listItem">
      <v-list-item
        v-for="(item, index) in props.items"
        :key="index"
        class="clickBtn"
        @click="itemAction(item)"
      >
        <v-list-item-title class="listItemTitle">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<style lang="scss" scoped>
  .clickBtn {
    cursor: pointer;
  }
  .listItemTitle {
    font-size: 14px !important;
  }
  .listItem :hover {
    background-color: #e0e0e0;
    color: black !important;
  }
</style>
