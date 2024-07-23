<template>
  <v-container style="background-color: white">
    <v-col>
      <v-row>
        <v-col cols="2">
          <el-input v-model="input1" placeholder="2024/07/01" size="small">
            <template #prepend>補cue日期</template>
            <template #append>
              <el-button type="primary" size="small">查詢</el-button>
            </template>
          </el-input>
        </v-col>
        <v-col cols="3">
          <el-radio-group v-model="radio1">
            <el-radio value="1">停播(不排cue)</el-radio>
            <el-radio value="2">限定PT</el-radio>
            <el-radio value="3">限定非PT</el-radio>
          </el-radio-group>
        </v-col>
        <v-col cols="2">
          <span style="font-size: 12px; padding: 0 10px">平台</span>
          <el-select v-model="value" placeholder="Select" style="width: 100px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </v-col>
        <v-col cols="3" justify-content="left" style="display: flex">
          <h5
            class="ml-5 mt-2 pl-2 pr-2 bg-green-accent-1"
            style="height: 20px"
          >
            PT佔比大於50%
          </h5>
          <h5
            class="ml-5 mt-2 pl-2 pr-2 bg-pink-lighten-4"
            style="height: 20px"
          >
            現金額度已使用完
          </h5>
          <el-checkbox v-model="checked5" label="走期內" class="ml-5 mt-1" />
        </v-col>
        <v-col cols="2" justify-content="end" style="display: flex">
          <el-select v-model="value" placeholder="Select" style="width: 200px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-button type="primary" size="small" class="ml-5 mt-1"
            >存檔</el-button
          >
          <el-button
            type="default"
            size="small"
            class="ml-5 mt-1"
            @click="close"
            ><v-icon>mdi-close</v-icon></el-button
          >
        </v-col>
      </v-row>
      <v-row>
        <el-table
          :data="tableData"
          :style="{ height: settingVH }"
          @row-dblclick="test2"
          @row-click="test0"
        >
          <el-table-column width="360" prop="item1" label="材料名稱" />
          <el-table-column width="240" prop="item2" label="篇名" />
          <el-table-column width="60" prop="item3" label="秒" />
          <el-table-column width="100" prope="item4" label="CM材料" />
          <el-table-column width="120" prop="item5" label="限制日期" />
          <el-table-column width="150" prop="item6" label="首日限制" />
          <el-table-column width="300" prop="item7" label="一般限制" />
          <el-table-column width="120" prop="item8" label="走期" />
          <el-table-column prop="item9" label="Target" />
          <el-table-column prop="item10" label="尚欠" />
          <el-table-column prop="item11" label="GRP" />
          <el-table-column prop="item12" label="已達" />
          <el-table-column prop="item13" label="可補日" />
          <el-table-column prop="item14" label="停播日" />
          <el-table-column width="100" prop="item15" label="業務員" />
          <el-table-column width="120" prop="item16" label="評估單號" />
          <el-table-column prop="item17" label="停播" />
          <el-table-column prop="item18" label="序" />
        </el-table>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup>
//import { ref, defineProps } from "vue";
const emit = defineEmits(["closeDialogVisible"]);
const tableData = [
  {
    item1: "全國電子-家的生成式 7月空調九折 日立(SF202-17)",
    item2: "家的主人",
    item3: "30",
    item4: "SF202-17",
    item5: "07/18~07/18",
    item6: "000000006100000",
    item7: "000000006092530+0000000021300000",
    item8: "07/18~07/21",
    item9: "25-49M",
    item10: "2.80",
    item11: "2.80",
    item12: "0.00",
    item13: "07/18",
    item14: "07/18",
    item15: "張煌偉",
    item16: "2024071048",
    item17: "Y",
    item18: "1",
  },
  {
    item1: "全國電子-家的生成式 7月空調九折 日立(SF202-17)",
    item2: "家的主人",
    item3: "30",
    item4: "SF202-17",
    item5: "07/18~07/18",
    item6: "000000006100000",
    item7: "000000006092530+0000000021300000",
    item8: "07/18~07/21",
    item9: "25-49M",
    item10: "2.80",
    item11: "2.80",
    item12: "0.00",
    item13: "07/18",
    item14: "07/18",
    item15: "張煌偉",
    item16: "2024071048",
    item17: "Y",
    item18: "1",
  },
  {
    item1: "全國電子-家的生成式 7月空調九折 日立(SF202-17)",
    item2: "家的主人",
    item3: "30",
    item4: "SF202-17",
    item5: "07/18~07/18",
    item6: "000000006100000",
    item7: "000000006092530+0000000021300000",
    item8: "07/18~07/21",
    item9: "25-49M",
    item10: "2.80",
    item11: "2.80",
    item12: "0.00",
    item13: "07/18",
    item14: "07/18",
    item15: "張煌偉",
    item16: "2024071048",
    item17: "Y",
    item18: "1",
  },
  {
    item1: "全國電子-家的生成式 7月空調九折 日立(SF202-17)",
    item2: "家的主人",
    item3: "30",
    item4: "SF202-17",
    item5: "07/18~07/18",
    item6: "000000006100000",
    item7: "000000006092530+0000000021300000",
    item8: "07/18~07/21",
    item9: "25-49M",
    item10: "2.80",
    item11: "2.80",
    item12: "0.00",
    item13: "07/18",
    item14: "07/18",
    item15: "張煌偉",
    item16: "2024071048",
    item17: "Y",
    item18: "1",
  },
  {
    item1: "全國電子-家的生成式 7月空調九折 日立(SF202-17)",
    item2: "家的主人",
    item3: "30",
    item4: "SF202-17",
    item5: "07/18~07/18",
    item6: "000000006100000",
    item7: "000000006092530+0000000021300000",
    item8: "07/18~07/21",
    item9: "25-49M",
    item10: "2.80",
    item11: "2.80",
    item12: "0.00",
    item13: "07/18",
    item14: "07/18",
    item15: "張煌偉",
    item16: "2024071048",
    item17: "Y",
    item18: "1",
  },
];

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

const close = () => {
  console.log("close");
  emit("closeDialogVisible", true);
};
</script>

<style scoped lang="scss"></style>
