<template>
 <div class="container" :style="style">
    <div class="item" 
        v-for="(item, index) in props.imgList" :key="index" 
        :style="{ transform: `translate(${getPos(index).x}px, ${getPos(index).y}px)` }"
    >
        <slot :name="`item${index}`">
            <img :src="item" alt="" >
        </slot>
    </div>
 </div>
</template>

<script setup>
 import { defineProps, computed } from 'vue';
 const props = defineProps({
    imgList: {
        type: Array,
        default: () => []
    },
    width: {
        type: String,
        default: '400px'
    },
    height: {
        type: String,
        default: '400px'
    },
    itemWidth: {
        type: String,
        default: '90px'
    },
    itemHeight: {
        type: String,
        default: '90px'
    },
 });
 const style = computed(() => {
    return {
        '--width': props.width,
        '--height': props.height,
        '--itemWidth': props.itemWidth,
        '--itemHeight': props.itemHeight,
    }
 })

 const getPos = (index) => {
    const r = parseInt(props.width) / 2;
    const pieceDeg = 360 / props.imgList.length;
    const t = (Math.PI / 180) * index * pieceDeg;
    const x = Math.sin(t) * r - parseInt(props.itemWidth) / 2;
    const y = -Math.cos(t) * r - parseInt(props.itemHeight) / 2;
    return { x, y }
 }
</script>

<style lang="less" scoped>
.container{
        margin: 16px auto;
        width: var(--width);
        height: var(--height);
        border-radius: 50%;
        border: 2px solid;
        position: relative;
        animation: rotate linear infinite 20s;
    }
    .item {
        width: var(--itemWidth);
        height: var(--itemHeight);
        border-radius: 50%;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        overflow: hidden;
    }
    .item img {
        width: 100%;
        height: 100%;
        animation: rotate linear infinite 20s reverse;
    }
</style>
