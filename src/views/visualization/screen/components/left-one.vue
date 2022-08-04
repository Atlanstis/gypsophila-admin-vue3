<template>
  <ModuleWrap :btns="btns" @on-change="typeChangeHande">
    <template #title>左侧标题一</template>
    <div class="chart-wrap" ref="chartRef"></div>
  </ModuleWrap>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref } from 'vue';
import ModuleWrap from './module-wrap.vue';
import { useEcharts } from '@/hooks/use-echarts';

export default defineComponent({
  name: 'LeftOne',

  components: {
    ModuleWrap,
  },

  setup() {
    const btns = reactive([
      {
        name: '类别1',
        value: '1',
      },
      {
        name: '类别2',
        value: '2',
      },
    ]);

    const chartRef = ref<HTMLDivElement | null>(null);

    const { setOptions } = useEcharts(chartRef as Ref<HTMLDivElement>);

    function setData() {
      const series = [];
      for (let i = 0; i < 5; i++) {
        series.push(Math.floor(Math.random() * 200));
      }
      const options: echarts.EChartsOption = {
        grid: {
          top: 10,
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['数据1', '数据2', '数据3', '数据4', '数据5'],
          axisLabel: {
            color: '#a3aebc',
            fontSize: 14,
            interval: 0,
          },
          axisTick: {
            lineStyle: {
              color: '#75a0d4',
            },
            alignWithLabel: true,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#3b6190',
            },
          },
        },
        yAxis: {
          type: 'value',
          minInterval: 1,
          nameTextStyle: {
            fontSize: 14,
            color: '#a3aebc',
          },
          axisLabel: {
            color: '#a3aebc',
            fontSize: 14,
          },
          axisTick: {
            lineStyle: {
              color: '#75a0d4',
            },
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#3b6190',
            },
          },
        },
        series: [
          {
            data: series,
            type: 'bar',
            barWidth: '30%',
            label: {
              show: true,
              position: 'top',
              color: '#caf3ff',
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0768de',
                  },
                  {
                    offset: 1,
                    color: '#73d2ef',
                  },
                ],
                global: false,
              },
            },
          },
        ],
      };
      setOptions(options);
    }

    function typeChangeHande() {
      setData();
    }
    return {
      btns,
      chartRef,
      typeChangeHande,
    };
  },
});
</script>

<style lang="less" scoped>
.chart-wrap {
  height: 100%;
  width: 100%;
}
</style>
