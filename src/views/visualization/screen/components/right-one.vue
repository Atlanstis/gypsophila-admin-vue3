<template>
  <ModuleWrap>
    <template #title>右侧标题一</template>
    <div class="content-wrap">
      <div class="top-wrap">
        <div class="icon-wrap"></div>
        <div class="data-wrap">
          <p class="rate">45%</p>
          <p class="text">夜魇胜率</p>
        </div>
        <div class="bar-wrap">
          <div class="text-wrap">
            <p class="label">天怒法师</p>
            <p class="value">72</p>
          </div>
          <div class="bar">
            <div class="bar-inner" :style="{ width: '94%' }">
              <div class="suffix"></div>
            </div>
          </div>
          <div class="text-wrap">
            <p class="label">复仇之魂</p>
            <p class="value">16</p>
          </div>
          <div class="bar">
            <div class="bar-inner" :style="{ width: '20%' }">
              <div class="suffix"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="warning-title">
        <div class="text">加入时间</div>
        <div class="sign">
          <div class="circle color-warn"></div>
          <div class="sign-text">天辉</div>
          <div class="circle color-normal"></div>
          <div class="sign-text">夜魇</div>
        </div>
      </div>
      <div class="warning-list">
        <ScrollList :list="list" v-slot="{ item }">
          <div class="warning-wrap">
            <div class="title-line">
              <p class="warning-name" :style="{ color: item.__color__ }">{{ item.name }}</p>
              <p class="warning-label" :style="{ 'background-color': item.__color__ }">
                {{ item.nick }}
              </p>
            </div>
            <div class="info-line">
              <p class="info-title">加入时间：</p>
              <p class="infp-content">{{ item.addTime }}</p>
              <p class="info-title">英雄类型：</p>
              <p class="infp-content">{{ item.type }}</p>
            </div>
            <div class="info-line">
              <p class="info-title">****：</p>
              <p class="infp-content">******</p>
              <p class="info-title">****：</p>
              <p class="infp-content">******</p>
            </div>
          </div>
        </ScrollList>
      </div>
    </div>
  </ModuleWrap>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ModuleWrap from './module-wrap.vue';
import ScrollList from './scroll-list.vue';

export default defineComponent({
  name: 'RightOne',

  components: {
    ModuleWrap,
    ScrollList,
  },

  setup() {
    const list = ref([
      { name: '敌法师', addTime: '2004-03-01', type: '敏捷', nick: 'AM', __color__: '#ff974b' },
      { name: '恐怖利刃', addTime: '2004-02-20', type: '敏捷', nick: 'TB', __color__: '#46d6e2' },
      { name: '幽鬼', addTime: '2006-02-24', type: '敏捷', nick: 'SPE', __color__: '#46d6e2' },
      { name: '风暴之灵', addTime: '2007-06-10', type: '智力', nick: 'ST', __color__: '#ff974b' },
    ]);
    return {
      list,
    };
  },
});
</script>

<style lang="less" scoped>
@color-warn: #ff974b;
@color-normal: #46d6e2;

.content-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top-wrap {
    height: 28%;
    display: flex;
    .icon-wrap {
      height: 100%;
      width: 90px;
      background: url('../assets/rectification-icon.png') no-repeat center;
      background-size: contain;
    }
    .data-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 25px 0 10px;
      .rate {
        font-size: 24px;
      }
      .text {
        font-size: 16px;
        opacity: 0.7;
        margin-top: 10px;
      }
    }
    .bar-wrap {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .text-wrap {
        color: #fff;
        display: flex;
        justify-content: space-between;
        .label {
          font-size: 14px;
        }
        .value {
          font-size: 16px;
        }
      }
      .bar {
        height: 14px;
        background: rgba(22, 89, 187, 0.15);
        margin: 6px 0;
        position: relative;
        .bar-inner {
          height: 10px;
          position: absolute;
          top: 2px;
          bottom: 2px;
          left: 0px;
          width: 0;
          background: linear-gradient(to right, #0e6cdf, #38a1f8, #78e0f9);
          transition: width 1s;
          .suffix {
            position: absolute;
            top: -2px;
            bottom: -2px;
            width: 2px;
            right: -1px;
            background: #fff;
          }
        }
      }
    }
  }
  .warning-title {
    height: 38px;
    line-height: 38px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .text {
      height: 100%;
      background: url(../assets/small-title-bg.png) no-repeat;
      background-size: 100%;
      padding: 0 15px;
      line-height: 32px;
      font-size: 16px;
    }
    .sign {
      display: flex;
      align-items: center;
      .circle {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-left: 10px;
        &.color-warn {
          background-color: @color-warn;
        }
        &.color-normal {
          background-color: @color-normal;
        }
      }
      .sign-text {
        margin-left: 10px;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .warning-list {
    flex: 1;
    position: relative;
  }
}
.warning-wrap {
  padding: 6px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    background: rgba(22, 89, 187, 0.15);
  }
  .title-line {
    display: flex;
    align-items: center;
    font-size: 14px;
    .warning-name {
      margin: 0 8px 0;
      flex: 1;
    }
    .warning-label {
      height: 20px;
      line-height: 20px;
      padding: 0 12px;
      border-radius: 10px;
    }
  }
  .info-line {
    padding-left: 8px;
    display: flex;
    font-size: 14px;
    .info-title {
      color: rgba(255, 255, 255, 0.7);
      margin-left: 12px;
    }
    .info-content {
      color: #fff;
      margin-left: 4px;
    }
  }
}
</style>
