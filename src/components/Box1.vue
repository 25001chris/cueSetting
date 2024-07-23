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
        <el-tag type="info" effect="plain" class="mr-1">B</el-tag>
      </v-col>
    </v-row>
    <v-row>
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
      <v-col cols="6">
        <el-tag type="primary" class="mr-1">Tag 1</el-tag>
        <el-tag type="success" class="mr-1">Tag 2</el-tag>
        <el-tag type="info" class="mr-1">Tag 3</el-tag>
        <el-tag type="warning" class="mr-1">Tag 4</el-tag>
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
            材料
            <!-- <el-button :icon="Search" /> -->
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
      <v-col cols="3" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="每十秒" />
      </v-col>
      <v-col cols="3" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="檔購看事後" />
      </v-col>
      <v-col cols="3" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="已買到" />
      </v-col>
      <v-col cols="3" style="padding: 0px 10px">
        <el-checkbox v-model="checked5" label="合看已買到" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup></script>
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
