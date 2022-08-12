<template>
  <article class="product">
    <div class="product__img-wrapper">
      <img
        :srcset="require(`@/assets/${product.img[1]}`) + ' 218w'"
        sizes="(min-width: 1440px) 218px, 114px"
        :src="require(`@/assets/${product.img[0]}`)"
        alt="Product image"
        class="product__img"
      />
    </div>
    <h2 class="product__title">
      <a href="#" class="product__link">
        {{product.title}}
      </a>
    </h2>
    <p class="product__description">
      {{product.description}}
    </p>
    <p class="product__packaging">
      {{product.packaging}}
    </p>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  product: {
    img: string[];
    title: string;
    description: string;
    packaging: string;
  }}>();
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/mixins.scss";

.product {
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: $product-card-width-mobile;
  text-align: left;

  @include onDesktop() {
    width: $product-card-width-desk;
  }

  @include hover(transform, scale(1.05));

  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-bottom: 24px;

    background-color: $color-background-product;
  }

  &__link {
    text-decoration: none;
    color: $color-primary;
    border-bottom: 1px solid transparent;

    @include hover(border-color, $color-primary);

    @extend %h4-text;
  }

  &__title {
    @extend %h4-text;
    margin: 0;
  }

  &__description {
    @extend %main-text;
    margin: 0;
  }

  &__packaging {
    @extend %main-text;
    margin: 0;
    color: #00284F66;
  }
}
</style>
