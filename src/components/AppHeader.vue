<template>
  <header class="header">
    <div class="header__menu-section">
      <MenuIcon>
        <div class="icon icon--menu" />
      </MenuIcon>
      <MenuIcon>
        <div class="icon icon--search" />
      </MenuIcon>
    </div>

    <AppLogo />

    <div class="header__menu-section">
      <MenuIcon>
        <div class="icon icon--user" />
      </MenuIcon>
      <MenuIcon>
        <div v-if="isBagEmpty" class="icon icon--bag-empty" />
        <div v-else class="icon icon--bag-full" />
      </MenuIcon>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import MenuIcon from "@/components/UI/MenuIcon.vue";
import { ref } from "vue";

const isBagEmpty = ref(true);
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/colors.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  padding: $padding-content-mobile;
  background-color: $color-background-menu;

  &__menu-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @include onDesktop() {
      gap: 38px;
    }
  }
}

.icon {
  @extend %background-images;

  display: block;
  width: 100%;

  cursor: pointer;

  &--menu {
    background-image: url(@/assets/burger-orange.svg);
    background-image: url(@/assets/burger.svg);
    height: 12px;

    @include onDesktop() {
      height: 18px;
    }

    &:hover {
      background-image: url(@/assets/burger-orange.svg);
    }
  }

  &--search {
    background-image: url(@/assets/search-orange.svg);
    background-image: url(@/assets/search.svg);
    height: 14px;

    @include onDesktop() {
      height: 22px;
    }

    &:hover {
      background-image: url(@/assets/search-orange.svg);
    }
  }

  &--user {
    background-image: url(@/assets/user-orange.svg);
    background-image: url(@/assets/user.svg);
    height: 15px;

    @include onDesktop() {
      height: 24px;
    }

    &:hover {
      background-image: url(@/assets/user-orange.svg);
    }
  }

  &--bag-empty {
    background-image: url(@/assets/bag-empty-orange.svg);
    background-image:url(@/assets/bag-empty.svg);
    height: 16px;

    @include onDesktop() {
      height: 25px;
    }

    &:hover {
      background-image: url(@/assets/bag-empty-orange.svg);
    }
  }

  &--bag-full {
    background-image: url(@/assets/bag-full-orange.svg);
    background-image: url(@/assets/bag-full.svg);
    height: 16px;

    @include onDesktop() {
      height: 25px;
    }

    &:hover {
      background-image: url(@/assets/bag-full-orange.svg);
    }
  }
}
</style>
