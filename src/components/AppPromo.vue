<template>
  <aside class="promo">
    <router-link
      v-for="category in categories"
      :key="category[0]"
      to="/"
      class="promo__category"
      @click="setFilter(category[1])"
    >
      {{ category[0] }}
    </router-link>
    <button
      type="button"
      class="promo__category"
      @click="resetFilter"
    >
      Очистить поиск
    </button>
  </aside>
</template>

<script setup lang="ts">
import usePromoStore from "@/stores/promo";
import useProductsStore from "@/stores/products";

const { promo } = usePromoStore();

const categories = Object.entries(promo);
const { resetFilter, setFilter } = useProductsStore();
</script>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";


.promo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 28px;

  padding: 3px;
  text-align: left;

  &__category {
    @extend %h4-text;

    display: inline-block;
    width: fit-content;
    box-sizing: border-box;

    border: none;
    background: none;
    border-bottom: 1px solid transparent;

    margin: 0;
    padding: 2px;

    text-decoration: none;
    color: $color-primary;

    @include hover(border-color, $color-primary);

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>
