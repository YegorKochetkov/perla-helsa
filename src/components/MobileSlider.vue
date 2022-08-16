<template>
  <Swiper
    :slides-per-view="1"
    :css-mode="true"
  >
    <SwiperSlide
      v-for="product in products"
      :key="product.title"
    >
      <ProductCard :product="product" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import ProductCard from "@/components/ProductCard.vue";
import "swiper/css";
import { Product } from "@/types/Product";

defineProps<{
  products?: Product[]
}>();
</script>

<style scoped lang="scss">
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/variables.scss";

.swiper-slide {
  width: $product-card-width-mobile !important;
  padding-top: $padding-content-mobile;
  padding-bottom: $padding-content-mobile;
  &:not(:last-child) {
    margin-right: $product-card-gap-mobile;
  }

  &:nth-child(1) {
    padding-left: $padding-content-mobile;
    background-color: $color-background-primary;
  }

  &:last-child {
    padding-right: $padding-content-mobile;
    background-color: $color-background-primary;
  }
}
</style>
