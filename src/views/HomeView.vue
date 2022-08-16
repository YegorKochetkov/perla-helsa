<template>
  <AppMain :products="allProducts" />
</template>

<script setup lang="ts">
import AppMain from "@/components/AppMain.vue";
import useProductsStore from "@/stores/products";

const { allProducts } = useProductsStore();
</script>
