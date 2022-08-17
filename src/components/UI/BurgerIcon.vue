<template>
  <svg
    width="30"
    height="21"
    viewBox="0 0 30 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon--menu"
  >
    <path
      d="M28 1.18238L2 1.18237"
      stroke="#FF8D06"
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28 10.1824L2 10.1824"
      stroke="#FF8D06"
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28 19.1824L2 19.1824"
      stroke="#FF8D06"
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped lang="scss">
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/colors.scss";

.icon {
  @extend %header-icons;

  &--menu {

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
