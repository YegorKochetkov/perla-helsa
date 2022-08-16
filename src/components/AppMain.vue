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
      <ProductCard
        v-for="product in products"
        :key="product.title"
        :product="product"
      />
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

.main {
  background-color: $color-background-primary;

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: $product-card-gap-mobile;
    padding: $padding-content-mobile;

    @include onDesktop() {
      gap: $product-card-gap-desk;
    }
  }
}
.max-content-width {
  @extend %max-width-wrapper;
}
</style>
