<template>
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon--search"
  >
    <circle
      cx="10.0344"
      cy="9.2168"
      r="8.0668"
      stroke="#FF8D06"
      stroke-width="2.3"
    />
    <path
      d="M22.6868 23.4955C23.1359 23.9446 23.864 23.9446 24.3131
      23.4955C24.7622 23.0464 24.7622 22.3182 24.3131 21.8691L22.6868
      23.4955ZM14.8074 15.6162L22.6868 23.4955L24.3131 21.8691L16.4338
      13.9898L14.8074 15.6162Z"
      fill="#FF8D06"
    />
  </svg>
</template>

<style scoped lang="scss">
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/colors.scss";

.icon {
  @extend %header-icons;

  &--search {
    & > path,
    & > circle {
      stroke: $color-primary;
    }

    & > path {
      fill: $color-primary;
    }

    &:hover {
      & > path,
      & > circle {
        stroke: $color-accent;
      }

      & > path {
        fill: $color-accent;
      }
    }
  }
}
</style>
