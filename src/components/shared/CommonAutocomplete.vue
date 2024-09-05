<script setup>
  import { set } from '@vueuse/core';
  import { ref, watch, computed, onMounted } from 'vue';
  import { closeVIconTabIndex } from '@/utils/commonTools.js';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const props = defineProps({
    label: {
      type: String,
      default: null
    },
    labelMinWidth: {
      type: String,
      default: '70px'
    },
    placeholder: {
      type: String,
      default: null
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    minLength: {
      type: Number,
      default: 1
    },
    menuItems: {
      type: Array,
      required: true,
      default: () => []
    },
    // 若傳入的 menuItems 陣列內容為物件，此屬性必傳
    itemTitle: {
      type: [String, Number, Boolean],
      required: false,
      default: null
    },
    // 若傳入的 menuItems 陣列內容為物件，此屬性必傳
    itemValue: {
      type: [String, Number, Boolean],
      required: false,
      default: null
    },
    menuMaxHeight: {
      type: Number,
      default: 300
    },
    // 是否包含預設全部選項
    useSelectAll: {
      type: Boolean,
      default: false
    },
    // 預設全部選項值
    selectAllValue: {
      type: [String, Number, Boolean],
      default: -1
    },
    // 是否使用必填欄位標記
    useRequireMark: {
      type: Boolean,
      default: false
    },
    //label對齊方式
    labelAlign: {
      type: String,
      default: 'left'
    },
    // 外部元件自訂驗證邏輯
    customRules: {
      type: Array,
      default: () => []
    },
    bgColor: {
      type: String,
      default: 'none'
    }
  });

  const selectItemsSelf = ref([]);
  const $el = ref();
  defineExpose({ $el });

  // 自訂 filter 規則
  const customFilter = (itemTitle, queryText) =>
    queryText.length >= props.minLength &&
    itemTitle.toLowerCase().includes(queryText.toLowerCase());

  watch(
    () => props.menuItems,
    (items) => {
      selectItemsSelf.value.splice(0);

      if (Array.isArray(items) && items.length > 0) {
        if (props.useSelectAll) {
          const defaultItem = {};
          defaultItem[props.itemTitle] = t('commonComponentText.select.all');
          defaultItem[props.itemValue] = props.selectAllValue;

          selectItemsSelf.value.push(defaultItem);
        }
        selectItemsSelf.value.push(...items);
      }
    },
    { immediate: true, deep: true }
  );

  const emptyRequireRule = (v) => {
    return !!v || t('commonComponentText.common.required');
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

  onMounted(() => {
    // 關閉 v-autocomplete 的 icon tab 鍵功能
    setTimeout(() => {
      closeVIconTabIndex('v-autocomplete');
    }, 500);
  });
</script>

<!-- https://next.vuetifyjs.com/en/components/autocompletes/ -->
<template>
  <v-autocomplete
    ref="$el"
    variant="outlined"
    :items="selectItemsSelf"
    :custom-filter="customFilter"
    :item-title="props.itemTitle"
    :item-value="props.itemValue"
    :rules="componentCustomRules"
    :label="
      props.placeholder != null
        ? props.placeholder
        : $t('commonComponentText.autocomplete.default')
    "
    :bg-color="props.bgColor"
    :menu-props="{
      maxHeight: props.menuMaxHeight
    }"
    hide-no-data
    clearable
    auto-select-first
  >
    <template v-if="props.label != null" #prepend>
      <span class="span-label"
        ><span
          v-if="props.useRequireMark"
          class="require-mark text-red-darken-3 text-h6"
          >*</span
        >{{ props.label }}</span
      >
    </template>
  </v-autocomplete>
</template>

<style lang="scss" scoped>
  .span-label {
    min-width: v-bind('props.labelMinWidth');
    text-align: v-bind('props.labelAlign');

    .require-mark {
      vertical-align: middle;
    }
  }
</style>
