<template>
  <div>
    <h5>{{ props.title }}</h5>
    <el-checkbox-group v-model="checkList" class="checkBox">
      <el-checkbox label="ET-N" value="ET-N" size="small" />
      <el-checkbox label="ETTV" value="ETTV" size="small" />
      <el-checkbox label="YOYO" value="YOYO" size="small" />
      <el-checkbox label="ET-M" value="ET-M" size="small" />
      <el-checkbox label="ET-WM" value="ET-WM" size="small" />
      <el-checkbox label="EFNC" value="ValueF" size="small" />
      <el-checkbox label="ET-D" value="ET-D" size="small" />
      <el-checkbox label="STV" value="STV" size="small" />
    </el-checkbox-group>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
:deep .el-checkbox {
  min-width: 60px;
}

.checkBox {
  border: 1px solid #dcdfe6;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}
</style>
