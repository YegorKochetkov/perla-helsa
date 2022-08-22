<template>
  <nav class="nav">
    <a
      role="button"
      tabindex="0"
      href="#"
      class="nav__title"
      @click="toggleSubMenuAdults"
    >
      Продукты для взрослых
    </a>

    <router-link
      to="/adults"
      class="nav__link"
      @click="toggleMenu"
    >
      Все
    </router-link>
    
    <router-link
      v-for="(product, index) in adultsProducts"
      :key="product.title + index"
      :to="'/' + product.category"
      class="nav__link"
      @click="toggleMenu"
    >
      {{ product.title }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import useProductsStore from "@/stores/products";
import useMenuStore from "@/stores/menu";

const { adultsProducts } = useProductsStore();
const { toggleSubMenuAdults, toggleMenu } = useMenuStore();
</script>


<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.nav {
  display: flex;
  flex-direction: column;
  gap: $side-menu-gap;

  &__title {
    position: relative;

    margin: 0;
    padding-left: 30px;

    width: max-content;

    text-decoration: none;
    color: $color-primary;

    border-bottom: 1px solid transparent;
    @include hover(border-color, $color-primary);

    &:hover {
      cursor: pointer;
    }

    &::before {
      position: absolute;
      bottom: 25%;
      left: 0;

      content: "";
      display: block;
      width: 10px;
      height: 10px;

      border-right: 1px solid $color-primary;
      border-bottom: 1px solid $color-primary;

      transform: rotate(135deg);
    }
  }

  &__link {
    margin: 0;
    width: max-content;

    text-decoration: none;
    color: $color-primary;

    border-bottom: 1px solid transparent;
    @include hover(border-color, $color-primary);

    &:hover {
      cursor: pointer;
    }

    &:not(:nth-of-type(2)) {
      font-weight: 400;
    }
  }
}
</style>
