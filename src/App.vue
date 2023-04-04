<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
import { banners, annulars, ROLL_CARD_AVATAR, DEFAULT_AVATER_URL } from './mock/mockData.js'
import BannerList from './components/BannerList.vue'
import BorderButton from './components/BorderButton.vue'
import RollCard from './components/RollCard.vue'
import HollowWord from './components/HollowWord.vue'
import VideoWord from './components/VideoWord.vue'
import AnnularLayout from './components/AnnularLayout.vue'
import MaterialInput from './components/MaterialInput.vue'
import SquaredPaperPicture from './components/SquaredPaperPicture.vue'
import CircularAvatar from './components/CircularAvatar.vue'
import ShadowWord from './components/ShadowWord.vue';
import OlympicRings from './components/OlympicRings.vue';
import CreateShadowByImg from './components/CreateShadowByImg.vue';
import GradualBorderCard from './components/GradualBorderCard.vue';
import FrostedFilter from './components/FrostedFilter.vue';
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
      <!-- 光影文字 -->
      <ShadowWord text="光影文字" />
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
    <SquaredPaperPicture class="mrTop45" :pictureUrl="ROLL_CARD_AVATAR" />
    <!-- 奥运五环 -->
    <OlympicRings class="mrTop45" />
    <!-- 图片转阴影 -->
    <CreateShadowByImg />
    <!-- 渐变边框 -->
    <GradualBorderCard class="mrTop24">
      <h3>渐变边框</h3>
      <p>支持自定义内容插槽</p>
    </GradualBorderCard>
    <!-- 磨砂滤镜 -->
    <FrostedFilter class="mrTop24" />
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
@selectors: {24: 24px; 32: 32px; 45: 45px };
each(@selectors, {
  .mrTop@{key} {
    margin-top: @value;
  }
});
.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
