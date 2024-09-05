<template>
  <v-container>
    <v-col cols="12" class="fill-height">
      <v-row>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>計費金額</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>回沖前期</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>託播預算</template>
          </el-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>GRP</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>CPRP</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>佣金回饋</template>
          </el-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>合計</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>檔次</template>
          </el-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>差異</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>比例</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>產值計算</template>
          </el-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>PT GRP</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>PT比例</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>審單沖帳</template>
          </el-input>
        </v-col>
      </v-row>
      <v-row style="background-color: #bbb !important">
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>計費(合)</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>回沖(合)</template>
          </el-input>
        </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>預算(合)</template>
          </el-input>
        </v-col>
      </v-row>
      <v-row style="background-color: #bbb !important">
        <v-col cols="4"> </v-col>
        <v-col cols="4"> </v-col>
        <v-col cols="4">
          <el-input
            v-model="input1"
            style="max-width: 600px"
            placeholder="Please input"
            size="small"
          >
            <template #prepend>產值(合)</template>
          </el-input>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
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
