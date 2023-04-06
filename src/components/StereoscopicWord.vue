<template>
 <div class="container">
    <h1 class="text" :data-text="props.text" :style="style">{{ props.text }}</h1>
 </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
    text: {
        type: String,
        default: 'HELLO'
    },
    fontSize: {
        type: String,
        default: '60px'
    },
    fontColor: {
        type: String,
        default: '#ff6800'
    }
})

const style = computed(() => {
    return {
        '--fontColor': props.fontColor,
        '--fontSize': props.fontSize,
        '--translateX': `${parseInt(props.fontSize) * (-0.4)}px`,
        '--translateY': `${parseInt(props.fontSize) * (0.16)}px`,
    }
})
</script>

<style lang="less" scoped>
.container {
    position: relative;
    .text {
        font-weight: bold;
        color: var(--fontColor);
        font-size: var(--fontSize);
    }
    .text::before {
        content: attr(data-text);
        position: absolute;
        transform: translate(var(--translateX), var(--translateY)) scaleY(0.5) skew(50deg);
        color: #000;
        z-index: -1;
        filter: blur(2px);
        font-weight: inherit;
        -webkit-mask-image: linear-gradient(transparent, #000);
    }
    
}
 
</style>
