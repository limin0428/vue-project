<template>
 <div class="container">
    <input type="file" accept="image/*" @change="handleChange">
    <button @click="generate">下载</button>
 </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({
   maxSize: {
      type: Number,
      default: 0.5
   }
})
const File = ref(null);
const handleChange = (e) => {
   File.value = e.target.files[0];
   console.log(e)
}
const loadImg = function (file) {
   if (!file) {
      return null
   }
   const objUrl = URL.createObjectURL(file);
   const img = new Image();
   return new Promise((resolve, reject) => {
      img.onload = () => {
         resolve(img)
      };
      img.onerror = () => {
         reject(null)
      };
      img.src = objUrl;
   })
};
const createHTML = function (width, height, bmp) {
   const shadowCSSFragments = [];
   const shadowCSSHover = [];
   for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
         const i = r * width + c;
         const R = bmp[i * 4], G = bmp[i * 4 + 1], B = bmp[i * 4 + 2], A = bmp[i * 4 + 3] / 255;
         shadowCSSFragments.push(`${c + 1}px ${r}px rgba(${R},${G},${B},${A})`);
         shadowCSSHover.push(`${c + 1}px ${r}px rgba(${255 - R},${255 - G},${255 - B},${A})`);
      }
   };
   return `
   <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
         <style>
            .shadow_img {
                  width: ${width};
                  height: ${height};
            }
            .shadow_img .inner {
                  width: 1px;
                  height: 1px;
                  box-shadow: ${shadowCSSFragments.join(',')};
                  transition: 1.5s;
            }
            .shadow_img .inner:hover {
                  box-shadow: ${shadowCSSHover.join(',')};
            }
         </style>
      </head>
      <body>
         <div class="shadow_img">
            <div class="inner"></div>
         </div>
      </body>
      </html>
   `
};
const download = function (html, fileName) {
   const blob = new Blob([html], { type: 'text/html' });
   const url = window.URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = url;
   a.style.display = 'none';
   a.download = `${fileName}.html`;
   a.click();
};
const generate = async function () {
   const size = File.value.size;
   if (size > props.maxSize * 1024) { return }
   const img = await loadImg(File.value);
   if (!img) { return };
   const cvs = document.createElement('canvas');
   cvs.width = img.width;
   cvs.height = img.height;
   const ctx = cvs.getContext('2d');
   ctx.drawImage(img, 0, 0);
   // 获取图片像素集合
   const bmp = ctx.getImageData(0, 0, img.width, img.height).data;
   console.log('bmp', bmp)
   const html = createHTML(img.width, img.height, bmp);

   // 下载
   const fileName = File.value.name.substring(0, File.value.name.lastIndexOf("."))
   download(html, fileName);

};
</script>

<style></style>
