<script setup lang="ts">
import "./styles/tailwind.css";
import "./styles/index.scss";
import { layoutApp } from "widgets/layout-app";
</script>

<template>
  <div class="root">
    <layoutApp>
      <RouterView />
    </layoutApp>
  </div>
</template>
