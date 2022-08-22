import { defineStore } from "pinia";
import { ref, watch } from "vue";

const useMenuStore = defineStore("menu", () => {
  let showMenu = ref(false);
  let showSubMenuAdults = ref(false);
  let showSubMenuKids = ref(false);

  function toggleMenu() {
    showMenu.value = !showMenu.value;

    if (!showMenu.value) {
      showSubMenuAdults.value = false;
      showSubMenuKids.value = false;
    }
  }

  function toggleSubMenuAdults() {
    showSubMenuAdults.value = !showSubMenuAdults.value;
  }

  function toggleSubMenuKids() {
    showSubMenuKids.value = !showSubMenuKids.value;
  }

  watch(showMenu, () => {
    if (showMenu.value) {
      document.documentElement.style.overflow = "hidden";
      const x = document.body.getElementsByTagName("aside");
      if (x[0]) {
        x[0].style.overflow = "auto"
      }

      return;
    }

    document.documentElement.style.overflow = "auto";
  });

  return {
    showMenu,
    showSubMenuAdults,
    showSubMenuKids,
    toggleMenu,
    toggleSubMenuAdults,
    toggleSubMenuKids,
  };
});

export default useMenuStore;
