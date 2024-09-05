<script setup>
  import { computed, watch, nextTick } from 'vue';

  const props = defineProps({
    openSnackbar: {
      type: Boolean,
      required: true
    },
    snackbarContent: {
      type: [String, Number],
      default: null
    }
  });

  const emit = defineEmits(['update:openSnackbar']);

  const snackbarModelValue = computed({
    get() {
      return props.openSnackbar;
    },
    set(value) {
      emit('update:openSnackbar', value);
    }
  });

  // snackbar 若內容有變更且正在顯示時，關閉並重新顯示新內容
  watch(
    () => props.snackbarContent,
    () => {
      if (snackbarModelValue.value) {
        snackbarModelValue.value = false;
        nextTick(() => {
          snackbarModelValue.value = true;
        });
      }
    }
  );
</script>

<!-- https://vuetifyjs.com/en/components/snackbars/ -->
<!-- override style 使元件位置置頂置中 -->
<template>
  <v-snackbar
    v-model="snackbarModelValue"
    location="top"
    z-index="999999"
    min-width="40vw"
    style="--v-layout-top: 0; --v-layout-left: 0"
  >
    <!-- eslint-disable vue/no-v-html -->
    <span v-html="props.snackbarContent"></span>
    <template #actions>
      <v-btn type="text" color="white" @click="snackbarModelValue = false">
        {{ $t('commonComponentText.button.close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style lang="scss" scoped>
  // 加大內容文字
  :deep(.v-snackbar__content) {
    font-size: large;
  }
</style>
