<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import { banners, annulars, ROLL_CARD_AVATAR } from './mock/mockData.js'
import BannerList from './components/BannerList.vue'
import BorderButton from './components/BorderButton.vue'
import RollCard from './components/RollCard.vue'
import HollowWord from './components/HollowWord.vue'
import VideoWord from './components/VideoWord.vue'
import AnnularLayout from './components/AnnularLayout.vue'
import MaterialInput from './components/MaterialInput.vue'
import SquaredPaperPicture from './components/SquaredPaperPicture.vue'
import CircularAvatar from './components/CircularAvatar.vue'
const materialInputValue = ref('')

const handleChange = (val) => {
  materialInputValue.value = val
}
</script>

<template>
  <div class="app">
    <!-- 轮播图 -->
    <BannerList
      class="mrTop32"
      :img-list="banners"
      :auto="true"
      :show-arrow="true"
      :interval="3000"
    />
    <div class="flex mrTop32">
      <!-- 空心文字 -->
      <HollowWord text="空心文字" />
      <!-- 视频背景文字 -->
      <VideoWord text="离离原上谱" />
      <!-- 边框按钮特效 -->
      <BorderButton back-ground-color="#fff" border-color="#f40" text-color="#03a9f4">
        按钮特效
      </BorderButton>
      <!-- 翻转卡片 -->
      <RollCard :avatar="ROLL_CARD_AVATAR">
        <template v-slot:back>
          <p class="roll_card_slot">插槽</p>
        </template>
      </RollCard>
      <!-- 模拟 Material 输入框 -->
      <MaterialInput :value="materialInputValue" @change="handleChange" />
      <!-- 头像 -->
      <CircularAvatar mask-direction="out_in" />
      <CircularAvatar mask-direction="in_out" />
    </div>
    <!-- 环形布局 -->
    <AnnularLayout class="mrTop32" :img-list="annulars">
      <template v-slot:item2>
        <div class="annular_layout_slot">插槽</div>
      </template>
    </AnnularLayout>
    <!-- 九宫格图片 -->
    <SquaredPaperPicture class="mrTop32" :pictureUrl="ROLL_CARD_AVATAR" />
  </div>
</template>

<style lang="less" scoped>
.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.annular_layout_slot {
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: rotate linear infinite 20s reverse;
}
.roll_card_slot {
  height: 100%;
  display: flex;
  background: orange;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}
.mrTop32 {
  margin-top: 32px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
