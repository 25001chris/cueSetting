<!-- 共用 loading 遮罩 dialog -->
<script setup>
  import { toRef, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';
  import loadingImage from '@/assets/loading.apng';

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    progressValue: {
      type: Number,
      default: null
    }
  });

  const emit = defineEmits(['update:modelValue']);

  const componentConfig = {
    overlayBackgroundOpacity: 0.5,
    overlayBackgroundColor: '#000',
    loaderIcon: null, // null、spinner、dots、bars
    loaderColor: '#000',
    loaderWidth: 128,
    loaderHeight: 128,
    progressMaxValue: 100,
    progressHeight: 30
  };
  const { t } = useI18n();
  const progressValue = toRef(props, 'progressValue');

  const activeModelValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    }
  });
</script>

<!-- https://github.com/ankurk91/vue-loading-overlay -->
<template>
  <div v-show="activeModelValue" class="text-center">
    <loading
      v-model:active="activeModelValue"
      :opacity="componentConfig.overlayBackgroundOpacity"
      :background-color="componentConfig.overlayBackgroundColor"
      :loader="componentConfig.loaderIcon"
      :color="componentConfig.loaderColor"
      :width="componentConfig.loaderWidth"
      :height="componentConfig.loaderHeight"
    >
      <!-- 自定義 loading 圖片 -->
      <template v-if="componentConfig.loaderIcon == null" #default>
        <img :src="loadingImage" alt="loading..." />
      </template>
      <template #after>
        <div>
          <div class="loading-text-style">{{ t('loadingText') }}</div>
          <div v-if="progressValue != null" class="mt-5">
            <v-progress-linear
              v-model="progressValue"
              color="loadingTextColor"
              :max="componentConfig.progressMaxValue"
              :height="componentConfig.progressHeight"
            >
              <template #default="{ value }">
                <strong class="progress-text-style"
                  >{{ Math.ceil(value) }} %</strong
                >
              </template>
            </v-progress-linear>
          </div>
        </div>
      </template>
    </loading>
  </div>
</template>

<style lang="scss" scoped>
  .loading-text-style {
    font-size: 3em;
    color: rgb(var(--v-theme-loadingTextColor));
  }

  .progress-text-style {
    color: black;
    font-weight: bold;
    font-size: 1.2em;
  }
</style>
