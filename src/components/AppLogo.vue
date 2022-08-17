<template>
  <router-link
    to="/"
    class="logo"
    @click="resetFilter"
  >
    <img
      src="../assets/logo.svg"
      alt="Company logo"
      class="logo"
    >
  </router-link>
</template>

<script setup lang="ts">
import useProductsStore from "@/stores/products";

const { resetFilter } = useProductsStore();
</script>

<style scoped lang="scss">
@import "@/styles/utils/mixins.scss";

.logo {
  width: 102px;

  @include onDesktop() {
    width: 198px;
  }
  
  &.router-link-exact-active {
      cursor: default;
    }
}
</style>
