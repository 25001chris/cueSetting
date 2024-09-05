<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="4">
        <CommonField label="計費金額" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="回沖前期" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="託播預算" label-min-width="82px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <CommonField label="GRP" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="CPRP" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="佣金回饋" label-min-width="82px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <CommonField label="合計" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="檔次" label-min-width="82px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <CommonField label="差異" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="比例" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="產值計算" label-min-width="82px" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <CommonField label="PT GRP" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="PT比例" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="審單沖帳" label-min-width="82px" />
      </v-col>
    </v-row>
    <v-row style="background-color: #bbb !important">
      <v-col cols="4">
        <CommonField label="計費(合)" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="回沖(合)" label-min-width="82px" />
      </v-col>
      <v-col cols="4">
        <CommonField label="預算(合)" label-min-width="82px" />
      </v-col>
    </v-row>
    <v-row style="background-color: #bbb !important">
      <v-col cols="4"> </v-col>
      <v-col cols="4"> </v-col>
      <v-col cols="4">
        <CommonField label="產值(合)" label-min-width="82px" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
import CommonField from "@/components/shared/CommonTextField.vue";
</script>
<style scoped>
.fill-height {
  height: 100%;
}
:deep .el-input__wrapper {
  /* background-color: black; */
  border-radius: 0 !important;
}
:deep .el-input-group__prepend {
  color: white !important;
}
.v-col {
  padding: 6px 10px;
}
:deep .el-input-group__prepend {
  color: black !important;
}
</style>
