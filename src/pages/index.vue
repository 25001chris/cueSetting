<template>
  <v-container>
    <v-row class="mt-15">
      <v-col cols="4">
        <Box1 />
        <Box2 />
        <Box3 />
      </v-col>
      <v-col cols="8">
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
        <v-row class="mt-12">
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>合看單號</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>結案月份</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>結案處理日期</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>結案分類</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>調整月份</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>分類調整</template>
            </el-input>
          </v-col>
          <v-col cols="4">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>實買產值</template>
              <template #append> 510D計算至 </template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>發票金額</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>預開金額</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>已沖金額</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>調整金額</template>
            </el-input>
          </v-col>
          <v-col cols="2">
            <el-input v-model="input1" placeholder="Please input" size="small">
              <template #prepend>回沖金額</template>
            </el-input>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="6">
            <el-table
              :data="tableData"
              style="width: 100%"
              :cell-style="{ padding: 0 }"
              show-summary
            >
              <el-table-column prop="channel" label="channel" width="180" />
              <el-table-column prop="grp" label="grp" width="180" />
              <el-table-column prop="slot" label="slot" />
            </el-table>
          </v-col>
          <v-col cols="6">
            <el-table
              :data="tableData"
              style="width: 100%"
              :cell-style="{ padding: 0 }"
              show-summary
            >
              <el-table-column prop="channel" label="channel" width="180" />
              <el-table-column prop="grp" label="grp" width="180" />
              <el-table-column prop="slot" label="slot" />
            </el-table>
          </v-col>
        </v-row> -->
        <!-- <textAreaBox />
        <textAreaBox />
        <textAreaBox /> -->
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>合看單號</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>結案月份</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>結案處理日期</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>結案分類</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>調整月份</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>分類調整</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>實買產值</template>
          <template #append> 510D計算至 </template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>發票金額</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>預開金額</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>已沖金額</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>調整金額</template>
        </el-input>
      </v-col>
      <v-col cols="2">
        <el-input v-model="input1" placeholder="Please input" size="small">
          <template #prepend>回沖金額</template>
        </el-input>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script setup>
//
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
</style>
