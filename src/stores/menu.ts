import { defineStore } from "pinia";
import { ref, watch } from "vue";

const useMenuStore = defineStore("menu", () => {
  let showMenu = ref(false);

  function toggleMenu() {
    showMenu.value = !showMenu.value;
  }

  watch(showMenu, () => {
    if (showMenu.value) {
      document.documentElement.style.overflow = "hidden";
      return
    }

    document.documentElement.style.overflow = "auto";
  });

  return {
    showMenu,
    toggleMenu,
  };
});

export default useMenuStore;
