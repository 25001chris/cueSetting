<!-- 共用 Table 選擇器 dialog -->
<script setup>
  import { ref, toRef, watch } from 'vue';
  import { isStringNullOrBlank } from '@/utils/commonTools.js';
  import CommonButton from '@/components/shared/CommonButton.vue';

  const props = defineProps({
    openDialog: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: null
    },
    headers: {
      type: Array,
      default: () => []
    },
    contents: {
      type: Array,
      default: () => []
    },
    // 若 contents 陣列內容為 json object，可指定要顯示的 key 名稱
    contentSortKeys: {
      type: Array,
      default: () => []
    },
    // 自訂欄位寬度
    customContentWidth: {
      type: Array,
      default: () => []
    },
    dialogWidth: {
      type: [Number, String],
      default: 800
    },
    tableHeight: {
      type: [Number, String],
      default: '60vh'
    },
    useDoubleClick: {
      type: Boolean,
      default: false
    },
    usePreventSelect: {
      type: Boolean,
      default: false
    }
  });
  const emit = defineEmits(['dialogCancel', 'dialogConfirm']);
  const openDialogModelValue = toRef(props, 'openDialog');
  const currentSelectedData = ref(null);

  // 確認事件
  const dialogConfirmEvent = () => {
    if (currentSelectedData.value != null) {
      emit('dialogConfirm', currentSelectedData.value);
      currentSelectedData.value = null;
    } else {
      emit('dialogCancel');
    }
  };

  watch(
    () => openDialogModelValue.value,
    () => (currentSelectedData.value = null)
  );
</script>

<!-- https://next.vuetifyjs.com/en/components/dialogs/ -->
<!-- https://next.vuetifyjs.com/en/components/tables/ -->
<!-- 不使用 v-model 調整成單向綁定，避免發生 Set operation on key "openDialog" failed: target is readonly 的警告 -->
<template>
  <v-dialog
    :model-value="openDialogModelValue"
    :width="props.dialogWidth"
    :class="props.usePreventSelect && 'prevent-select'"
    persistent
    @update:model-value="null"
  >
    <v-card
      :title="
        !isStringNullOrBlank(props.dialogTitle) ? props.dialogTitle : null
      "
    >
      <v-container fluid>
        <!-- 分隔線 -->
        <v-row v-if="!isStringNullOrBlank(props.dialogTitle)">
          <v-col>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <slot name="header" :current-selected="currentSelectedData"></slot>
          </v-col>
        </v-row>
        <!-- 表格內容 -->
        <v-row>
          <v-col>
            <v-table
              fixed-header
              fixed-footer
              hover
              :height="props.tableHeight"
            >
              <thead>
                <tr>
                  <th
                    v-for="header in props.headers"
                    :key="header"
                    class="text-h6 text-left"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="content in props.contents"
                  :key="content"
                  :class="content == currentSelectedData && 'selected-row'"
                  @dblclick="props.useDoubleClick ? dialogConfirmEvent() : null"
                  @click="currentSelectedData = content"
                >
                  <template v-if="props.contentSortKeys.length > 0">
                    <td
                      v-for="(key, index) in props.contentSortKeys"
                      :key="key"
                      :title="content[key]"
                      :alt="content[key]"
                      :width="props.customContentWidth[index] || 'auto'"
                    >
                      <!-- 使用 v-tooltip 資料量大時會變很慢 20230601 -->
                      <!-- <span
                        >{{ content[key]
                        }}<v-tooltip activator="parent" location="top">{{
                          content[key]
                        }}</v-tooltip></span
                      > -->
                      {{ content[key] }}
                    </td>
                  </template>
                  <template v-else>
                    <td
                      v-for="(value, key, index) in content"
                      :key="value"
                      :title="value"
                      :alt="value"
                      :width="props.customContentWidth[index] || 'auto'"
                    >
                      <!-- 使用 v-tooltip 資料量大時會變很慢 20230601 -->
                      <!-- <span
                        >{{ value
                        }}<v-tooltip activator="parent" location="top">{{
                          value
                        }}</v-tooltip></span
                      > -->
                      {{ value }}
                    </td>
                  </template>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
        <v-row class="pt-3" justify="center">
          <v-col cols="auto">
            <CommonButton button-type="edit" @click="dialogConfirmEvent">
              {{ $t('commonComponentText.button.done') }}
            </CommonButton>
          </v-col>
          <v-col cols="auto">
            <CommonButton button-type="cancel" @click="$emit('dialogCancel')">
              {{ $t('commonComponentText.button.cancel') }}
            </CommonButton>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  /* 滑鼠游標調整 */
  tbody tr {
    cursor: pointer !important;
  }

  /* 取消滑鼠選取文字反白 */
  .prevent-select {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .selected-row {
    background-color: rgb(var(--v-theme-tableRowSelected));
  }
</style>
