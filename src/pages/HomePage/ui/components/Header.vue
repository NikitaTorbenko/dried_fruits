<script setup lang="ts">
import Products from "../assets/products.png";
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="header">
    <div class="left">
      <h1 class="title">
        <span class="text-[#bc5d1d]">Dri</span>ed<br />
        <span class="font-bold">Fruits</span>
      </h1>
      <p class="text">
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum является стандартной
      </p>
    </div>
    <div class="right">
      <div class="img">
        <img :src="Products" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 80px;
  line-height: 1;
}

.text {
  max-width: 700px;
  font-size: 23px;
  line-height: 211%;
  letter-spacing: 0.04em;
  color: #605f5f;
}

.right {
  display: flex;
  justify-content: flex-end;
}

.img {
  width: 42%;
}
</style>
