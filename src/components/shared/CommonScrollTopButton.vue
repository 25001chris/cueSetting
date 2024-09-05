<script setup>
  import { ref } from 'vue';
  import { mdiChevronUp } from '@mdi/js';

  const componentConfig = {
    defaultLayoutItemSize: 0,
    defaultScrollY: 200,
    defaultElevation: 8,
    defaultButtonColor: 'scrollTopButton'
  };
  const isButtonShow = ref(false);

  const onScrollEvent = () => {
    isButtonShow.value = window.scrollY > componentConfig.defaultScrollY;
  };

  const onClickEvent = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>

<template>
  <v-layout-item
    v-show="isButtonShow"
    v-scroll="onScrollEvent"
    model-value
    position="bottom"
    class="text-end pointer-events-none"
    :size="componentConfig.defaultLayoutItemSize"
  >
    <div class="ma-4">
      <v-btn
        :icon="mdiChevronUp"
        class="mt-auto mr-10 pointer-events-initial"
        size="large"
        :color="componentConfig.defaultButtonColor"
        :elevation="componentConfig.defaultElevation"
        @click="onClickEvent"
      />
    </div>
  </v-layout-item>
</template>

<style scoped>
  .pointer-events-none {
    pointer-events: none;
  }

  .pointer-events-initial {
    pointer-events: initial;
  }
</style>
