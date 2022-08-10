<template>
  <div>
    <img
      src="../assets/logo.svg"
      alt="Company logo"
      class="logo"
    />
  </div>
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
