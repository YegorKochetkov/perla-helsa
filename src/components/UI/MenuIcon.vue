<template
  role="button"
  class="nav-icon"
>
  <slot />
</template>

<style scoped lang="scss">
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/mixins.scss";

.nav-icon {
  margin: 0;
  padding: 0;

  border: none;
  background: none;

  // width: $icon-width-mobile;

  // @include onDesktop() {
  //   width: $icon-width-desk;
  // }
}
</style>
