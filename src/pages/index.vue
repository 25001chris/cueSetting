<template>
  <v-container>
    <v-row class="mt-10 ml-10">
      <CommonButton
        :button-type="'query'"
        class="ma-2"
        :to="{ name: '/afterEvaluateSetting' }"
      >
        搜尋
      </CommonButton>
    </v-row>
    <v-row class="mt-10 ml-10">
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="年月" hide-details />
      </v-col>
      <v-col cols="3">
        <CommentSelect label-min-width="0" label="業務員" hide-details />
      </v-col>
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="頻道類型" hide-details />
      </v-col>
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="頻道" hide-details />
      </v-col>
    </v-row>
    <v-row class="ml-10 mr-10">
      <v-col cols="3">
        <CommonTextField label-min-width="0" label="評估單號" />
      </v-col>
      <v-col cols="3">
        <CommonTextField label-min-width="0" label="代理商／客戶" />
      </v-col>
      <v-col cols="2"
        ><CommentSelect label-min-width="0" label="材料" />
      </v-col>
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="走期內" hide-details />
      </v-col>
      <v-col cols="2">
        <CommentSelect label-min-width="0" label="已買到" hide-details />
      </v-col>
    </v-row>
    <v-row :no-gutters="true" class="mt-5 mr-10 ml-10 mr-10">
      <v-col cols="3" class="text-red-lighten-2 text-start">
        <div style="display: inline-grid">
          <h5
            class="ml-5 mt-2 pl-2 pr-2 bg-green-accent-1"
            style="height: 20px"
          >
            走期內未買到未結轉
          </h5>
        </div>
        <div style="display: inline-grid">
          <h5
            class="ml-5 mt-2 pl-2 pr-2 bg-orange-accent-1"
            style="height: 20px"
          >
            走期內未買到已結轉
          </h5>
        </div>
      </v-col>
      <v-col cols="9" class="text-red-lighten-2 text-end"> 共9筆</v-col>
    </v-row>
    <v-row class="ml-10 mr-10">
      <v-col cols="12">
        <el-table
          :data="multiToRunData"
          :style="{ height: settingVH }"
          :cell-style="{ padding: 0 }"
          @select="handleSelection"
          :header-cell-class-name="headerCellClass"
        >
          <el-table-column fixed prop="sort" label="序" width="40" />
          <el-table-column fixed label="操作" width="150" :align="'center'">
            <template #default="{ row }">
              <div style="display: inline-grid">
                <CommonButton size="small" :button-type="'minor'">
                  <v-icon icon="mdi-pencil"></v-icon>
                </CommonButton>
              </div>

              <div style="display: inline-grid">
                <CommonButton size="small" button-type="delete">
                  <v-icon icon="mdi-delete"></v-icon>
                </CommonButton>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="填單日" width="80" />
          <el-table-column prop="sales" label="業務員" width="80" />
          <el-table-column
            prop="toRunProdName"
            label="託播產品名稱"
            width="300"
          />
          <el-table-column prop="mainChannel" label="主頻" />
          <el-table-column prop="agent" label="代理商" width="180" />
          <el-table-column prop="customer" label="客戶" width="180" />
          <el-table-column prop="runDate" label="走期" width="120" />
          <el-table-column prop="cprp" label="CPRP" width="120" />
          <el-table-column prop="grp" label="GRP" />
          <el-table-column prop="sum" label="合計" />
          <el-table-column prop="diff" label="差異" width="60" />
          <el-table-column prop="target" label="Target" />
          <el-table-column prop="originBudget" label="原預算" />
          <el-table-column prop="chargeOff" label="回沖前期" />
          <el-table-column prop="budget" label="總預算" />
          <el-table-column prop="alreadyCue" label="已播檔次" />
          <el-table-column
            prop="complementaryDate"
            label="可補日期"
            width="120"
          />
          <el-table-column prop="closeDate" label="停播日期" />
          <el-table-column prop="evaluateId" label="評估單號" />
          <el-table-column prop="watchTogetherId" label="合看單號" />
          <el-table-column prop="closeMonth" label="結案月份" />
          <el-table-column prop="platform" label="平台" />
        </el-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import CommentSelect from "@/components/shared/CommonSelect.vue";
import CommonTextField from "@/components/shared/CommonTextField.vue";
import CommonButton from "@/components/shared/CommonButton.vue";
import { mdiFileEditOutline, mdiDelete } from "@mdi/js";

const headerCellClass = () => {
  return "bg-grey-lighten-3 center";
};

const multiToRunData = [
  {
    sort: 1,
    date: "06/14",
    sales: "林青美",
    mainChannel: "U1,U6",
    toRunProdName: "金車威豹能量飲料 (JB258-09) / 全面豹動",
    agent: "",
    cprp: "4000",
    grp: "7.50",
    sum: "5.10",
    diff: "-2.40",
    customer: "金車食品",
    originBudget: "30,000",
    chargeOff: "0",
    budget: "30,000",
    runDate: "06/17-06/23",
    target: "25-44M",
    platform: "B",
    alreadyCue: "0",
    complementaryDate: "06/24-06/30",
    closeDate: "07/01",
    evaluateId: "",
    watchTogetherId: "",
    closeMonth: "07",
  },
  {
    sort: 2,
    date: "06/14",
    sales: "林青美",
    mainChannel: "U2",
    toRunProdName: "Bifesta即淨卸妝棉 (NE014-04) / 卸卸今天",
    agent: "群邑",
    cprp: "6000",
    grp: "4.17",
    sum: "3.09",
    diff: "-1.08",
    customer: "蔻仕麗",
    originBudget: "25,000",
    chargeOff: "0",
    budget: "25,000",
    runDate: "06/17-06/23",
    target: "25-44F",
    platform: "B",
    alreadyCue: "0",
    complementaryDate: "06/24-06/30",
    closeDate: "07/01",
    evaluateId: "",
    watchTogetherId: "",
    closeMonth: "07",
  },
  {
    sort: 3,
    date: "06/14",
    sales: "林青美",
    mainChannel: "UD",
    toRunProdName: "Bifesta即淨卸妝棉 (NE014-04) / 卸卸今天",
    agent: "群邑",
    cprp: "6000",
    grp: "9.72",
    sum: "4.02",
    diff: "-5.70",
    customer: "蔻仕麗",
    originBudget: "58,295",
    chargeOff: "0",
    budget: "58,295",
    runDate: "06/17-06/23",
    target: "25-44F",
    platform: "B",
    alreadyCue: "0",
    complementaryDate: "06/24-06/30",
    closeDate: "07/01",
    evaluateId: "",
    watchTogetherId: "",
    closeMonth: "07",
  },
  {
    sort: 4,
    date: "06/14",
    sales: "林青美",
    mainChannel: "UP",
    toRunProdName: "Bifesta即淨卸妝棉 (NE014-04) / 卸卸今天",
    agent: "群邑",
    cprp: "4000",
    grp: "6.84",
    sum: "1.51",
    diff: "-5.23",
    customer: "蔻仕麗",
    originBudget: "40,455",
    chargeOff: "0",
    budget: "40,455",
    runDate: "06/17-06/23",
    target: "25-44F",
    platform: "B",
    alreadyCue: "0",
    complementaryDate: "06/24-06/30",
    closeDate: "07/01",
    evaluateId: "",
    watchTogetherId: "",
    closeMonth: "07",
  },
  {
    sort: 5,
    date: "06/19",
    sales: "林青美",
    mainChannel: "US",
    toRunProdName: "ISUZU和眾汽車 (AB181-39) / US只PT",
    agent: "貝立德",
    cprp: "4000",
    grp: "7.04",
    sum: "6.19",
    diff: "-1.85",
    customer: "合眾汽車",
    originBudget: "56,280",
    chargeOff: "0",
    budget: "56,280",
    runDate: "06/20-06/23",
    target: "30-54A",
    platform: "B",
    alreadyCue: "0",
    complementaryDate: "06/24-06/30",
    closeDate: "07/01",
    evaluateId: "",
    watchTogetherId: "",
    closeMonth: "07",
  },
];
</script>
<style lang="scss" scoped>
:deep .el-table td.el-table__cell div {
  padding: 5px 5px !important;
}
</style>
