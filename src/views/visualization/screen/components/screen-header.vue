<template>
  <div class="screen-header">
    <div class="title">DOTA2 瞎逼扯</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScrrenHeader',
});
</script>

<style lang="less" scoped>
.screen-header {
  width: 100%;
  padding-bottom: 4%;
  background: url(../assets/header.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: -webkit-linear-gradient(bottom, #a7cdff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: YouSheBiaoTiHei;
    font-size: 42px;
    line-height: 60px;
  }
}
</style>
