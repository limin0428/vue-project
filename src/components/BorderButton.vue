<template>
  <div class="container" :style="style">
    <slot>{{props.text}}</slot>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
  borderColor: {
    type: String,
    default: '#f40'
  },
  backGroundColor: {
    type: String,
    default: '#fff'
  },
  text: {
    type: String,
    default: '按钮'
  },
  textColor: {
    type: String,
    default: '#000'
  },
});
const style = computed(() => {
  return {
    '--textColor': props.textColor,
    '--borderColor': props.borderColor,
    '--backGroundColor': props.backGroundColor,
  }
})
</script>

<style scoped lang="less">
.container {
  width: 88px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: var(--textColor);
  &::before {
    content: '';
    position: absolute;
    background: var(--borderColor);
    width: 200%;
    height: 200%;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    animation: rotate 3s infinite linear;
  }
  &::after {
    content: '';
    position: absolute;
    background: var(--backGroundColor);
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    z-index: -1;
    top: 2px;
    left: 2px;
    border-radius: 8px;
  }
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>
