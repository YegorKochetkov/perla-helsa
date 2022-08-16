<template>
  <main class="main">
    <MobileSlider
      v-if="isMobile && products"
      :products="products"
    />

    <div
      v-else-if="products"
      class="main__content
      max-content-width"
    >
      <h2 class="main__title">
        Популярное в этой категории
      </h2>
      <p class="main__products">
        <ProductCard
          v-for="product in products"
          :key="product.title"
          :product="product"
        />
      </p>
    </div>

    <div
      v-else
      class="main__content max-content-width"
    >
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Product } from "@/types/Product";
import ProductCard from "@/components/ProductCard.vue";
import MobileSlider from "@/components/MobileSlider.vue";

const isMobile = navigator.maxTouchPoints >= 1;

defineProps<{
  products?: Product[],
}>();
</script>

<style scoped lang="scss">
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/typography.scss";

.main {
  background-color: $color-background-primary;

  &__products {
    display: flex;
    flex-wrap: wrap;
    gap: $product-card-gap-mobile;
    padding: 24px $padding-content-mobile 50px;

    margin: 0;

    @include onDesktop() {
      gap: $product-card-gap-desk;
    }
  }

  &__title {
    @extend %main-title;
    text-align: left;
    color: $color-secondary;
    margin: 62px $padding-content-mobile 0;
  }
}
.max-content-width {
  @extend %max-width-wrapper;
}
</style>
