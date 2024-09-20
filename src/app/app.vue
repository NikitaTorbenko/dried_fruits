<script setup lang="ts">
import "./styles/normolize.scss";
import "./styles/main.scss";
import { layoutApp } from "widgets/layouts/layout-app";
</script>

<template>
  <div class="root">
    <layoutApp>
      <RouterView />
    </layoutApp>
  </div>
</template>

<style scoped lang="scss">
// .root {
// }
</style>
