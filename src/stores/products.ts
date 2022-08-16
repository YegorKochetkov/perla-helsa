import { defineStore } from "pinia";
import { ref, computed } from "vue";

enum ProductFilter {
  ALL = "all",
  OMEGA = "омега",
  VITAMINS = "витамин",
  COLLAGEN = "коллаген",
  SQUALENE = "сквален",
  KIDS= "kids",
  SHARK_OIL = "акулий жир"
}

const useProductsStore = defineStore("products", () => {
  const allProducts = ref([
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
  ]);

  const omegaProducts = computed(
    () => allProducts.value
      .filter((product) => product.title.toLowerCase().includes(ProductFilter.OMEGA)),
  );

  const vitaminsProducts = computed(
    () => allProducts.value
      .filter((product) => product.title.toLowerCase().includes(ProductFilter.VITAMINS)),
  );
  // unfinishedTodos(state) {
  //   return state.todos.filter((todo) => !todo.isFinished)
  // },
  // /**
  //  * @returns {{ text: string, id: number, isFinished: boolean }[]}
  //  */
  // filteredTodos(state) {
  //   if (this.filter === 'finished') {
  //     // call other getters with autocompletion ✨
  //     return this.finishedTodos
  //   } else if (this.filter === 'unfinished') {
  //     return this.unfinishedTodos
  //   }
  //   return this.todos
  // },

  return { allProducts, omegaProducts, vitaminsProducts };
});

export default useProductsStore;
