<template>
  <div class="scroll-wrapper" ref="wrapperRef">
    <div
      class="scroll-content"
      :style="{ transform: `translateY(-${translateLength}px)` }"
      :class="{ 'has-transition': hasTransition }"
      @transitionend="transitionend"
      @mouseenter="stopInterval"
      @mouseleave="startInterval"
    >
      <template v-if="show">
        <div :style="{ height: `${singleHeight}px` }" v-for="(item, i) of list" :key="i">
          <slot :item="item"></slot>
        </div>
        <template v-if="list.length > limit">
          <div
            :style="{ height: `${singleHeight}px` }"
            v-for="(item, i) of list"
            :key="`copy-${i}`"
          >
            <slot :item="item"></slot>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, unref, Ref, watch, nextTick } from 'vue';

export default defineComponent({
  name: 'ScrollList',

  props: {
    limit: {
      type: Number as PropType<number>,
      default: 3,
    },
    list: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    time: {
      type: Number as PropType<number>,
      default: 3000,
    },
  },

  setup(props) {
    const wrapperRef = ref<HTMLDivElement | null>(null);
    const show = ref(false);
    const hasTransition = ref(false);
    const times = ref(0);
    const translateLength = ref(0);
    const singleHeight = ref(0);
    let iterval: number | undefined;

    function startInterval() {
      if (props.list.length > props.limit) {
        iterval = setInterval(() => {
          hasTransition.value = true;
          times.value++;
          translateLength.value = times.value * singleHeight.value;
        }, props.time);
      }
    }

    function stopInterval() {
      clearInterval(iterval);
      iterval = undefined;
    }

    function transitionend() {
      if (times.value >= props.list.length * 2 - props.limit) {
        hasTransition.value = false;
        times.value = props.list.length - props.limit;
        translateLength.value = times.value * singleHeight.value;
      }
    }

    watch(
      props.list,
      () => {
        if (iterval !== undefined) {
          stopInterval();
        }
        hasTransition.value = false;
        times.value = 0;
        translateLength.value = times.value * singleHeight.value;
        nextTick(() => {
          startInterval();
        });
      },
      { immediate: true },
    );

    onMounted(() => {
      const el = unref(wrapperRef as Ref<HTMLDivElement>);
      if (el) {
        singleHeight.value = Number((el.clientHeight / props.limit).toFixed(2));
        show.value = true;
      }
    });
    return {
      show,
      hasTransition,
      translateLength,
      wrapperRef,
      singleHeight,
      transitionend,
      stopInterval,
      startInterval,
    };
  },
});
</script>

<style lang="less" scoped>
.scroll-wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .scroll-content {
    transform: translateY(0);
    &.has-transition {
      transition: all 0.5s;
    }
  }
}
</style>
