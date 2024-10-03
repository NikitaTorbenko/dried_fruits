<script setup lang="ts">
import { Header } from "widgets/layouts/ui";
import { Footer } from "widgets/layouts/ui";
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
