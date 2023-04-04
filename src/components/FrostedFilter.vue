<template>
 <div class="container" :style="{ backgroundImage: `url(${props.backGroundImg})`}">
    <div class="modal"></div>
 </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { DEFAULT_AVATER_URL } from '../mock/mockData'

const props = defineProps({
    backGroundImg: {
        type: String,
        default: DEFAULT_AVATER_URL
    }
})

</script>

<style lang="less" scoped>
.container {
    width: 150px;
    height: 100px;
    background-size: 100% 100%;
    .modal {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        // https://www.runoob.com/cssref/css-backdrop-filter.html
        backdrop-filter: blur(2px);
        transition: 0.5s;
    }
    &:hover .modal{
        width: 0px;
    }
}
</style>
