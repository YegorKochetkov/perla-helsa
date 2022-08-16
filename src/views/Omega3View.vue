<template>
  <AppMain :products="omegaProducts" />
</template>

<script setup lang="ts">
import AppMain from "@/components/AppMain.vue";
import useProductsStore from "@/stores/products";

const { omegaProducts } = useProductsStore();
</script>
