<template>
  <ModuleWrap :btns="btns" @on-change="typeChangeHandle">
    <template #title>TI 11 直邀积分 TOP5</template>
    <div class="table-wrap">
      <ScrollTable :fields="fields" :list="list" />
    </div>
  </ModuleWrap>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import ModuleWrap from './module-wrap.vue';
import ScrollTable from './scroll-table.vue';

export default defineComponent({
  name: 'LeftTwo',

  components: {
    ModuleWrap,
    ScrollTable,
  },

  setup() {
    const btns = reactive([
      { name: '所有赛区', value: 'world' },
      { name: 'CN', value: 'cn' },
    ]);

    const fields = reactive([
      { label: '队伍名称', prop: 'name', width: '70%' },
      { label: '当前积分', prop: 'integral', width: '30%' },
    ]);

    let list = ref<{ name: string; integral: string }[]>([]);

    function typeChangeHandle(val: string) {
      if (val === 'world') {
        list.value = [
          { name: 'Thunder Awaken', integral: '1540' },
          { name: 'PSG.LGD', integral: '1500' },
          { name: 'TSM', integral: '1380' },
          { name: 'OG', integral: '1340' },
          { name: 'beastcoast', integral: '1295' },
        ];
      } else {
        list.value = [
          { name: 'PSG.LGD', integral: '1500' },
          { name: 'Team Aster', integral: '940' },
          { name: 'Royal Never Give Up', integral: '738.42' },
          { name: 'Xtreme Gaming', integral: '440' },
          { name: 'EHOME', integral: '51' },
        ];
      }
    }

    return {
      btns,
      fields,
      typeChangeHandle,
      list,
    };
  },
});
</script>

<style lang="less" scoped>
.table-wrap {
  height: 100%;
}
</style>
