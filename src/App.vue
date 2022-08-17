<template>
  <AppHeader />
  <HeaderOptions />
  <Teleport to="body">
    <SideMenu
      :show="showMenu"
      @close="toggleMenu"
    />
  </Teleport>
  <router-view />
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import HeaderOptions from "@/components/HeaderOptions.vue";
import SideMenu from "@/components/SideMenu.vue";
import useMenuStore from "@/stores/menu";
import { storeToRefs } from "pinia";

const store = useMenuStore();
const { toggleMenu } = useMenuStore();
const { showMenu } = storeToRefs(store);
</script>

<style lang="scss">
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/variables.scss";

body {
  margin: 0;
  padding: 0;

  background-color: $color-background-secondary;
}

#app {
  font-family: Gilroy, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-primary;

  background-color: $color-background-primary;
  overflow: hidden;
}
</style>
