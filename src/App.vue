<template>
  <v-app>
    <v-main>
      <!-- <v-app-bar title="事後評估作業"></v-app-bar> -->
      <v-navigation-drawer width="255">
        <v-list-item>
          <v-icon link :to="{ name: '/' }">mdi-home</v-icon>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link :to="{ name: '/' }"
          ><v-icon>mdi-pencil</v-icon>事後評估作業</v-list-item
        >
        <v-list-item link :to="{ name: '/cue' }"
          ><v-icon>mdi-pencil</v-icon>補CUE處理作業</v-list-item
        >
        <v-list-item link><v-icon>mdi-pencil</v-icon>報表作業1</v-list-item>
        <v-list-item link><v-icon>mdi-pencil</v-icon>報表作業2</v-list-item>
        <v-list-item link
          ><v-icon>mdi-pencil</v-icon>廣告收視率查詢</v-list-item
        >
        <v-list-item link
          ><v-icon>mdi-pencil</v-icon>收視檢核相關作業</v-list-item
        >
        <v-list-item link><v-icon>mdi-pencil</v-icon>防疫宣傳</v-list-item>
        <v-list-item link><v-icon>mdi-pencil</v-icon>月結作業</v-list-item>
      </v-navigation-drawer>
      <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>
          <span class="mr-10" style="vertical-align: middle">補CUE DEMO</span>
        </v-app-bar-title>
        <template #append>
          <div class="d-flex align-center font-weight-bold">
            <CommonSwitch class="mr-16" />
            <span class="mr-2">Hello</span>
            <span class="mr-4">XXX</span>
            <v-tooltip location="bottom" text="logout">
              <template #activator="{ props }">
                <v-btn v-bind="props" :icon="mdiLogout"> </v-btn>
              </template>
            </v-tooltip>
          </div>
        </template>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
//
document.getElementsByTagName("html")[0].className = "dark";

const linkTo = () => {
  router.push("/");
};

onMounted(() => {
  linkTo();
});
</script>

<style scoped lang="scss">
.v-navigation-drawer {
  background-color: black !important;
  color: white !important;
}
</style>
