<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    text: {
      type: String,
      required: true
    }
  });

  const $el = ref();
  defineExpose({ $el });
</script>

<!-- https://next.vuetifyjs.com/en/components/sheets/ -->
<template>
  <v-sheet ref="$el" color="disableColor" rounded>
    <span>{{ props.text }}</span>
  </v-sheet>
</template>
