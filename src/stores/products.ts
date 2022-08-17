import { Product } from "@/types/Product";
import { defineStore } from "pinia";
import { ref, computed, watch, reactive } from "vue";

export enum ProductFilter {
  ALL = "all",
  OMEGA = "омега",
  VITAMINS = "витамин",
  COLLAGEN = "коллаген",
  SQUALENE = "сквален",
  KIDS= "kids",
  SHARK_OIL = "акулий жир"
}

const mockData = [
  {
    img: ["omega-3-cod.png", "omega-3-cod.png"],
    title: "Омега-3 Треска",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
    category: "omega-3",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Витамин D3 2000 МЕ",
    description: "Пептиды 1-типа из Франции",
    packaging: "60 капсул",
    category: "vitamins",
  },
  {
    img: ["omega-3-cod.png", "omega-3-cod.png"],
    title: "Коллаген",
    description: "Пептиды 1-типа из Франции",
    packaging: "30 порций в стиках",
    category: "supplement",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
    category: "omega-3",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
    category: "omega-3",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
    category: "omega-3",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "Сквален",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
    category: "squalene",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "KIDS Омега-3 Тунец",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
    category: "omega-3",
  },
  {
    img: ["omega-3-tuna-mobile.png", "omega-3-tuna.png"],
    title: "KIDS Омега-3 Треска",
    description: "Пептиды 1-типа из Франции",
    packaging: "120 капсул",
    category: "omega-3",
  },
]

const useProductsStore = defineStore("products", () => {
  const filter = ref("all");

  const omegaProducts = computed(
    () => mockData
      .filter((product) => product.title.toLowerCase().includes(ProductFilter.OMEGA)),
  );

  const vitaminsProducts = computed(
    () => mockData
      .filter((product) => product.title.toLowerCase().includes(ProductFilter.VITAMINS)),
  );

  const filteredProducts = computed(
    () => {
      switch(filter.value) {
        case ProductFilter.OMEGA:
          return mockData.filter(
            (product) => product.title.toLowerCase().includes(ProductFilter.OMEGA));

        case ProductFilter.VITAMINS:
          return mockData.filter(
            (product) => product.title.toLowerCase().includes(ProductFilter.VITAMINS));

        case ProductFilter.COLLAGEN:
          return mockData.filter(
            (product) => product.title.toLowerCase().includes(ProductFilter.COLLAGEN));

        case ProductFilter.SQUALENE:
          return mockData.filter(
            (product) => product.title.toLowerCase().includes(ProductFilter.SQUALENE));

        case ProductFilter.KIDS:
          return mockData.filter(
            (product) => product.title.toLowerCase().includes(ProductFilter.KIDS));

        case ProductFilter.SHARK_OIL:
          return mockData.filter(
            (product) => product.title.toLowerCase().includes(ProductFilter.SHARK_OIL));

        default:
          return [...mockData]
      }
    }
  );

  function setFilter(category: string) {
    filter.value = category;
  }

  function resetFilter() {
    filter.value = ProductFilter.ALL;
  }

  return {
    setFilter,
    resetFilter: resetFilter,
    filteredProducts,
    vitaminsProducts,
    omegaProducts,
  };
});

export default useProductsStore;
