<script setup lang="ts">
import PartOfFooter from "./components/PartOfFooter.vue";
import { firstPart, secondPart, contscts } from "../model/partsOfFooter";
// interface Props {

// }
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <PartOfFooter
          v-bind:title="firstPart.title"
          v-bind:body="firstPart.body"
        />
        <PartOfFooter
          v-bind:title="secondPart.title"
          v-bind:body="secondPart.body"
        />
        <PartOfFooter
          v-bind:title="firstPart.title"
          v-bind:body="firstPart.body"
        />
        <PartOfFooter
          v-bind:title="contscts.title"
          v-bind:body="contscts.body"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-inner {
  display: flex;
  justify-content: space-between;
}
</style>
