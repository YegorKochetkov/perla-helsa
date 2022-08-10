<template>
  <AppHeader />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";

</script>

<style lang="scss">
@import "@/styles/utils/colors.scss";

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
  color: #00284F;

  background-color: $color-background-primary;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
