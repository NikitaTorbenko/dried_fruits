<script setup lang="ts">
import { Header } from "widgets/layouts/Header";
import { Footer } from "widgets/layouts/Footer";
</script>

<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.layout {
  min-height: 100dvh;
}
</style>
