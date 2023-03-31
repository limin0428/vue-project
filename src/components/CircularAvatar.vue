<template>
  <div class="container">
    <div
      :class="['avatar', { out_in: props.maskDirection === 'out_in' }]"
      :style="{
        backgroundImage: `url(${props.avatarUrl})`
      }"
    ></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { DEFAULT_AVATER_URL } from '../mock/mockData'
const props = defineProps({
  avatarUrl: {
    type: String,
    default: DEFAULT_AVATER_URL
  },
  maskDirection: {
    type: String,
    default: 'in_out'
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  .avatar {
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
  }
  .avatar::before,
  .avatar::after {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
  .avatar.out_in::before {
    clip-path: circle(50% at 50% 50%);
  }

  .avatar::after {
    background: inherit;
    background-size: 100% 100%;
    clip-path: circle(0% at 50% 50%);
  }
  .avatar.out_in::after {
    display: none;
  }
}
.container:hover .avatar::after {
  clip-path: circle(50% at 50% 50%);
}
.container:hover .avatar.out_in::before {
  clip-path: circle(0% at 50% 50%);
}
</style>
