<script setup>
//import { defineComponent } from "@vue/composition-api";
// import CommonTextField from "@/components/shared/CommonTextField.vue";
import CommonButton from "@/components/shared/CommonButton.vue";
</script>

<template>
  <v-dialog activator="#splitSchedule" max-width="780">
    <template v-slot:default="{ isActive }">
      <v-card title="拆單" height="680px">
        <template v-slot:actions>
          <v-container>
            <img
              src="@/assets/componentDemo/splitSchedule.jpg"
              alt="adjustment"
            />
            <v-btn
              :button-type="'minor'"
              style="position: absolute; color: aquamarine"
              @click="
                {
                  isActive.value = false;
                }
              "
            ></v-btn>
            <!-- <v-row>
              <v-col cols="5" offset="1">
                <CommonTextField label="CPRP" />
              </v-col>
              <v-col cols="5">
                <CommonTextField label="=>" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" offset="1">
                <CommonTextField label="TARGET" />
              </v-col>
              <v-col cols="1">
                <CommonTextField label-min-width="0" />
              </v-col>
              <v-col cols="2">
                <CommonTextField label-min-width="0" />
              </v-col>
              <v-col cols="2">
                <CommonTextField label="=>" />
              </v-col>
              <v-col cols="1">
                <CommonTextField label-min-width="0" />
              </v-col>
              <v-col cols="2">
                <CommonTextField label-min-width="0" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" offset="1">
                <CommonTextField label="原預算" />
              </v-col>
              <v-col cols="3">
                <CommonTextField label="回沖前期" />
              </v-col>
              <v-col cols="3">
                <CommonTextField label="總預算" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" offset="1">
                <CommonTextField label="GRP" />
              </v-col>
              <v-col cols="2">
                <CommonTextField label="合計" />
              </v-col>
              <v-col cols="2">
                <CommonTextField label="差異" />
              </v-col>
              <v-col cols="2">
                <CommonTextField label="產值" />
              </v-col>
            </v-row>-->
            <v-row>
              <v-col class="center">
                <CommonButton
                  :button-type="'edit'"
                  class="ma-5"
                  @click="
                    {
                      isActive.value = false;
                    }
                  "
                >
                  確認
                </CommonButton>
                <CommonButton
                  class="ma-5"
                  :button-type="'cancel'"
                  @click="
                    {
                      isActive.value = false;
                    }
                  "
                >
                  取消
                </CommonButton>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-card>
    </template>
  </v-dialog>
</template>
<style lang="scss" scope>
.center {
  text-align: center;
}
</style>
