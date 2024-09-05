<!-- vuetify switch 切換器元件 -->
<script setup>
  import { computed, ref } from 'vue';

  const props = defineProps({
    defaultValue: {
      type: String,
      required: true
    },
    activeValue: {
      type: String,
      required: true
    },
    inactiveValue: {
      type: String,
      required: true
    },
    activeText: {
      type: String,
      required: true
    },
    inactiveText: {
      type: String,
      required: true
    },
    useLabelBold: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['switchChange']);
  const switchLabel = ref(null);

  const switchValueModelValue = computed({
    get() {
      const switchValue = props.defaultValue;
      switchChangeHandler(switchValue);
      return switchValue;
    },
    set(value) {
      emit('switchChange', value);
    }
  });

  const switchChangeHandler = (_switchValue) => {
    const isActive =
      String(_switchValue).toLowerCase() ===
      String(props.activeValue).toLowerCase();

    switchLabel.value = isActive ? props.activeText : props.inactiveText;
  };
</script>

<!-- https://vuetifyjs.com/en/components/switches/#switches -->
<template>
  <v-switch
    v-model="switchValueModelValue"
    :class="props.useLabelBold && 'font-weight-bold'"
    :label="switchLabel"
    :true-value="props.activeValue"
    :false-value="props.inactiveValue"
    hide-details
  ></v-switch>
</template>

<style></style>
