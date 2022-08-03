<template>
  <div class="screen-body">
    <div class="screen-left">
      <div class="height-25">
        <LeftOne />
      </div>
      <div class="height-25">
        <LeftTwo />
      </div>
      <div class="height-25">
        <LeftThree />
      </div>
      <div class="height-25">
        <LeftFour />
      </div>
    </div>
    <div class="screen-center">
      <div class="height-8">
        <CenterOne />
      </div>
      <div class="height-60">
        <CenterTwo />
      </div>
      <div class="height-32">
        <CenterThree />
      </div>
    </div>
    <div class="screen-right">
      <div class="hight-50">
        <RightOne />
      </div>
      <div class="hight-50">
        <RightTwo />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftOne from './left-one.vue';
import LeftTwo from './left-two.vue';
import LeftThree from './left-three.vue';
import LeftFour from './left-four.vue';
import RightOne from './right-one.vue';
import RightTwo from './right-two.vue';
import CenterOne from './center-one.vue';
import CenterTwo from './center-two.vue';
import CenterThree from './center-three.vue';
</script>

<script lang="ts">
export default {
  name: 'ScreenBody',
};
</script>

<style lang="less" scoped>
.screen-body {
  flex: 1;
  display: flex;
  .screen-left {
    width: 24%;
    height: 100%;
    .height-25 {
      height: 25%;
    }
  }
  .screen-center {
    width: 52%;
    padding: 0 14px;
    .height-8 {
      height: 8%;
    }
    .height-60 {
      height: 60%;
    }
    .height-32 {
      height: 32%;
    }
  }
  .screen-right {
    width: 24%;
    .hight-50 {
      height: 50%;
    }
  }
}
</style>
