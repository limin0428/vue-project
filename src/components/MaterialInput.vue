<template>
  <div class="container" :style="style">
    <input type="text" required v-model="valueModel" placeholder="" />
    <span class="bar"></span>
    <label :class="['label', { valid: valueModel }]">{{props.placeholder}}</label>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'
const valueModel = ref('')
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: '#f40'
  },
  placeholder: {
    type: String,
    default: 'Hello Word!'
  }
})

const style = {
    '--borderColor': props.borderColor
}
const emit = defineEmits(['change'])
watch(
  () => props.value,
  (val) => {
    if (val === valueModel.value) {
      return
    }
    valueModel.value = val
  }
)

watch(
  () => valueModel.value,
  (val) => {
    if (val === props.value) {
      return
    }
    emit('change', valueModel.value)
  }
)
</script>

<style lang="less" scoped>
.container {
  height: 34px;
  position: relative;
  width: 180px;
  margin-top: 50px;
  border-bottom: 2px solid;
  input {
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: 0px;
  }
  input:focus ~ .bar {
    width: 100%;
  }
  .valid, input:focus ~ .label{
    transform: translateY(-36px);
  }
  .bar {
    position: absolute;
    bottom: -2px;
    height: 2px;
    width: 0;
    left: 50%;
    background: var(--borderColor);
    transform: translateX(-50%);
    transition: 0.4s ease;
  }
  .label {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: 7px;
    transition: 0.4s ease;
    color: #999;
  }
}
</style>
