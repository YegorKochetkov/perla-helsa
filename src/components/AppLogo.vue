<template>
  <router-link
    to="/"
    class="logo"
  >
    <img
      src="../assets/logo.svg"
      alt="Company logo"
      class="logo"
    >
  </router-link>
</template>

<style scoped lang="scss">
@import "@/styles/utils/mixins.scss";

.logo {
  width: 102px;

  @include onDesktop() {
    width: 198px;
  }
}
</style>
