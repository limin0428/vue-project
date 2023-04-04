<template>
  <div class="container">
    <div class="olympic">
      <span
        class="ring"
        v-for="(item, index) in 5"
        :key="index"
        :style="{
          left: `${index * 33}px`,
          borderColor: COLOR_LIST[index],
        }"
      ></span>
    </div>
  </div>
</template>

<script setup>
const COLOR_LIST = ["#52aadd", "#fbed56", "#000000", "#60b258", "#eb3323"];
</script>

<style lang="less" scoped>
.container {
    width: 200px;
    height: 90px;
  .olympic {
    position: relative;
    transform-style: preserve-3d;
    .ring {
      width: 60px;
      height: 60px;
      border: 6px solid;
      box-sizing: border-box;
      background: transparent;
      border-radius: 50%;
      position: absolute;
    }
    .ring:nth-child(2n) {
      top: 28px;
    }
    .ring:nth-child(2) {
      transform: rotateX(1deg);
      transform-origin: center 25%;
    }
    .ring:nth-child(3) {
      transform: rotateX(2deg);
      transform-origin: center 75%;
    }
    .ring:nth-child(4) {
      transform: rotateX(3deg);
      transform-origin: center 25%;
    }
    .ring:nth-child(5) {
      transform: rotateX(4deg);
      transform-origin: center 75%;
    }
  }
}
</style>
