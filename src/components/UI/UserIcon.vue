<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon--user"
  >
    <path
      d="M22 24C22 19.0294 17.5228 15 12 15C6.47715 15 2 19.0294 2 24"
      stroke="#FF8D06"
      stroke-width="2.3"
    />
    <circle
      cx="12"
      cy="6"
      r="4.85"
      stroke="#FF8D06"
      stroke-width="2.3"
    />
  </svg>
</template>

<style scoped lang="scss">
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/colors.scss";

.icon {
  @extend %header-icons;

  &--user {
    & > path,
    & > circle {
      stroke: $color-primary;
    }

    &:hover {
      & > path,
      & > circle {
        stroke: $color-accent;
      }
    }
  }
}
</style>
