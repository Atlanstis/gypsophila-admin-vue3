<template>
  <ModuleWrap>
    <template #title>TI 奖金 TOP5</template>
    <div class="content-wrap">
      <p class="tip">* 根据奖金金额进行排名</p>
      <div class="list-wrap">
        <div class="list-item" v-for="(item, i) of list" :key="i">
          <div class="title-line">
            <p class="letter" :class="`color-${i}`">{{ letter[i] }}</p>
            <p class="title">{{ item.title }}</p>
          </div>
          <div class="info-line">
            <div class="info-split">
              <p class="info-title">总奖金：</p>
              <p class="info-content">{{ item.bonus }}</p>
            </div>
            <div class="info-split">
              <p class="info-title">举办地：</p>
              <p class="info-content">{{ item.hostCity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModuleWrap>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ModuleWrap from './module-wrap.vue';

export default defineComponent({
  name: 'RightTwo',

  components: {
    ModuleWrap,
  },

  setup() {
    const list = ref([
      {
        title: 'The International DOTA2 Championships 10',
        bonus: '$40,018,195',
        hostCity: '瑞典 · 斯德哥尔摩',
      },
      {
        title: 'The International DOTA2 Championships 9',
        bonus: '$34,310,030',
        hostCity: '中国 · 上海',
      },
      {
        title: 'The International DOTA2 Championships 8',
        bonus: '$25,532,177',
        hostCity: '加拿大 · 温哥华',
      },
      {
        title: 'The International DOTA2 Championships 7',
        bonus: '$24,787,916',
        hostCity: '美国 · 西雅图',
      },
      {
        title: 'The International DOTA2 Championships 6',
        bonus: '$20,770,460',
        hostCity: '美国 · 西雅图',
      },
    ]);
    const letter = ['A', 'B', 'C', 'D', 'E'];
    return {
      list,
      letter,
    };
  },
});
</script>

<style lang="less" scoped>
.content-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .tip {
    text-align: right;
    color: rgba(76, 149, 255, 0.7);
    font-size: 13px;
    margin: 6px 0 2px;
  }
  .list-wrap {
    flex: 1;
    .list-item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 20%;
      .title-line {
        display: flex;
        align-items: center;
        .letter {
          color: #fff;
          font-size: 12px;
          height: 16px;
          width: 16px;
          line-height: 16px;
          text-align: center;
          &.color-0 {
            background: #ff4c4c;
          }
          &.color-1 {
            background: #ff9a4c;
          }
          &.color-2 {
            background: #ffd067;
          }
          &.color-3 {
            background: #4c95ff;
          }
          &.color-4 {
            background: #5f779a;
          }
        }
        .title {
          margin-left: 12px;
          color: #4496ff;
          font-size: 16px;
        }
      }
      .info-line {
        margin-left: 20px;
        font-size: 16px;
        display: flex;
        .info-title {
          color: rgba(255, 255, 255, 0.7);
        }
        .info-content {
          color: #fff;
          margin-left: 2px;
        }
        .info-split {
          flex: 1;
          display: flex;
        }
      }
    }
  }
}
</style>
