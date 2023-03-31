<template>
  <div class="container">
    <div class="front">
      <slot name="front">
        <img :src="props.avatar" alt="正面图" />
      </slot>
    </div>
    <div class="back">
      <slot name="back">
        <p>李敏</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { DEFAULT_AVATAR } from '../mock/mockData.js'
const props = defineProps({
  avatar: {
    type: String,
    default: DEFAULT_AVATAR
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 86px;
  height: 86px;
  border: 2px solid #ccc;
  position: relative;
  /* 定义3D元素距视图的距离 https://www.w3school.com.cn/cssref/pr_perspective.asp */
  perspective: 500px;
  &:hover .front {
    transform: rotateY(180deg);
    /* 定义当元素不面向屏幕时是否可见 https://www.w3school.com.cn/cssref/pr_backface-visibility.asp */
    backface-visibility: hidden;
  }
  &:hover .back {
    transform: rotateY(0);
  }
  .front, .back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.4s;
  }
  .front img {
    width: 100%;
    height: 100%;
  }
  .back {
    transform: rotateY(-180deg);
    backface-visibility: hidden;
  }
}
</style>
