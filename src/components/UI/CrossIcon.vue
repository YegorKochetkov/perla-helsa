<template>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon--cross"
  >
    <path
      d="M13.0354 1L0.999926 13.0355"
      stroke="#00284F"
      stroke-width="1.7"
      stroke-linecap="round"
    />
    <path
      d="M1.00024 1L13.0357 13.0355"
      stroke="#00284F"
      stroke-width="1.7"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped lang="scss">
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.icon {
  @extend %header-icons;
  width: 14px;

  @include onDesktop() {
    width: 20px;
  }
  &--cross {
    & > path {
      stroke: $color-primary;
    }

    &:hover {
      & > path {
        stroke: $color-accent;
      }
    }
  }
}
</style>
