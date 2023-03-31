<template>
  <div class="container" @mouseenter="closeAuto" @mouseleave="openAuto">
    <div class="banner" :style="{ transform: `translateX(-${step}00%)` }">
      <div class="item" v-for="(item, index) in props.imgList" :key="index">
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="indicator">
      <span
        v-for="item in props.imgList.length"
        :key="item"
        :class="{ active: step === item - 1 }"
        @click="() => handleClick(item - 1)"
      >
      </span>
    </div>
    <div class="arrow" v-if="showArrow">
      <img
        @click="() => moveTo(step - 1)"
        class="arrow_left"
        :src="ARROW_IMG"
        alt=""
      />
      <img
        @click="() => moveTo(step + 1)"
        onclick="moveToNext()"
        class="arrow_right"
        :src="ARROW_IMG"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onUnmounted } from 'vue';
const ARROW_IMG = 'https://img0.baidu.com/it/u=2720776542,3206423671&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500';
const props = defineProps({
  imgList: {
    type: Array,
    default: () => []
  },
  auto: {
    type: Boolean,
    default: false
  },
  interval: {
    type: Number,
    default: 2000
  },
  showArrow: {
    type: Boolean,
    default: false
  }
})
let step = ref(0)
let timer = null

const moveTo = (index) => {
  step.value = index < 0 ? props.imgList.length - 1 : index >= props.imgList.length ? 0 : index
}

const closeAuto = () => {
  if (!props.auto) {
    return
  }
  clearTimeout(timer)
}

const openAuto = () => {
  if (!props.auto) {
    return
  }
  timer = setInterval(() => {
    moveTo(step.value + 1)
  }, props.interval)
}

const handleClick = (index) => {
  moveTo(index)
}

onMounted(() => {
   props.auto && openAuto();
});

onUnmounted(() => {
   !timer && clearTimeout(timer);
})
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  height: 280px;
  overflow: hidden;
  position: relative;
  .banner {
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.5s;
    .item img {
      width: 500px;
      height: 280px;
    }
  }
  .indicator {
    display: flex;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.indicator {
  display: flex;
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  span {
    width: 16px;
    height: 16px;
    border: 2px solid red;
    margin: 3px;
    border-radius: 50%;
    cursor: pointer;
    &.active {
      background: red;
    }
  }
}

.arrow {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
  .arrow_left {
    transform: rotate(180deg);
  }
}
</style>
