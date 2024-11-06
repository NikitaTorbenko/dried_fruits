<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

interface Props {
  title: string;
  body: {
    text: string;
    icon?: string;
    link?: string;
  }[];
}

const props = defineProps<Props>();

const routerHandler = (link: string | undefined) => {
  link ? router.push(link) : () => {};
};
</script>

<template>
  <div class="block">
    <h2 class="title">{{ props.title }}</h2>
    <div class="line" />
    <div class="content">
      <div
        class="content-item"
        v-for="item in props.body"
        @click="() => routerHandler(item.link)"
      >
        <img
          class="content-item-img"
          v-if="item.icon"
          :src="item.icon"
          alt=""
        />
        <span class="content-item-text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 27px;
  color: #000;
}

.line {
  width: 60px;
  height: 1px;
  background-color: #000;
  margin-top: 22px;
  margin-bottom: 18px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.content-item {
  display: flex;
  align-items: center;
  gap: 10px;

  &-img {
    width: auto;
  }

  &-text {
    font-weight: 500;
    font-size: 20px;
    color: #252525;
    max-width: 228px;
  }
}
</style>
