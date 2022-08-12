<template>
  <AppHeader />
  <HeaderOptions />
  <router-view/>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import HeaderOptions from "@/components/HeaderOptions.vue";

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
}

.logo {
  &.router-link-exact-active {
      cursor: default;
    }
}
</style>
