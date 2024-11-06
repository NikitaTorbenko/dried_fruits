<script setup lang="ts">
import PartOfFooter from "./components/PartOfFooter.vue";
import {
  firstPart,
  secondPart,
  contscts,
  thirdPart,
} from "../model/partsOfFooter";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <PartOfFooter
          class="part-1"
          v-bind:title="firstPart.title"
          v-bind:body="firstPart.body"
        />
        <PartOfFooter
          class="part-2"
          v-bind:title="secondPart.title"
          v-bind:body="secondPart.body"
        />
        <PartOfFooter
          class="part-3"
          v-bind:title="thirdPart.title"
          v-bind:body="firstPart.body"
        />
        <PartOfFooter
          class="part-4"
          v-bind:title="contscts.title"
          v-bind:body="contscts.body"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "app/styles/variables.scss";

.footer-inner {
  display: flex;
  justify-content: center;
  gap: 40px;

  @media (min-width: $mobileL) {
    justify-content: space-evenly;
  }
}

.part {
  &-1 {
    display: none;

    @media (min-width: $mobileL) {
      display: block;
    }
  }

  &-2 {
    display: none;

    @media (min-width: $tabletL) {
      display: block;
    }
  }

  &-3 {
    display: none;

    @media (min-width: $laptop) {
      display: block;
    }
  }
}
</style>
