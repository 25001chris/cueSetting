<template>
  <v-container>
    <v-row class="d-flex ml-5 mt-1" justify="start">
      <el-button class="text-editButton">清除</el-button>
      <el-button class="text-editButton">存檔</el-button>
      <el-button class="text-editButton">複製</el-button>
      <el-button class="text-editButton" id="editValue">調值</el-button>
      <el-button class="text-editButton" id="splitSchedule">拆單</el-button>
      <el-button class="text-editButton" id="addBudget">加預算</el-button>
      <el-button class="text-editButton" id="adjustValue">調整</el-button>
      <el-button class="text-editButton" id="watchTogether">合看</el-button>
      <el-button class="text-editButton" id="combineWatchTogether"
        >併合看</el-button
      >
      <el-button class="text-editButton" id="chargeOff">回沖</el-button>
      <el-button class="text-editButton">下筆</el-button>
      <el-button class="text-editButton">上筆</el-button>
    </v-row>
    <v-row>
      <v-col cols="4">
        <Box1 />
        <Box2 />
        <Box3 />
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="4">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>可補日期</template>
            </el-input>
          </v-col>
          <v-col cols="4">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>停播日期</template>
            </el-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <textAreaBox title="AE備註" :rowNum="7" />
          </v-col>
          <v-col cols="4">
            <textAreaBox title="備註" isInput />
          </v-col>
          <v-col cols="4">
            <textAreaBox title="超買原因" isInput />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="mt-5">
            <checkBoxList title="EBC-主單台別" />
            <checkBoxList title="EBC-可補台別" />
            <checkBoxList title="EBC-已買到停補" />
          </v-col>
          <v-col cols="4">
            <el-table
              :data="tableData"
              style="width: 100%; height: 440px"
              :cell-style="{ padding: 0 }"
              show-summary
            >
              <el-table-column prop="channel" label="channel" width="120" />
              <el-table-column prop="grp" label="grp" width="120" />
              <el-table-column prop="slot" label="slot" />
            </el-table>
          </v-col>
          <v-col cols="4">
            <el-input
              v-model="input"
              style="display: flex"
              placeholder="Please input"
              class="mt-2"
            />
            <el-table
              :data="tableData"
              style="width: 100%; height: 400px"
              :cell-style="{ padding: 0 }"
              show-summary
            >
              <el-table-column prop="channel" label="channel" width="120" />
              <el-table-column prop="grp" label="grp" width="120" />
              <el-table-column prop="slot" label="slot" />
            </el-table>
          </v-col>
          <!-- <v-col cols="2">
            <checkBoxList />
          </v-col>
          <v-col cols="2">
            <checkBoxList />
          </v-col>
          <v-col cols="2">
            <checkBoxList />
          </v-col> -->
        </v-row>
        <v-row class="mt-3">
          <v-col cols="2" class="settingBox">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>合看單號</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>結案月份</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>結案處理日期</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>結案分類</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>調整月份</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>分類調整</template>
            </el-input>
          </v-col>
          <v-col cols="4" class="settingBox mt-2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>實買產值</template>
              <template #append> 510D計算至 </template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox mt-2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>發票金額</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox mt-2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>預開金額</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox mt-2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>已沖金額</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox mt-2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>調整金額</template>
            </el-input>
          </v-col>
          <v-col cols="2" class="settingBox mt-2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>回沖金額</template>
            </el-input>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <EditValue />
    <AddBudget />
    <AdjustValue />
    <SplitSchedule />
    <WatchTogether />
    <CombineWatchTogether />
    <ChargeOff />
  </v-container>
</template>

<script setup>
// import { ref } from "vue";
// const drawerButton = ref(false);
//
// import CommonTextField from "@/components/shared/CommonTextField.vue";
// import CommonButton from "@/components/shared/CommonButton.vue";
import EditValue from "@/components/afterEvaluate/editValue.vue";
import AddBudget from "@/components/afterEvaluate/addBudget.vue";
import AdjustValue from "@/components/afterEvaluate/adjustValue.vue";
import SplitSchedule from "@/components/afterEvaluate/splitSchedule.vue";
import WatchTogether from "@/components/afterEvaluate/watchTogether.vue";
import CombineWatchTogether from "@/components/afterEvaluate/combineWatchTogether.vue";
import ChargeOff from "@/components/afterEvaluate/chargeOff.vue";
const tableData = [
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
  {
    channel: "ET-N",
    grp: "4.15",
    slot: "14",
  },
];
</script>
<style scope lang="scss">
:deep .el-table .el-table__cell {
  padding: 0px 0px !important;
}
.el-input-group__prepend {
  color: black !important;
}
.settingBox {
  padding: 0 12px !important;
}
.text-editButton {
  color: rgb(56, 142, 60) !important;
  font-weight: 700 !important;
  border: 2px solid rgb(56, 142, 60) !important;
  font-size: var(0.875rem);
  //min-width: 64px;
  padding: 0 16px;
}

:deep .v-dialog .v-overlay__content .v-card .v-card-item {
  background: rgb(56, 142, 60) !important;
}
</style>
