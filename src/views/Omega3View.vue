<template>
  <main>
    <div class="main max-content-width">
      <ProductCard v-for="product in products" :product="product" :key="product.title"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const products = ref([
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
  },
]);
</script>

<style scoped lang="scss">
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/variables.scss";

.main {
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;

  padding: $padding-content-mobile;
}

.max-content-width {
  @extend %max-width-wrapper;
}
</style>
