import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { ProductFilter } from "./products";

const usePromoStore = defineStore("promo", () => {
  const promo = ref({
    "Коллаген": ProductFilter.COLLAGEN,
    "Омега-3": ProductFilter.OMEGA,
    "Витамин Д3": ProductFilter.VITAMINS,
    "Сквален": ProductFilter.SQUALENE,
    "Витамины для детей": ProductFilter.KIDS,
});

  return { promo };
});

export default usePromoStore;
