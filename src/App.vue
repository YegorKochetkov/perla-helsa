<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
/* Regular */
@font-face {
    font-family: "Gilroy";
    src: local("Gilroy"),
         url("~@/fonts/gilroy-regular.ttf") format("truetype"),
         url("~@/fonts/gilroy-regular.eot?#iefix") format("embedded-opentype"),
         url("~@/fonts/gilroy-regular.woff") format("woff");
}

/* SemiBold */
@font-face {
    font-family: "GilroyMedium";
    src: local("Gilroy"),
         url("~@/fonts/gilroy-medium.ttf") format("truetype"),
         url("~@/fonts/gilroy-medium.eot?#iefix") format("embedded-opentype"),
         url("~@/fonts/gilroy-medium.woff") format("woff");
}

/* Bold */
@font-face {
    font-family: "GilroyBold";
    src: local("Gilroy"),
         url("~@/fonts/gilroy-bold.ttf") format("truetype"),
         url("~@/fonts/gilroy-bold.eot?#iefix") format("embedded-opentype"),
         url("~@/fonts/gilroy-bold.woff") format("woff");
}

#app {
  font-family: Gilroy, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #00284F;
}

nav {
  padding: 30px;

  a {
    // font-weight: bold;
    font-family: GilroyMedium;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
