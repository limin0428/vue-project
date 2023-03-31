<template>
  <div class="container" :style="style">
    <h1 class="text">{{ props.text }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: 'Hello Word'
  },
  backGroundColor: {
    type: String,
    default: '#fff'
  },
  textColor: {
    type: String,
    default: '#000'
  }
})
const style = {
  '--backGroundColor': props.backGroundColor,
  '--textColor': props.textColor
}
</script>

<style lang="less" scoped>
.container {
  background: var(--backGroundColor);
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    color: var(--backGroundColor);
    /* 文字阴影 https://www.runoob.com/cssref/css3-pr-text-shadow.html */
    text-shadow: 1px 0 var(--textColor), 1px 1px var(--textColor), 1px -1px var(--textColor),
      0px 1px var(--textColor), 0px -1px var(--textColor), -1px 0px var(--textColor),
      -1px 1px var(--textColor), -1px -1px var(--textColor);
  }
}
</style>
