<template>
  <v-container>
    <!-- <v-row class="mt-10 ml-10">
      <CommonButton :button-type="'query'" class="ma-2" id="numberImport">
        搜尋
      </CommonButton>
    </v-row> -->
    <v-row class="ma-10">
      <!-- <el-button class="text-editButton" id="numberImport">TEST</el-button> -->
      <v-col cols="1" class="pt-16" style="text-align: end">
        <!-- <CommonButton :button-type="'query'" class="ma-2" id="numberImport">
          搜尋
        </CommonButton> -->
        <CommonButton size="small" :button-type="'minor'" id="numberImport">
          <v-icon icon="mdi-pencil"></v-icon>
        </CommonButton>
      </v-col>
      <v-col>
        <img
          src="@/assets/componentDemo/numberImportTable.jpg"
          alt="adjustment"
        />
      </v-col>
      <!-- <v-col cols="2">
        <img
          src="@/assets/componentDemo/numberImportSubTable.jpg"
          alt="adjustment"
        />
      </v-col> -->
    </v-row>
  </v-container>
  <numberImport />
</template>
<script setup>
import numberImport from "@/components/afterEvaluate/numberImport.vue";
</script>
<style lang="scss" scoped></style>
