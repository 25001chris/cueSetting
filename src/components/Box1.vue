<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="6">
        <el-input
          v-model="input1"
          style="max-width: 600px"
          placeholder="Please input"
          size="small"
        >
          <template #prepend>年月</template>
        </el-input>
      </v-col>
      <v-col cols="6">
        <el-input
          v-model="input1"
          style="max-width: 600px"
          placeholder="Please input"
          size="small"
        >
          <template #prepend>評估單號</template>
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> 業務員 </template>
          <template #append>
            <el-input v-model="input1" placeholder="Please input" size="small">
            </el-input>
          </template>
        </el-input>
      </v-col>
      <v-col cols="4">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> 填表日期 </template>
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> 代理商 </template>
          <template #append>
            <el-input v-model="input1" placeholder="Please input2" size="small">
            </el-input>
          </template>
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> 客戶名稱 </template>
          <template #append>
            <el-input v-model="input1" placeholder="Please input2" size="small">
            </el-input>
          </template>
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> 材料名稱 </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> 篇名秒數 </template>
        </el-input>
      </v-col>
      <v-col cols="3">
        <el-input v-model="input1" placeholder="Please input" size="small">
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> CM組材料 </template>
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> 走期 </template>
          <template #append>
            <span style="padding-right: 20px">至</span>
            <el-input
              v-model="input1"
              placeholder="Please input"
              size="small"
              style="background-color: black; border-radius: 0 !important"
            >
            </el-input>
          </template>
        </el-input>
      </v-col>
      <v-col cols="4">
        <el-checkbox v-model="checked5" label="補檔序" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend> TARGET </template>
          <template #append>
            <el-input v-model="input1" placeholder="" size="small"> </el-input>
            <el-input v-model="input1" placeholder="" size="small"> </el-input>
          </template>
        </el-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <el-checkbox v-model="checked5" label="補檔序" />
      </v-col>
      <v-col cols="4">
        <el-checkbox v-model="checked5" label="補檔序" />
      </v-col>
      <v-col cols="4">
        <el-checkbox v-model="checked5" label="補檔序" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
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
