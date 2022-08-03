<template>
  <div class="scroll-table">
    <div class="header-wrap">
      <div
        v-for="field of fields"
        :key="field.prop"
        :style="{ width: field.width }"
        class="field-wrap"
      >
        {{ field.label }}
      </div>
    </div>
    <div class="body-wrap">
      <ScrollList :list="list" :limit="5" v-slot="{ item }">
        <div class="line-wrap">
          <div
            v-for="(field, i) of fields"
            :key="`${field.prop}-${i}`"
            :style="{ width: field.width }"
          >
            {{ item[field.prop] }}
          </div>
        </div>
      </ScrollList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ScrollList from './scroll-list.vue';

export default defineComponent({
  name: 'ScrollTable',

  components: {
    ScrollList,
  },

  props: {
    fields: {
      type: Array as PropType<{ label: string; prop: string; width: string }[]>,
      default: () => [],
    },

    list: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },

  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.scroll-table {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header-wrap {
    height: 20px;
    line-height: 20px;
    color: #4496ff;
    font-size: 14px;
    display: flex;
    margin-bottom: 10px;
    .field-wrap {
      padding-left: 16px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 4px;
        height: 12px;
        width: 12px;
        background-color: rgba(68, 150, 255, 0.4);
      }
    }
  }
  .body-wrap {
    flex: 1;
    position: relative;
    .line-wrap {
      display: flex;
      font-size: 16px;
      color: #fff;
      height: 100%;
      align-items: center;
      &:hover {
        background: rgba(22, 89, 187, 0.3);
      }
    }
  }
}
</style>
