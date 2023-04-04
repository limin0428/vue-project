<template>
  <div class="container">
    <span class="text" 
    v-for="(item, index) in props.text" :key="index" 
    :style="{ 'animation-delay': `${0.2 * index}s` }">
     {{ item }}
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "HELLO",
  },
});
</script>

<style lang="less" scoped>
.container {
  .text {
    font-size: 16px;
    font-weight: bold;
    color: #5cd3ed;
    animation: shadowing 1s ease-in-out infinite alternate;
  }
}
@keyframes shadowing {
  to {
    color: #ff0266;
    text-shadow: 20px 0 70px #ff0266;
  }
}

</style>
