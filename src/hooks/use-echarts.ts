import { Ref, unref } from 'vue';
import { tryOnUnmounted, useDebounceFn } from '@vueuse/core';
import * as echarts from 'echarts';
import { useEventListener } from './use-event-listener';

interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export function useEcharts(elRef: Ref<HTMLDivElement>) {
  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    });
  }
  let chartInstance: echarts.ECharts | null = null;

  const resizeFn: Fn = useDebounceFn(resize, 200);
  let removeResizeFn: Fn = () => {};

  function initCharts() {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echarts.init(el);
    const { removeEvent } = useEventListener({ el: window, name: 'resize', listener: resizeFn });
    removeResizeFn = removeEvent;
  }

  function setOptions(options: echarts.EChartsOption, clear = false) {
    if (!chartInstance) {
      initCharts();
      if (!chartInstance) return;
    }
    clear && chartInstance?.clear();
    chartInstance?.setOption(options);
  }

  tryOnUnmounted(() => {
    if (!chartInstance) return;
    removeResizeFn();
    chartInstance.dispose();
    chartInstance = null;
  });
  return {
    resize,
    setOptions,
    echarts,
  };
}
