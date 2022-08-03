<template>
  <ModuleWrap :btns="btns" @on-change="typeChangeHande">
    <template #title>左侧标题三</template>
    <div class="chart-wrap" ref="chartRef"></div>
  </ModuleWrap>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref, unref } from 'vue';
import * as echarts from 'echarts';
import ModuleWrap from './module-wrap.vue';

export default defineComponent({
  name: 'LeftThree',

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

    let el: HTMLDivElement | null = null;
    let chart: echarts.ECharts | null = null;

    function setOptions() {
      const series = [];
      for (let i = 0; i < 5; i++) {
        series.push(Math.floor(Math.random() * 200));
      }
      if (!el) {
        el = unref(chartRef as Ref<HTMLDivElement>);
      }
      if (!chart) {
        chart = echarts.init(el);
      }
      const itemStyles: Array<string[]> = [
        ['rgba(255, 183, 92, 1)', 'rgba(255, 183, 92, .8)', 'rgba(255, 183, 92, 1)'],
        ['rgba(61, 104, 245, 1)', 'rgba(61, 104, 245, .8)', 'rgba(61, 104, 245, 1)'],
        ['rgba(138, 255, 206, 1)', 'rgba(138, 255, 206, .8)', 'rgba(138, 255, 206, 1)'],
        ['rgba(87, 53, 255, 1)', 'rgba(87, 53, 255, .8)', 'rgba(87, 53, 255, 1)'],
        ['rgba(136, 240, 255, 1)', 'rgba(136, 240, 255, .8)', 'rgba(136, 240, 255, 1)'],
      ];

      const areaStyles: Array<string[]> = [
        ['rgba(255, 183, 92, .4)', 'rgba(255, 183, 92, .2)'],
        ['rgba(61, 104, 245, .4)', 'rgba(61, 104, 245, .2)'],
        ['rgba(138, 255, 206, .4)', 'rgba(138, 255, 206, .2)'],
        ['rgba(87, 53, 255, .4)', 'rgba(87, 53, 255, .2)'],
        ['rgba(136, 240, 255, .4)', 'rgba(136, 240, 255, .2)'],
      ];

      const dataList = [
        { name: 'LGD', series: [0, 0, 0, 0, 0].map(() => Math.floor(Math.random() * 280)) },
        { name: 'Aster', series: [0, 0, 0, 0, 0].map(() => Math.floor(Math.random() * 250)) },
        { name: 'Ehome', series: [0, 0, 0, 0, 0].map(() => Math.floor(Math.random() * 200)) },
        { name: 'RNG', series: [0, 0, 0, 0, 0].map(() => Math.floor(Math.random() * 250)) },
        { name: 'XG', series: [0, 0, 0, 0, 0].map(() => Math.floor(Math.random() * 220)) },
      ];

      chart.setOption({
        grid: {
          top: 30,
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
        legend: {
          data: dataList.map(({ name }) => name),
          textStyle: {
            color: '#ffffff',
          },
          right: 0,
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
        series: dataList.map(({ name, series }, i) => ({
          data: series,
          name,
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
                  color: itemStyles[i][0],
                },
                {
                  offset: 0.5,
                  color: itemStyles[i][1],
                },
                {
                  offset: 1,
                  color: itemStyles[i][2],
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
                  color: areaStyles[i][0],
                },
                {
                  offset: 0.4,
                  color: areaStyles[i][1],
                },
                {
                  offset: 1,
                  color: 'rgba(255, 255, 255, 0)',
                },
              ],
            },
          },
        })),
      });
    }

    function typeChangeHande() {
      setOptions();
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
