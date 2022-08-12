<template>
  <article class="product">
    <div class="product__img-wrapper">
      <img
        :src="require(`@/assets/${product.img}`)"
        alt="Product image"
        class="product__img"
      />
    </div>
    <h2 class="product__title">
      {{product.title}}
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
    img: string;
    title: string;
    description: string;
    packaging: string;
  }}>();
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/typography.scss";

.product {
  display: flex;
  flex-direction: column;
  gap: 12px;

  // width: $product-card-width;
  text-align: left;

  &__img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    // width: 100%;
  width: $product-card-width;
  margin-bottom: 24px;

    background-color: $color-background-product;
  }

  &__title {
    @extend %h4-text;
    margin: 0;
  }

  &__description {
    @extend %main-text;
    margin: 0;
    // width: 114px;
  }

  &__packaging {
    @extend %main-text;
    margin: 0;
    color: #00284F66;
    // width: 114px;
  }
}
</style>
