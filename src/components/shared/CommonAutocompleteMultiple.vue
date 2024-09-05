<script setup>
  import { ref, watch, computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import CommonSelect from './CommonSelect.vue';
  import { useSharedStore } from '@/store/shared/sharedStore.js';
  import { mdiInformation } from '@mdi/js';
  const $emit = defineEmits(['update:clearData']);
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
    },
    // 是否使用必填欄位標記
    useRequireMark: {
      type: Boolean,
      default: false
    },
    isBg: {
      type: Boolean,
      default: false
    }
  });

  const itemArray = ref([]);
</script>

<template>
  <v-autocomplete
    v-model="itemArray"
    :items="itemList"
    item-title="salesname"
    item-value="salesid"
    chips
    clearable
    closable-chips
    multiple
    hide-no-data
    v-bind="$attrs"
    :info-message="infoMessage"
    :class="{ isBg: props.isBg }"
    @click:clear="$emit('update:clearData')"
  >
    <template v-if="props.label != null" #prepend>
      <span class="span-label"
        ><span
          v-if="props.useRequireMark"
          class="require-mark text-red-darken-3 text-h6"
          >*</span
        >{{ props.label }}</span
      >
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
  </v-autocomplete>
</template>

<style lang="scss" scoped>
  .isBg :deep .v-field--variant-filled .v-field__overlay {
    background-color: white !important;
    opacity: 1 !important;
  }
</style>
