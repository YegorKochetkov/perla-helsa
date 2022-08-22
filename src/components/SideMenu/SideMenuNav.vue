<template>
  <nav class="nav">
    <p class="nav__title">
      Все продукты
    </p>
    <button
      type="button"
      class="nav__link"
      @click="toggleSubMenuAdults"
    >
      Продукты для взрослых
    </button>
    <button
      type="button"
      class="nav__link"
      @click="toggleSubMenuKids"
    >
      Продукты для детей
    </button>
  </nav>
</template>
<script setup lang="ts">
import useMenuStore from "@/stores/menu";

const { toggleSubMenuAdults, toggleSubMenuKids } = useMenuStore();
</script>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.nav {
  &__title {
    margin: 0;
    margin-bottom: 34px;
    width: max-content;
  }

  &__link {
    position: relative;

    width: max-content;
    margin: 0;
    padding: 2px;
    padding-right: 30px;

    @extend %menu-text;
    font-weight: 400;

    background: none;
    border: none;
    border-bottom: 1px solid transparent;

    @include hover(border-color, $color-primary);

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.95);
    }

    &:not(:last-child) {
      margin-bottom: $side-menu-gap;
    }


    &::after {
      position: absolute;
      bottom: 4px;
      right: 0;

      content: "";
      display: block;
      width: 10px;
      height: 10px;

      border-right: 1px solid $color-primary;
      border-bottom: 1px solid $color-primary;

      transform: rotate(-45deg);
    }
  }
}
</style>
