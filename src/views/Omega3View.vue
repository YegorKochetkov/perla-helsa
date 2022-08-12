<template>
  <ProductCard v-for="product in products" :product="product" :key="product.title"/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const products = ref([
  {
    img: "omega-3-tuna.png",
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
  },
  {
    img: "omega-3-tuna.png",
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
  },
  {
    img: "omega-3-tuna.png",
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
  },
]);
</script>
