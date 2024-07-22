<template>
  <div>
    {{ title }}
    <el-input
      v-model="textarea"
      style="display: flex"
      :rows="rowNum"
      type="textarea"
      placeholder="Please input1"
    >
      <template #prepend></template>
    </el-input>
    <el-input
      v-if="props.isInput"
      v-model="input"
      style="display: flex"
      placeholder="Please input"
      class="mt-2"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  isInput: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  rowNum: {
    type: Number,
    default: 5,
  },
});

const textarea = ref("");
const input = ref("");
</script>

<style scoped lang="scss"></style>
