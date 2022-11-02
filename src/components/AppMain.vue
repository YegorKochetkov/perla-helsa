<template>
  <main class="main">
    <MobileSlider
      v-if="isMobile && products"
      :products="products"
    />

    <div
      v-else-if="products"
      class="main__content max-content-width"
    >
      <section class="main__promo">
        <h2 class="main__title">
          Most popular searches
        </h2>
        <AppPromo />
      </section>

      <section>
        <h2 class="main__title">
          Популярное в этой категории
        </h2>
        <p class="main__products">
          <ProductCard
            v-for="(product, index) in products"
            :key="product.title + index"
            :product="product"
          />
        </p>
      </section>
    </div>

    <div
      v-else
      class="max-content-width"
    >
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Product } from "@/types/Product";
import ProductCard from "@/components/ProductCard.vue";
import AppPromo from "@/components/AppPromo.vue";
import MobileSlider from "@/components/MobileSlider.vue";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform);

defineProps<{
  products?: Product[];
}>();
</script>

<style scoped lang="scss">
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/typography.scss";

.main {
  min-width: 640px;
  background-color: $color-background-primary;

  &__content {
    display: grid;
    grid-template-columns: minmax(200px, 300px) minmax(400px, auto);

    padding: $padding-content-mobile;
  }

  &__promo {
    width: 100%;
  }

  &__products {
    display: flex;
    flex-wrap: wrap;
    gap: $product-card-gap-mobile;

    margin: 0;

    @include onDesktop() {
      gap: $product-card-gap-desk;
    }
  }

  &__title {
    @extend %main-title;
    text-align: left;
    color: $color-secondary;
    margin: 25px 0 25px;
  }
}
.max-content-width {
  @extend %max-width-wrapper;
}
</style>
