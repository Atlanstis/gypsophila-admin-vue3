<template>
  <div class="statistical-wrap">
    <div v-for="(item, index) of list" :key="index" class="block-wrap">
      <img src="../assets/statistical-bg.png" />
      <img :src="item.icon" class="icon" />
      <div class="content">
        <div class="title">{{ item.title }}</div>
        <div class="num">{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import Icon82 from '../assets/u82.png';
import Icon83 from '../assets/u83.png';
import Icon84 from '../assets/u84.png';
import Icon85 from '../assets/u85.png';

export default defineComponent({
  name: 'CenterOne',

  setup() {
    const list = reactive([
      { title: '总英雄数', icon: Icon82, count: 122 },
      { title: '敏捷英雄数', icon: Icon83, count: 44 },
      { title: '智力英雄数', icon: Icon84, count: 40 },
      { title: '力量英雄数', icon: Icon85, count: 38 },
    ]);
    return {
      list,
    };
  },
});
</script>

<style lang="less" scoped>
.statistical-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .block-wrap {
    display: inline-block;
    background: rgba(22, 89, 187, 0.15);
    position: relative;
    width: 224px;
    img {
      display: block;
    }
    .icon {
      position: absolute;
      height: 40px;
      width: 40px;
      top: 50%;
      transform: translateY(-50%);
      left: 9px;
    }
    .content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 60px;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 2px 4px;
      .title {
        color: #4496ff;
        font-size: 16px;
      }
      .num {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
