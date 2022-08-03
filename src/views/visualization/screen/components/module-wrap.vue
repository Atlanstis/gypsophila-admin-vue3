<template>
  <div class="template-wrap">
    <div class="title" :class="{ long: type === 'long' }">
      <div class="text">
        <slot name="title"></slot>
      </div>
      <div class="other" v-if="btns.length">
        <div class="btn-wrap">
          <span
            v-for="btn of btns"
            :key="btn.value"
            :class="{ active: btnActive === btn.value }"
            @click="btnChangeHandle(btn)"
          >
            {{ btn.name }}
          </span>
        </div>
      </div>
    </div>
    <div class="content" :class="{ long: type === 'long' }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue';

interface InterfaceBtn {
  name: string;
  value: string;
}

export default defineComponent({
  name: 'ModuleWrap',

  props: {
    type: {
      type: String as PropType<string>,
      default: '',
    },

    btns: {
      type: Array as PropType<InterfaceBtn[]>,
      default: () => [],
    },
  },

  emits: ['on-change'],

  setup(props, { emit }) {
    const btnActive = ref('');

    function btnChangeHandle(fitstBtn: InterfaceBtn) {
      btnActive.value = fitstBtn.value;
      emit('on-change', btnActive.value, fitstBtn);
    }

    onMounted(() => {
      if (props.btns.length) {
        btnChangeHandle(props.btns[0]);
      }
    });
    return {
      btnActive,
      btnChangeHandle,
    };
  },
});
</script>

<style lang="less" scoped>
.template-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  .title {
    padding: 0 15px;
    height: 34px;
    line-height: 34px;
    background: url(../assets/title-bg-short.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    &.long {
      background: url(../assets/title-bg-long.png) no-repeat;
      background-size: 100% 100%;
      padding-left: 20px;
    }
    .text {
      font-family: YouSheBiaoTiHei;
      font-size: 22px;
      background-image: -webkit-linear-gradient(bottom, #a7cdff, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .content {
    flex: 1;
    margin: 9px 0;
    background: url(../assets/bottom-bar-short.png) no-repeat, url(../assets/left-bar.png) no-repeat,
      url(../assets/right-bar.png) no-repeat, rgba(22, 89, 187, 0.15);
    background-position: bottom, left, right;
    background-size: 100%, 4px 100%, 4px 100%;
    padding: 10px 15px;
    &.long {
      background: url(../assets/bottom-bar-long.png) no-repeat,
        url(../assets/left-bar.png) no-repeat, url(../assets/right-bar.png) no-repeat,
        rgba(22, 89, 187, 0.15);
      background-position: bottom, left, right;
      background-size: 100%, 4px 100%, 4px 100%;
    }
  }
}
.btn-wrap {
  font-size: 14px;
  span {
    display: inline-block;
    height: 100%;
    color: #8496ac;
    cursor: pointer;
    &.active {
      color: #7de2ff;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background: #7de2ff;
      }
    }
  }
  span + span {
    margin-left: 10px;
  }
}
</style>
