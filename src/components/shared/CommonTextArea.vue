<script setup>
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    labelMinWidth: {
      type: String,
      default: '70px'
    },
    placeholder: {
      type: String,
      required: false
    },
    isRequired: {
      type: Boolean,
      default: false
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
    }
  });

  const $el = ref();
  defineExpose({ $el });

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
</script>

<!-- https://next.vuetifyjs.com/en/components/textareas/ -->
<template>
  <v-textarea
    ref="$el"
    filled
    :label="props.placeholder"
    :rules="componentCustomRules"
    variant="outlined"
    auto-grow
  >
    <template #prepend>
      <span class="span-label"
        ><span
          v-if="props.useRequireMark"
          class="require-mark text-red-darken-3 text-h6"
          >*</span
        >{{ props.label }}</span
      >
    </template>
  </v-textarea>
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
