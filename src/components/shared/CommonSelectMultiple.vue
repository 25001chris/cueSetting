<script setup>
  import { ref, watch, computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import CommonSelect from './CommonSelect.vue';
  import { useSharedStore } from '@/store/shared/sharedStore.js';
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    itemList: {
      type: Array,
      default: () => []
    },
    // INFO提示訊息
    infoMessage: {
      type: String,
      default: ''
    }
  });

  const itemArray = ref([]);
</script>

<template>
  <CommonSelect
    v-model="itemArray"
    :label="label"
    :select-items="itemList"
    item-title="salesname"
    item-value="salesid"
    chips
    clearable
    multiple
    v-bind="$attrs"
    :info-message="infoMessage"
  />
</template>

<style></style>
