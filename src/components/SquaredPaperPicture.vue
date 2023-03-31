<template>
  <div class="container" :style="style">
    <div class="item" v-for="item in 9" :key="item" :style="{
      backgroundImage: `url(${props.pictureUrl})`
    }"></div>
  </div>
</template>

<script setup>
import { DEFAULT_PICTURE_URL } from '../mock/mockData.js'
import { defineProps, computed } from 'vue'
const props = defineProps({
  itemWidth: {
    type: Number,
    default: 100
  },
  pictureUrl: {
    type: String,
    default: DEFAULT_PICTURE_URL
  }
});

const style = computed(() => {
  return {
    '--w': props.itemWidth,
    '--itemWidth': `${props.itemWidth}px`,
    '--width': `${props.itemWidth * 3}px`,
    '--position1': `${props.itemWidth * (-1)}px`,
    '--position2': `${props.itemWidth * (-2)}px`,
  }
})

</script>

<style lang="less" scoped>

.container {
  /* 网格布局  https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html */
  display: grid;
  grid-template-columns: var(--itemWidth) var(--itemWidth) var(--itemWidth);
  grid-template-rows: repeat(3, var(--itemWidth));
  /* grid-gap: 20px 20px; */
  justify-content: center;
  width: var(--width);
  .item {
    width: 100%;
    height: 100%;
    background-size: var(--width) var(--width);
    position: relative;
    box-shadow: inset 0 0 0 1px #ffff;
    transition: 0.4s;
    top: 20px;
    background-position-y: var(--position2);
    &:nth-child(3n + 1) {
      left: -20px;
      background-position-x: 0px;
    }
    &:nth-child(3n + 2) {
      left: 0px;
      background-position-x: var(--position1);
    }
    &:nth-child(3n) {
      left: 20px;
      background-position-x: var(--position2);
    }
    &:nth-child(-n + 6) {
      background-position-y: var(--position1);
      top: 0px;
    }
    &:nth-child(-n + 3) {
      top: -20px;
      background-position-y: 0px;
    }
  }
  &:hover .item {
    top: 0px;
    left: 0px;
    /* https://www.runoob.com/cssref/css3-pr-box-shadow.html */
    box-shadow: inset 0 0 0px 0px #ffff;
  }
}
</style>
