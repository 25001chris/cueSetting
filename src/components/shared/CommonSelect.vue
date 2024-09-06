<script setup>
import { ref, watch, computed } from "vue";
// import { useI18n } from 'vue-i18n';
// import { mdiInformation } from "@mdi/js";

// const { t } = useI18n();
const props = defineProps({
  label: {
    type: String,
  },
  labelMinWidth: {
    type: String,
    default: "70px",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  // selectItems: {
  //   type: Array,
  //   required: true
  //   validator(items) {
  //     const isValidObj = items.every(
  //       (item) =>
  //         // eslint-disable-next-line no-prototype-builtins
  //         item.hasOwnProperty('itemText') && item.hasOwnProperty('itemValue')
  //     );

  //     if (!isValidObj) {
  //       console.warn('The radioItems should have itemText and itemValue');
  //     }
  //     return isValidObj;
  //   }
  // },
  selectItems: {
    type: Array,
    default: () => [],
  },
  itemTitle: {
    type: [String, Number, Boolean],
    required: true,
  },
  itemValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  // 是否包含預設全部選項
  useSelectAll: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  // 預設全部選項值
  selectAllValue: {
    type: [String, Number, Boolean],
    default: -1,
  },
  // 選單最大高度
  menuMaxHeight: {
    type: Number,
    default: 300,
  },
  // 是否使用必填欄位標記
  useRequireMark: {
    type: Boolean,
    default: false,
  },
  //label對齊方式
  labelAlign: {
    type: String,
    default: "left",
  },
  // 外部元件自訂驗證邏輯
  customRules: {
    type: Array,
    default: () => [],
  },
  // INFO提示訊息
  infoMessage: {
    type: String,
    default: "",
  },
});

const $el = ref();
defineExpose({ $el });

const emptyRequireRule = (v) => {
  if (Array.isArray(v)) {
    return v.length > 0 || t("commonComponentText.common.required");
  } else {
    return (v != null && String(v).length > 0) || "必填";
  }
};

const componentCustomRules = computed(() => {
  const rules = [];

  if (props.isRequired) {
    rules.push(emptyRequireRule);
  }

  if (props.customRules.length > 0) {
    rules.push(...props.customRules);
  }

  return rules;
});

const selectItemsSelf = ref([]);

watch(
  () => props.selectItems,
  (items) => {
    selectItemsSelf.value.splice(0);

    if (Array.isArray(items) && items.length > 0) {
      if (props.useSelectAll) {
        const defaultItem = {};
        defaultItem[props.itemTitle] = "全部";
        defaultItem[props.itemValue] = props.selectAllValue;

        selectItemsSelf.value.push(defaultItem);
      }
      selectItemsSelf.value.push(...items);
    }
  },
  { immediate: true, deep: true }
);
</script>

<!-- https://next.vuetifyjs.com/en/components/selects/ -->
<template>
  <v-select
    ref="$el"
    variant="outlined"
    :label="props.placeholder ? props.placeholder : '請選擇'"
    :items="selectItemsSelf"
    :item-title="props.itemTitle"
    :item-value="props.itemValue"
    :rules="componentCustomRules"
    density="compact"
    hide-details
  >
    <template v-if="props.label != null" #prepend>
      <span class="span-label"
        ><span
          v-if="props.useRequireMark"
          class="require-mark text-red-darken-3 text-h6"
          >*</span
        >{{ props.label }}</span
      >
      <!-- <v-tooltip
        v-if="props.infoMessage"
        activator="parent"
        location="top"
        :text="props.infoMessage"
        content-class="tooltip-background-color"
      >
        <template #activator>
          <v-icon :icon="mdiInformation" class="cursor-pointer"></v-icon>
        </template>
      </v-tooltip> -->
    </template>
  </v-select>
</template>

<style lang="scss" scoped>
.span-label {
  min-width: v-bind("props.labelMinWidth");
  text-align: v-bind("props.labelAlign");
  .require-mark {
    vertical-align: middle;
  }
}
</style>
