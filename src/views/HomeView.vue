<template>
  <AppMain :products="filteredProducts" />
</template>

<script setup lang="ts">
import AppMain from "@/components/AppMain.vue";
import useProductsStore from "@/stores/products";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const store = useProductsStore();
const { filteredProducts } = storeToRefs(store);
</script>
