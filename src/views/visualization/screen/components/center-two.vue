<template>
  <div class="map-wrap" ref="chartRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue';
import { useEcharts } from '@/hooks/use-echarts';
import chinaMapJson from '../constants/china-map.json';
import textureImg from '../assets/texture.png';

export default defineComponent({
  name: 'CenterTwo',

  setup() {
    const chartRef = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      const { echarts, setOptions } = useEcharts(chartRef as Ref<HTMLDivElement>);
      echarts.registerMap('china', chinaMapJson as any);
      function calcMapOptions() {
        let option: echarts.EChartsOption = {
          tooltip: {
            show: false,
          },
          geo: {
            map: 'china',
            roam: false,
            zoom: 1.6,
            center: [105, 36],
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: '#0d2338',
              borderColor: '#4c90a4',
              borderWidth: 2,
              shadowBlur: 5,
              shadowOffsetY: 20,
              shadowOffsetX: 0,
              shadowColor: '#01012a',
            },
            emphasis: {
              disabled: true,
            },
            select: {
              disabled: true,
            },
          },
          series: [
            {
              type: 'map',
              map: 'china',
              roam: false,
              zoom: 1.6,
              center: [105, 36],
              showLegendSymbol: false,
              label: {
                show: false,
              },
              itemStyle: {
                areaColor: {
                  image: textureImg,
                  repeat: 'no-repeat',
                },
                borderColor: '#6ddaf6',
                borderWidth: 1,
              },
              emphasis: {
                disabled: true,
              },
              select: {
                disabled: true,
              },
            },
            {
              name: '',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: [
                { value: [121.48, 31.22], num: 4 },
                { value: [116.46, 39.92], num: 14 },
                { value: [120.19, 30.26], num: 12 },
              ] as any,
              symbolSize: 15,
              tooltip: {
                padding: 0,
                borderWidth: 0,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                formatter(value: any) {
                  return `
                <div style="height: 200px; width: 280px; background:url(${
                  new URL('../assets/tooltip-bg.png', import.meta.url).href
                }) no-repeat center; background-size: 100% 100%;">
                  <div style="padding-left: 40px; font-size: 14px; padding-top: 20px">
                    <span style="color: #46d6e2; margin-right: 20px">数量</span>
                    <span style="color: #fff;">${value.data.num}</span>
                  </div>
                  <div style="padding-left: 40px; font-size: 14px; padding-top: 10px">
                    <span style="color: #46d6e2; margin-right: 20px">****</span>
                    <span style="color: #fff;">****</span>
                  </div>
                  <div style="padding-left: 40px; font-size: 14px; padding-top: 10px">
                    <span style="color: #46d6e2; margin-right: 20px">****</span>
                    <span style="color: #fff;">****</span>
                  </div>
                  <div style="padding-left: 40px; font-size: 14px; padding-top: 10px">
                    <span style="color: #46d6e2; margin-right: 20px">****</span>
                    <span style="color: #fff;">****</span>
                  </div>
                  <div style="padding-left: 40px; font-size: 14px; padding-top: 10px">
                    <span style="color: #46d6e2; margin-right: 20px">****</span>
                    <span style="color: #fff;">****</span>
                  </div>
                </div>`;
                },
                show: true,
              },
              encode: {
                value: 2,
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke',
              },
              label: {
                show: false,
              },
              itemStyle: {
                color: '#84f8ff',
                shadowBlur: 2,
                shadowColor: '#fff',
              },
              zlevel: 1,
            },
          ],
        };
        setOptions(option);
      }
      calcMapOptions();
    });
    return { chartRef };
  },
});
</script>

<style lang="less" scoped>
.map-wrap {
  height: 100%;
  width: 100%;
}
</style>
