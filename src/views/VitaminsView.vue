<template>
  <AppMain :products="vitaminsProducts" />
</template>

<script setup lang="ts">
import useProductsStore from "@/stores/products";
import AppMain from "@/components/AppMain.vue";

const { vitaminsProducts } = useProductsStore();
</script>
