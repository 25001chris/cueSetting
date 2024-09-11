<template>
  <v-container>
    <v-row class="mt-10 ml-10">
      <CommonButton :button-type="'query'" class="ma-2"> 搜尋 </CommonButton>
      <CommonButton :button-type="'edit'" class="ma-2"> 轉單 </CommonButton>
    </v-row>
    <v-row class="mt-10 ml-10">
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="業務員" hide-details />
      </v-col>
      <v-col cols="3">
        <v-row>
          <v-col cols="8">
            <CommonHtmlDatepicker
              label-min-width="0"
              label="日期"
              hide-details
            />
          </v-col>
          <v-col cols="4">
            <v-checkbox
              v-model="andAfter"
              class="float-left"
              hide-details
              style="height: 24px"
            >
              <template #label>
                <div>及以後</div>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="頻道類型" hide-details />
      </v-col>
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="銷售方式" hide-details />
      </v-col>
    </v-row>
    <v-row class="ml-10">
      <v-col cols="3">
        <CommonTextField label-min-width="0" label="代理商" />
      </v-col>
      <v-col cols="3">
        <CommonTextField label-min-width="0" label="客戶" />
      </v-col>
      <v-col cols="2"
        ><CommentSelect label-min-width="0" label="零秒（審單）" />
      </v-col>
    </v-row>
    <v-row :no-gutters="true" class="mt-5">
      <v-col cols="11" class="text-red-lighten-2 text-end">
        已選取1筆 / 共5筆</v-col
      >
    </v-row>
    <v-row class="ml-10 mt-0">
      <v-col cols="11">
        <el-table
          :data="multiToRunData"
          :style="{ height: settingVH }"
          :cell-style="{ padding: 0 }"
          @select="handleSelection"
          :header-cell-class-name="headerCellClass"
          :row-class-name="selectMaterialClass"
        >
          <el-table-column prop="sort" label="序" width="40" />
          <el-table-column type="selection" selectable />
          <el-table-column prop="scheduleId" label="排期單號" width="300" />
          <el-table-column prop="agent" label="代理商" width="150" />
          <el-table-column prop="customer" label="客戶" width="200" />
          <el-table-column prop="materialName" label="材料名稱" width="300" />
          <el-table-column prop="title" label="篇名" width="200" />
          <el-table-column prop="seconds1" label="秒(排)" />
          <el-table-column prop="runDate" label="走期" width="120" />
          <el-table-column prop="target" label="Target" width="120" />
          <el-table-column prop="seconds2" label="秒(審)" />
          <el-table-column prop="platform" label="平台" width="60" />
        </el-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
import CommentSelect from "@/components/shared/CommonSelect.vue";
import CommonTextField from "@/components/shared/CommonTextField.vue";
import CommonHtmlDatepicker from "@/components/shared/CommonHtmlDatepicker.vue";
import CommonButton from "@/components/shared/CommonButton.vue";

const selectList = ref([]);
const selectMaterialClass = ({ row }) => {
  const selectListData = selectList.value.filter(
    (item) => item.scheduleId === row.scheduleId
  );
  if (selectListData.length > 0) {
    return "bg-blue-lighten-4";
  }
};

const headerCellClass = () => {
  return "bg-grey-lighten-3 center";
};

const handleSelection = (selection) => {
  selectList.value = selection;
};

const andAfter = ref(false);

const multiToRunData = [
  {
    sort: 1,
    scheduleId: "[待補] 禾創-境界守望者[1130619-4405]",
    agent: "貝立德 (00370)",
    customer: "禾創國際 (09647)",
    materialName: "禾創-境界守望者",
    title: "角色15+角色5",
    seconds1: "20",
    runDate: "06/21-06/23",
    target: "30-54A",
    seconds2: "15",
    platform: "B",
  },
  {
    sort: 2,
    scheduleId: "[待補] 禾創-境界守望者[1130619-4407]",
    agent: "貝立德 (00370)",
    customer: "禾創國際 (09647)",
    materialName: "禾創-境界守望者",
    title: "活動介紹15+活動介紹5",
    seconds1: "20",
    runDate: "06/21-06/23",
    target: "30-54A",
    seconds2: "15",
    platform: "B",
  },
  {
    sort: 3,
    scheduleId: "ISUKU合眾汽車[1130612-4166]",
    agent: "貝立德 (00370)",
    customer: "合眾汽車 (08528)",
    materialName: "ISUKU合眾汽車 [AB181-39]",
    title: "2024零利率延長保固",
    seconds1: "20",
    runDate: "06/13-06/16",
    target: "30-54M",
    seconds2: "15",
    platform: "B",
  },
  {
    sort: 4,
    scheduleId: "ISUKU合眾汽車[1130619-4390]",
    agent: "貝立德 (00370)",
    customer: "合眾汽車 (08528)",
    materialName: "ISUKU合眾汽車 [AB181-39]",
    title: "2024零利率延長保固",
    seconds1: "20",
    runDate: "06/20-06/23",
    target: "30-54M",
    seconds2: "15",
    platform: "B",
  },
  {
    sort: 5,
    scheduleId: "大金空調[1130618-4363]",
    agent: "貝立德 (00370)",
    customer: "和泰(大金) (011106)",
    materialName: "大金空調 [LB042-81]",
    title: "角色15+角色5",
    seconds1: "20",
    runDate: "06/19-06/23",
    target: "30-54A",
    seconds2: "15",
    platform: "B",
  },
];
</script>
<style lang="scss" scoped>
:deep .el-table td.el-table__cell div {
  padding: 10px 15px !important;
}

// :deep .el-checkbox__input.is-checked .el-checkbox__inner {
//   background-color: #409eff !important;
//   &::after {
//     border-color: white !important;
//     border-width: 2px !important;
//   }
// }
</style>
