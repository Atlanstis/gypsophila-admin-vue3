<template>
  <ScreenLayout>
    <div class="screen">
      <ScreenHeader />
      <ScreenBody />
    </div>
  </ScreenLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScreenLayout from './components/screen-layout.vue';
import ScreenHeader from './components/screen-header.vue';
import ScreenBody from './components/screen-body.vue';

export default defineComponent({
  name: 'Screen',

  components: {
    ScreenLayout,
    ScreenHeader,
    ScreenBody,
  },
});
</script>

<style lang="less" scoped>
@font-face {
  font-family: YouSheBiaoTiHei;
  src: url(@/assets/font/YouSheBiaoTiHei.ttf);
}
.screen {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url(./assets/bg.png) no-repeat;
  background-size: 100% 100%;
}
</style>
