<template>
  <v-container>
    <v-row class="mt-10 ml-10">
      <CommonButton :button-type="'query'" class="ma-2"> 搜尋 </CommonButton>
    </v-row>
    <v-row class="mt-10 ml-10">
      <v-col> ERROR PAGE </v-col>
    </v-row>
  </v-container>
</template>
<script setup></script>
<style lang="scss" scoped>
:deep .el-table td.el-table__cell div {
  padding: 5px 5px !important;
}
</style>
