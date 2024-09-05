<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    headers: {
      type: Array,
      required: true
    },
    contents: {
      type: Array,
      required: true
    },
    // 若 contents 陣列內容為 json object，可指定要顯示的 key 名稱
    contentSortKeys: {
      type: Array,
      required: false
    },
    // 資料總數量
    totalCount: {
      type: Number,
      required: true
    },
    // 每一分頁資料數量
    perPagingSize: {
      type: Number,
      default: 10
    },
    // 目前的分頁號碼
    paging: {
      type: Number,
      default: 1
    },
    tableClass: {
      type: String,
      default: ''
    }
  });

  const emit = defineEmits(['pagingUpdate']);

  // const currentPaging = ref(props.paging);
  const currentPaging = computed({
    get() {
      return props.paging;
    },
    set(value) {
      emit('pagingUpdate', value);
    }
  });
  const pagingConfig = {
    totalVisible: 7,
    showFirstLastPage: true
  };
  const pagingLength = computed(() =>
    Math.ceil(props.totalCount / props.perPagingSize)
  );
</script>

<!-- https://next.vuetifyjs.com/en/components/tables/ -->
<!-- https://next.vuetifyjs.com/en/components/paginations/ -->
<template>
  <div>
    <v-table fixed-header :class="props.tableClass">
      <thead>
        <tr>
          <th v-for="header in props.headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="content in props.contents" :key="content">
          <template v-if="props.contentSortKeys">
            <td
              v-for="key in props.contentSortKeys"
              :key="key"
              :title="content[key]"
            >
              {{ content[key] }}
            </td>
          </template>
          <template v-else>
            <td v-for="value in content" :key="value" :title="value">
              {{ value }}
            </td>
          </template>
          <td>
            <slot name="buttons" v-bind="content"></slot>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <div v-if="pagingLength > 1" class="ma-7">
    <v-pagination
      v-model="currentPaging"
      :length="pagingLength"
      :total-visible="pagingConfig.totalVisible"
      :show-first-last-page="pagingConfig.showFirstLastPage"
    ></v-pagination>
  </div>
</template>

<style scoped>
  thead th {
    font-size: 16px !important;
  }
</style>
