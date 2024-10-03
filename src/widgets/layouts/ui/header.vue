<script setup lang="ts">
import { ref } from "vue";
import logo from "shared/assets/icons/logo.svg";
import { nav_links } from "../model/nav-links";
import { enumPath } from "shared/config/routes";
import PhoneSvg from "shared/assets/icons/phone.svg";

const activeLink = ref(0);

const setActiveLink = (index: number) => (activeLink.value = index);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <nav class="nav">
          <RouterLink :to="enumPath.HOME">
            <img class="logo" :src="logo" alt="logo" />
          </RouterLink>
          <RouterLink
            class="nav-links"
            v-for="(item, index) in nav_links"
            :class="index === activeLink ? 'nav-links-active' : ''"
            @click="() => setActiveLink(index)"
            :to="item.link"
            >{{ item.title }}</RouterLink
          >
        </nav>
        <div class="right-side">
          <div class="phone">
            <div class="phone-icon">
              <img :src="PhoneSvg" alt="" />
            </div>
            <div class="phone-number text-4xl">+7 (900) 232 32-32</div>
          </div>
          <div class="like">Избранное</div>
          <div class="cart">
            <div class="cart-text">Корзина</div>
            <div class="cart-number">3</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  margin-top: 60px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  gap: 47px;
  align-items: center;
  width: fit-content;
}

.nav-links {
  font-weight: 400;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.35);
  transition: 0.3s;

  &:hover,
  &-active {
    color: #000;
  }
}

.logo {
  width: 155px;
  height: 53px;
  cursor: pointer;
}

.right-side {
  display: flex;
  gap: 41px;
  align-items: center;
}

.phone {
  display: flex;
  gap: 10px;
  align-items: center;
}

.phone-icon {
  width: 16px;
  height: 16px;
}

.like,
.phone-number {
  font-weight: 700;
  font-size: 18px;
  color: #606060;
}

.cart {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(254, 179, 2, 0.45);
  border-radius: 13px;
  padding: 15px 17px;
}

.cart-text {
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}

.cart-number {
  padding: 9px 14px;
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
  color: #444;
  border-radius: 10px;
}
</style>
