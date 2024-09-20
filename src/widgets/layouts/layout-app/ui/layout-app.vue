<script setup lang="ts">
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
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
