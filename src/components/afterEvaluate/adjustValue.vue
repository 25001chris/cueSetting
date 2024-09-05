<script setup>
//import { defineComponent } from "@vue/composition-api";
// import CommonTextField from "@/components/shared/CommonTextField.vue";
import CommonButton from "@/components/shared/CommonButton.vue";
</script>

<template>
  <v-dialog activator="#adjustValue" max-width="1180">
    <template v-slot:default="{ isActive }">
      <v-card title="調整" height="800px">
        <template v-slot:actions>
          <v-container>
            <img src="@/assets/componentDemo/adjust.jpg" alt="adjustment" />
            <v-btn
              :button-type="'minor'"
              style="position: absolute; color: aquamarine"
              @click="
                {
                  isActive.value = false;
                }
              "
            ></v-btn>
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
