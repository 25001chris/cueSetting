<template>
  <v-container>
    <v-row class="mt-1">
      <v-col cols="4" justify-content="left" style="display: flex">
        <el-button size="large">查詢</el-button>
        <h5 class="ml-5 mt-2 pl-2 pr-2 bg-green-accent-1" style="height: 20px">
          PT佔比大於50%
        </h5>
        <h5 class="ml-5 mt-2 pl-2 pr-2 bg-pink-lighten-4" style="height: 20px">
          現金額度已使用完
        </h5>
        <el-checkbox v-model="checked5" label="走期內" class="ml-5 mt-1" />
      </v-col>
      <v-col cols="3" offset="5" justify-content="right" style="display: flex">
        <el-select
          v-model="value"
          placeholder="Select"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button size="large">印</el-button>
        <el-button size="large" @click="openMaterialSetting"
          >材料設定</el-button
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="2024/07/01" size="small">
          <template #prepend>補cue日期</template>
        </el-input>
      </v-col>
      <v-col cols="1">
        <el-input v-model="input1" placeholder="U5" size="small">
          <template #prepend>頻道</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="1100" size="small">
          <template #prepend>時段</template>
          <template #append>
            <el-input v-model="input1" placeholder="1200" size="small">
            </el-input>
          </template>
        </el-input>
      </v-col>
      <v-col cols="1">
        <el-input v-model="input1" placeholder="150" size="small">
          <template #prepend>應排</template>
        </el-input>
      </v-col>
      <v-col cols="1">
        <el-input v-model="input1" placeholder="0" size="small">
          <template #prepend>已排</template>
        </el-input>
      </v-col>
      <v-col cols="1">
        <el-input v-model="input1" placeholder="0" size="small">
          <template #prepend>他補</template>
        </el-input>
      </v-col>
      <v-col cols="1">
        <el-input v-model="input1" placeholder="195" size="small">
          <template #prepend>自補</template>
        </el-input>
      </v-col>
      <v-col cols="1">
        <el-input v-model="input1" placeholder="-45" size="small">
          <template #prepend>剩餘</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="0.02" size="small">
          <template #prepend>預估值</template>
          <template #append>
            <el-input v-model="input1" placeholder="0.02" size="small">
            </el-input>
            <el-input v-model="input1" placeholder="1" size="small"> </el-input>
          </template>
        </el-input>
      </v-col>
    </v-row>
    <v-row class>
      <v-col cols="4">
        <el-input v-model="input1" placeholder="2024070478-2" size="small">
          <template #prepend>事後評估單</template>
          <template #append>
            <el-input
              v-model="input1"
              placeholder="MB045-13"
              size="small"
              style="width: 120px"
            >
            </el-input>
            <el-input
              v-model="input1"
              placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              size="small"
            >
            </el-input>
          </template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="1.00" size="small">
          <template #prepend>自訂權重值</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <span style="font-size: 12px; padding: 0 10px">日GRP</span>
        <el-radio-group v-model="radio1">
          <el-radio value="Y">顯示</el-radio>
          <el-radio value="N">不顯示</el-radio>
        </el-radio-group>
      </v-col>
      <v-col cols="3">
        <span style="font-size: 12px; padding: 0 10px">預估收視率</span>
        <el-radio-group v-model="radio2">
          <el-radio value="All">全部</el-radio>
          <el-radio value="New">新估值</el-radio>
          <el-radio value="Old">舊估值</el-radio>
        </el-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <el-table
          :data="tableData"
          style="width: 100%"
          :cell-style="{ padding: 0 }"
          @row-dblclick="openMaterialList"
          :style="{ height: settingVH2 }"
        >
          <el-table-column prop="programName" label="節目名稱">
          </el-table-column>
          <el-table-column
            prop="available"
            label="應排"
            width="60"
          ></el-table-column>
          <el-table-column
            prop="used"
            label="已排"
            width="60"
          ></el-table-column>
          <el-table-column
            prop="ramain"
            label="剩餘"
            width="60"
          ></el-table-column>
          <el-table-column
            prop="other"
            label="他補"
            width="60"
          ></el-table-column>
          <el-table-column
            prop="self"
            label="自補"
            width="60"
          ></el-table-column>
        </el-table>
        <!-- <el-table :data="tableData2" style="height: 24vh">
          <el-table-column width="180" prop="materialName" label="材料名稱" />
          <el-table-column prop="chapter" label="篇名" />
          <el-table-column width="60" prop="seconds" label="秒數" />
          <el-table-column width="60" prope="sales" label="銷售" />
          <el-table-column width="100" prop="scheduleId" label="排期單號" />
          <el-table-column width="100" prop="materialId" label="材料單號" />
        </el-table> -->
      </v-col>
      <v-col cols="8">
        <el-table
          :data="tableData3"
          :style="{ height: settingVH }"
          :cell-style="{ padding: 0 }"
          @row-dblclick="test2"
          @row-click="test0"
        >
          <el-table-column width="240" prop="item1" label="材料名稱" />
          <el-table-column width="240" prop="item2" label="篇名" />
          <el-table-column width="60" prop="item3" label="秒" />
          <el-table-column width="60" prope="item4" label="走期" />
          <el-table-column width="100" prop="item5" label="Target" />
          <el-table-column width="100" prop="item6" label="CPRP" />
          <el-table-column prop="item7" label="Rating" />
          <el-table-column prop="item8" label="產值" />
          <el-table-column prop="item9" label="日GRP" />
          <el-table-column prop="item10" label="代理商" />
          <el-table-column prop="item11" label="業務員" />
          <el-table-column prop="item12" label="尚欠" />
          <el-table-column prop="item13" label="預算" />
          <el-table-column prop="item14" label="可補日" />
          <el-table-column width="120" prop="item15" label="預估單號" />
          <el-table-column width="100" prop="item16" label="CM材料" />
          <el-table-column prop="item17" label="客戶" />
          <el-table-column prop="item18" label="剩天" />
          <el-table-column prop="item19" label="補檔序" />
          <el-table-column prop="item20" label="GRP" />
          <el-table-column prop="item21" label="合計GRP" />
          <el-table-column prop="item22" label="PT GRP" />
          <el-table-column prop="item23" label="計費金額" />
          <el-table-column prop="item24" label="回沖前期" />
          <el-table-column
            width="240"
            prop="item25"
            label="組合[產值+剩(天)+尚欠+評估單號]"
          />
        </el-table>
      </v-col>
    </v-row>
    <el-drawer
      v-model="drawer2"
      title="I am the title"
      :with-header="false"
      direction="btt"
      size="20%"
      :modal="false"
      class="drawer2"
      modal-class="drawer-modal"
    >
      <el-table
        :data="tableData2"
        style="height: 24vh"
        :cell-style="{ padding: 0 }"
      >
        <el-table-column width="180" prop="materialName" label="材料名稱" />
        <el-table-column prop="chapter" label="篇名" />
        <el-table-column width="60" prop="seconds" label="秒數" />
        <el-table-column width="60" prope="sales" label="銷售" />
        <el-table-column width="100" prop="scheduleId" label="排期單號" />
        <el-table-column width="100" prop="materialId" label="材料單號" />
      </el-table>
    </el-drawer>
    <el-drawer
      v-model="drawer"
      title="I am the title"
      :with-header="false"
      direction="btt"
      size="20%"
      :modal="false"
      class="drawer"
      modal-class="drawer-modal"
    >
      <el-table
        :data="tableData4"
        @row-dblclick="test3"
        :row-class-name="tableRowClassName"
        :cell-style="{ padding: 0 }"
      >
        <el-table-column width="240" prop="item1" label="材料名稱" />
        <el-table-column width="240" prop="item2" label="篇名" />
        <el-table-column width="60" prop="item3" label="秒" />
        <el-table-column width="60" prope="item4" label="走期" />
        <el-table-column width="100" prop="item5" label="Target" />
        <el-table-column width="100" prop="item6" label="CPRP" />
        <el-table-column prop="item7" label="Rating" />
        <el-table-column prop="item8" label="產值" />
        <el-table-column prop="item9" label="日GRP" />
        <el-table-column prop="item10" label="代理商" />
        <el-table-column prop="item11" label="業務員" />
        <el-table-column prop="item12" label="尚欠" />
        <el-table-column prop="item13" label="預算" />
        <el-table-column prop="item14" label="可補日" />
        <el-table-column width="120" prop="item15" label="預估單號" />
        <el-table-column width="100" prop="item16" label="CM材料" />
        <el-table-column prop="item17" label="客戶" />
        <el-table-column prop="item18" label="剩天" />
        <el-table-column prop="item19" label="補檔序" />
        <el-table-column prop="item20" label="GRP" />
        <el-table-column prop="item21" label="合計GRP" />
        <el-table-column prop="item22" label="PT GRP" />
        <el-table-column prop="item23" label="計費金額" />
        <el-table-column prop="item24" label="回沖前期" />
        <el-table-column
          width="240"
          prop="item25"
          label="組合[產值+剩(天)+尚欠+評估單號]"
        />
      </el-table>
    </el-drawer>
    <v-dialog v-model="dialogVisible" title="Dialog Title">
      <material-setting @closeDialogVisible="closeDialogVisible" />
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";

const radio1 = ref("Y");
const radio2 = ref("All");
const input1 = ref("");
//const visible = ref(false);
const drawer = ref(false);
const drawer2 = ref(false);
const settingVH = ref("64vh");
const settingVH2 = ref("64vh");
const dialogVisible = ref(false);

// const test = () => {
//   drawer.value = false;
//   settingVH.value = !drawer.value ? "78vh" : "56vh";
// };

const test0 = () => {
  if (tableData4.value.length > 0) {
    drawer.value = true;
    settingVH.value = !drawer.value ? "64vh" : "52vh";
  }
};

const test2 = (row) => {
  tableData4.value.push(row);
  drawer.value = true;
  settingVH.value = !drawer.value ? "64vh" : "52vh";
};

const test3 = (row) => {
  console.log(row.index);
  tableData4.value.splice(row.index, 1);
};

const tableRowClassName = ({ row, rowIndex }) => {
  row.index = rowIndex;
};

const closeDialogVisible = () => {
  console.log("close");
  dialogVisible.value = false;
};

const openMaterialList = (row) => {
  const isUsed = row.used !== "0";
  drawer2.value = isUsed ? true : false;
  settingVH2.value = !drawer2.value ? "64vh" : "52vh";
};

const openMaterialSetting = () => {
  dialogVisible.value = true;
};

const tableData = [
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "0",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
  {
    programName: "0855~0955(1棚)0900 東森新聞(六日)",
    available: "600",
    used: "500",
    ramain: "100",
    other: "200",
    self: "300",
  },
];

const tableData2 = [
  {
    materialName: "日立冷氣",
    chapter: "(HD)",
    seconds: "5",
    sales: "A2.2",
    scheduleId: "113072132",
    materialId: "SC090-31",
  },
  {
    materialName: "家樂福-中元",
    chapter: "(HD)",
    seconds: "5",
    sales: "A2.2",
    scheduleId: "113072132",
    materialId: "SC090-31",
  },
  {
    materialName: "台灣運彩",
    chapter: "(HD)",
    seconds: "5",
    sales: "A2.2",
    scheduleId: "113072132",
    materialId: "SC090-31",
  },
  {
    materialName: "大金空調",
    chapter: "(HD)",
    seconds: "5",
    sales: "A2.2",
    scheduleId: "113072132",
    materialId: "SC090-31",
  },
];

const tableData3 = [
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
  {
    item1: "7-11 飲料抽抽樂(SF204-14)",
    item2: "單/S1*H2補*RA",
    item3: "5",
    item4: "07/11~07/18",
    item5: "A2.2",
    item6: "80000",
    item7: "0.02",
    item8: "4240",
    item9: "0.02",
    item10: "貝立德",
    item11: "張瑞志",
    item12: "26.67",
    item13: "200000",
    item14: "",
    item15: "2024071150",
    item16: "SF204-16",
    item17: "統一超商",
    item18: "17",
    item19: "",
    item20: "26.67",
    item21: "0.00",
    item22: "0.00",
    item23: "200000",
    item24: "0",
    item25: "032800970002822024070741-1",
  },
];
const tableData4 = ref([]);

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

watch(
  () => tableData4.value,
  (val) => {
    console.log(val.length);
    if (val.length == 0) {
      drawer.value = false;
      settingVH.value = !drawer.value ? "64vh" : "56vh";
    }
  },
  { deep: true },
  { immediate: true }
);
</script>
<style scoped lang="scss">
.fill-height {
  height: 100%;
}
:deep .el-input__wrapper {
  //background-color: black;
  border-radius: 0 !important;
}
:deep .el-input-group__prepend {
  //color: white !important;
  color: black !important;
}
.v-col {
  padding: 6px 10px;
}

:deep .drawer {
  height: 26% !important;
  width: 58% !important;
  left: 42% !important;
  z-index: 2020;
}

:deep .drawer2 {
  height: 26% !important;
  width: 29% !important;
  left: 255px !important;
  z-index: 2020;
}

:deep .drawer-modal {
  /* display: none !important; */
  position: unset !important;
}
</style>
