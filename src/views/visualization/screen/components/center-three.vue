<template>
  <ModuleWrap type="long">
    <template #title>选手奖金排行榜</template>
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
  name: 'CenterThree',

  components: {
    ModuleWrap,
    ScrollTable,
  },

  setup() {
    const list = ref([
      { name: 'NOtail', gold: '45', silver: '38', bronze: '21', earnings: '$7,176,371' },
      { name: 'JerAx', gold: '35', silver: '19', bronze: '9', earnings: '$6,487,080' },
      { name: 'ana', gold: '9', silver: '9', bronze: '4', earnings: '$6,008,163' },
      { name: 'Ceb', gold: '21', silver: '18', bronze: '13', earnings: '$5,816,453' },
      { name: 'Topson', gold: '11', silver: '9', bronze: '7', earnings: '$5,693,012' },
      { name: 'KuroKy', gold: '54', silver: '25', bronze: '23', earnings: '$5,239,492' },
      { name: 'Mircle~', gold: '33', silver: '19', bronze: '18', earnings: '$4,831,734' },
      { name: 'MinD_ContRoL', gold: '37', silver: '20', bronze: '17', earnings: '$4,616,888' },
      { name: 'MATUMBAMAN', gold: '40', silver: '22', bronze: '12', earnings: '$4,533,587' },
      { name: 'GH', gold: '26', silver: '19', bronze: '13', earnings: '$4,225,243' },
      { name: 'Miposhka', gold: '39', silver: '39', bronze: '19', earnings: '$3,978,264' },
      { name: 'SumaiL', gold: '25', silver: '20', bronze: '14', earnings: '$3,838,735' },
      { name: 'Ame', gold: '33', silver: '31', bronze: '16', earnings: '$3,795,037' },
      { name: 'TORONTOTOKYO', gold: '9', silver: '8', bronze: '4', earnings: '$3,739,602' },
      { name: 'Collapse', gold: '16', silver: '8', bronze: '5', earnings: '$3,738,800' },
    ]);

    const fields = reactive([
      { label: '选手名称', prop: 'name', width: '20%' },
      { label: '金', prop: 'gold', width: '20%' },
      { label: '银', prop: 'silver', width: '20%' },
      { label: '铜', prop: 'bronze', width: '20%' },
      { label: '奖金总计', prop: 'earnings', width: '20%' },
    ]);

    return { list, fields };
  },
});
</script>

<style lang="less" scoped>
.table-wrap {
  height: 100%;
  width: 100%;
}
</style>
