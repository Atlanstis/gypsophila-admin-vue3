<template>
  <ModuleWrap :btns="btns" @on-change="typeChangeHande">
    <template #title>左侧标题四</template>
    <div class="chart-wrap" ref="chartRef"></div>
  </ModuleWrap>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from 'vue';
import ModuleWrap from './module-wrap.vue';
import { useEcharts } from '@/hooks/use-echarts';

export default defineComponent({
  name: 'LeftFour',

  components: {
    ModuleWrap,
  },

  setup() {
    const btns = reactive([
      {
        name: 'S3 赛季',
        value: '3',
      },
      {
        name: 'S2 赛季',
        value: '2',
      },
      {
        name: 'S1 赛季',
        value: '1',
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
          right: '5%',
          bottom: 0,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 16,
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['07-30', '07-31', '08-01', '08-02', '08-03'],
          axisLabel: {
            color: '#a3aebc',
            fontSize: 14,
          },
          axisTick: {
            lineStyle: {
              color: '#75a0d4',
            },
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
            lineStyle: {
              color: '#0c437d',
              type: 'dashed',
            },
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
            type: 'line',
            symbol: 'none',
            smooth: true,
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
                    offset: 0.3,
                    color: '#2783e0',
                  },
                  {
                    offset: 0.6,
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
            areaStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(7, 104, 202, .8)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(7, 104, 202, .3)',
                  },
                ],
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
      chartRef,
      btns,
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
