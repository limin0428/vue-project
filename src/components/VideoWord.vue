<template>
  <div class="containter">
    <video :src="props.videoUrl" autoplay muted loop></video>
    <div class="text">{{ props.text }}</div>
  </div>
</template>

<script setup>
import { DEFAULT_VIDEO_URL } from '../mock/mockData.js'
import { defineProps } from 'vue'
const props = defineProps({
  videoUrl: {
    type: String,
    default: DEFAULT_VIDEO_URL
  },
  text: {
    type: String,
    default: 'Hello Word！'
  }
})
</script>

<style lang="less" scoped>
.containter {
  position: relative;
  width: 120px;
  height: 50px;
}
.containter video {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  background-color: #fff;
  /*  颜色混合  https://www.runoob.com/cssref/pr-mix-blend-mode-html.html */
  mix-blend-mode: screen;
}
</style>
