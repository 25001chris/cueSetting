<template>
  <v-col cols="12">
    <v-row class="mt-1 mb-1">
      <v-col cols="2">
        <CommonField label="年月" label-min-width="80px" />
      </v-col>
      <v-col cols="1">
        <el-tag type="info" effect="plain" class="mr-1">B</el-tag>
      </v-col>
      <v-col cols="3">
        <CommonField label="評估單號" label-min-width="80px" />
      </v-col>
      <v-col cols="3">
        <el-tag type="primary" class="mr-1">Tag 1</el-tag>
        <el-tag type="success" class="mr-1">Tag 2</el-tag>
        <el-tag type="info" class="mr-1">Tag 3</el-tag>
        <el-tag type="warning" class="mr-1">Tag 4</el-tag>
      </v-col>
    </v-row>
    <v-row class="mb-1">
      <v-col cols="4">
        <v-row>
          <v-col cols="7">
            <CommonField label="業務員" label-min-width="82px" />
          </v-col>
          <v-col cols="5">
            <CommonField label="" label-min-width="0px" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <v-row>
          <v-col>
            <CommonField label="填表日期" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-1">
      <v-col cols="5">
        <v-row>
          <v-col cols="5">
            <CommonField label="代理商" label-min-width="82px" />
          </v-col>
          <v-col cols="7">
            <CommonField label="" label-min-width="0px" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="5">
            <CommonField label="客戶名稱" label-min-width="82px" />
          </v-col>
          <v-col cols="7">
            <CommonField label="" label-min-width="0px" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-1">
      <v-col cols="5">
        <v-row>
          <v-col cols="10">
            <CommonField label="材料名稱" label-min-width="82px" />
          </v-col>
          <v-col cols="2">
            <CommonButton button-type="edit">材料</CommonButton>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="7">
            <CommonField label="篇名秒數" label-min-width="82px" />
          </v-col>
          <v-col cols="2">
            <CommonField label="" label-min-width="0px" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-1">
      <v-col cols="5">
        <v-row>
          <v-col cols="10">
            <CommonField label="CM組材料" label-min-width="82px" />
          </v-col>
          <v-col cols="2">
            <CommonButton button-type="edit">材料</CommonButton>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="7">
            <CommonField label="篇名秒數" label-min-width="82px" />
          </v-col>
          <v-col cols="2">
            <CommonField label="" label-min-width="0px" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-row>
          <v-col cols="8">
            <CommonField label="走期" label-min-width="82px" />
          </v-col>
          <v-col cols="3">
            <CommonField label="" label-min-width="0px" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col cols="6">
            <CommonField label="TARGET" label-min-width="82px" />
          </v-col>
          <v-col cols="3">
            <CommonField label="" label-min-width="0px" />
          </v-col>
          <v-col cols="3">
            <CommonField label="" label-min-width="0px" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="1" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="每十秒" />
      </v-col>
      <v-col cols="1" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="檔購看事後" />
      </v-col>
      <v-col cols="1" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="已買到" />
      </v-col>
      <v-col cols="1" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="合看已買到" />
      </v-col>
    </v-row> -->
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
