<template>
  <main>
    <div class="main max-content-width">
      <h1>Vitamins page</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/variables.scss";

.main {
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;

  padding: $padding-content-mobile;
}

.max-content-width {
  @extend %max-width-wrapper;
}
</style>
