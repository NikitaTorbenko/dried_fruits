<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import Logo from "../assets/logo.svg";

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="block">
    <h2 class="title">
      {{ props.title }}
    </h2>
    <slot />
    <InlineSvg
      :src="Logo"
      class="w-full max-w-[1126px] mx-auto sm-mt-[50px] sm-mb-[60px] mt-[93px] mb-[77px]"
    />
  </div>
</template>

<style scoped lang="scss">
@import "app/styles/variables.scss";

.title {
  font-weight: 700;
  font-size: 72px;
  letter-spacing: 0.01em;
  text-align: center;
  color: #343030;
  margin-top: 40px;
  margin-bottom: 30px;

  @media (min-width: $tablet) {
    margin-top: 90px;
    margin-bottom: 35px;
    font-size: 36px;
    letter-spacing: 0.03em;
  }
}
</style>
