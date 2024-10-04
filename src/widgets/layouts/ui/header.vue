<script setup lang="ts">
import { ref } from "vue";
import logo from "shared/assets/icons/logo.svg";
import { nav_links } from "../model/nav-links";
import { enumPath } from "shared/config/routes";
import PhoneIcon from "shared/assets/icons/phone.svg";
import BurgerIcon from "shared/assets/icons/Burger.svg";

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
              <img :src="PhoneIcon" alt="" />
            </div>
            <div class="phone-number">+7 (900) 232 32-32</div>
          </div>
          <div class="like">Избранное</div>
          <div class="cart">
            <div class="cart-text">Корзина</div>
            <div class="cart-number">3</div>
          </div>
          <div class="burger">
            <img :src="BurgerIcon" alt="" class="burger-icon" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "app/styles/variables.scss";

.header {
  margin-top: 11px;

  @media (min-width: $mobileL) {
    margin-top: 20px;
  }

  @media (min-width: $tablet) {
    margin-top: 30px;
  }

  @media (min-width: $tabletL) {
    margin-top: 40px;
  }

  @media (min-width: $tabletL) {
    margin-top: 50px;
  }

  @media (min-width: $tabletL) {
    margin-top: 60px;
  }
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  gap: 20px;
  align-items: center;
  width: fit-content;

  @media (min-width: $laptop) {
    gap: 35px;
  }

  @media (min-width: $laptopL) {
    gap: 47px;
  }
}

.nav-links {
  display: none;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.35);
  transition: 0.3s;

  &:hover,
  &-active {
    color: #000;
  }

  @media (min-width: $tablet) {
    display: block;
    font-size: 14px;
  }

  @media (min-width: $laptop) {
    font-size: 16px;
  }

  @media (min-width: $laptopL) {
    display: block;
    font-size: 18px;
  }
}

.logo {
  width: 76px;
  height: 26px;
  cursor: pointer;

  @media (min-width: $laptop) {
    width: 108.67px;
    height: 36px;
  }

  @media (min-width: $laptopL) {
    width: 155px;
    height: 53px;
  }
}

.right-side {
  display: flex;
  gap: 16px;
  align-items: center;

  @media (min-width: $laptop) {
    gap: 30px;
  }

  @media (min-width: $laptopL) {
    gap: 41px;
  }
}

.phone {
  display: flex;
  gap: 3px;
  align-items: center;

  @media ($laptop) {
    gap: 10px;
  }
}

.phone-icon {
  width: 10px;
  height: 10px;

  @media ($laptop) {
    width: 16px;
    height: 16px;
  }
}

.like {
  display: none;

  @media (min-wight: $mobile) {
    display: block;
  }
}

.like,
.phone-number {
  font-weight: 700;
  font-size: 12px;
  color: #606060;

  @media (min-width: $laptop) {
    font-size: 16px;
  }

  @media (min-width: $laptopL) {
    font-size: 18px;
  }
}

.cart {
  background: rgba(254, 179, 2, 0.45);
  border-radius: 2px;
  padding: 6px 6px 6px 10px;
  display: none;
  align-items: center;
  gap: 11px;

  @media (min-width: $mobile) {
    display: flex;
  }

  @media (min-width: $tabletL) {
    border-radius: 4px;
    gap: 8px;
  }

  @media (min-width: $laptop) {
    border-radius: 8px;
    gap: 14px;
  }

  @media (min-width: $laptopL) {
    border-radius: 13px;
    gap: 16px;
    padding: 7px 7px 7px 17px;
  }
}

.cart-text {
  font-weight: 700;
  font-size: 12px;
  color: #fff;

  @media (min-width: $tabletL) {
    font-size: 14px;
  }

  @media (min-width: $laptop) {
    font-size: 16px;
  }

  @media (min-width: $laptopL) {
    font-size: 18px;
  }
}

.cart-number {
  padding: 2px 6px;
  background-color: #fff;
  font-weight: 700;
  font-size: 12px;
  color: #444;
  border-radius: 10px;

  @media (min-width: $tabletL) {
    padding: 1px 6px;
    font-size: 14px;
  }

  @media (min-width: $laptop) {
    padding: 3px 10px;
    font-size: 16px;
  }

  @media (min-width: $laptopL) {
    padding: 4px 12px;
    font-size: 18px;
  }
}

.burger {
  @media (min-width: $tablet) {
    display: none;
  }
}
</style>
