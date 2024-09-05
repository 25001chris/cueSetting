<template>
  <v-container>
    排期單號(Double Click即可刪除)
    <v-col cols="12" class="box3">
      <v-row class="box3-1" style="background-color: lightskyblue">
        <v-col cols="8">[待補]社團法人中華民國老人福利[1130712-1922]</v-col>
        <v-col cols="2">0</v-col>
        <v-col cols="2">40000</v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="box3">
      <v-row class="box3-1">
        <v-col cols="8">[待補]社團法人中華民國老人福利[1130712-1922]</v-col>
        <v-col cols="2">0</v-col>
        <v-col cols="2">40000</v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup></script>
<style scoped lang="scss">
.box3 {
  width: 100%;
  padding: 0;
}
.box3-1 {
  height: 40px;
  width: 100%;
  font-size: 12px;
  padding: 0 10px;
  margin: 0;
}
:deep .el-input-group__prepend {
  color: black !important;
}
</style>
