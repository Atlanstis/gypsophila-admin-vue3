<template>
  <div class="screen-wrap">
    <div
      class="screen-layout"
      :style="{
        height: `${height}px`,
        width: `${width}px`,
        transform: `translateZ(0px) scale(${scaleW}, ${scaleH})`,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useEventListener } from '@/hooks/use-event-listener';

export default defineComponent({
  name: 'ScreenLayout',

  props: {
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
  },

  setup(props) {
    const scaleH = ref(0);
    const scaleW = ref(0);

    function calcRatio() {
      scaleH.value = Number((document.documentElement.clientHeight / props.height).toFixed(4));
      scaleW.value = Number((document.documentElement.clientWidth / props.width).toFixed(4));
    }

    let removeFn: () => void = () => {};
    onMounted(() => {
      const { removeEvent } = useEventListener({
        el: window,
        name: 'resize',
        listener: calcRatio,
      });
      removeFn = removeEvent;
      calcRatio();
    });

    onUnmounted(() => {
      removeFn();
    });
    return {
      scaleW,
      scaleH,
    };
  },
});
</script>

<style lang="less" scoped>
.screen-wrap {
  height: 100vh;
  width: 100vw;
  position: relative;
  color: #fff;
  background: #333;
  .screen-layout {
    transform-origin: 0 0;
  }
}
</style>
