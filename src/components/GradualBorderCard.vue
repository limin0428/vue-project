<template>
 <div class="card">
    <div class="container">
        <slot>插槽文本</slot>
    </div>
 </div>
</template>

<script setup>

</script>

<style lang="less">
.card {
    background: repeating-linear-gradient(-45deg, #e8544d, #e8544d 10px, #fff 10px,  #fff 20px, #75adf5 20px, #75adf5 30px,  #fff 30px,  #fff 40px) -20px -20px;
    background-size: 200% 200%;
    padding: 5px;
    transition: 0.3s;
    .container {
        padding: 10px;
        background: #fff;
    }
    &:hover {
        // box-shadow: 水平阴影的位置  垂直阴影的位置  模糊距离(可选)  阴影的大小(可选)  阴影的颜色(可选)  内层阴影(inset)？
        // https://www.runoob.com/cssref/css3-pr-box-shadow.html
        box-shadow: 0px 3px 10px rgba(0,0,0, 0.3);
        background-position: 0 0;
    }
}

 
</style>
