<template>
  <nav class="options">
    <div class="options__content max-content-width">
      <ul class="options__list">
        <li
          v-for="item in options"
          :key="item.link"
        >
          <router-link
            :to="'/' + item.link"
            class="options__link"
            disabled="router-link-exact-active"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ref([
  { name: "Омега-3", link: "omega-3" },
  { name: "Витамины", link: "vitamins" },
  { name: "Добавки", link: "supplement" },
  { name: "Доставка", link: "delivery" },
  { name: "O нас", link: "about" },
]);
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/typography.scss";

.options {
  padding: 3px $padding-content-mobile 16px;
  background-color: $color-background-menu;

  @include onDesktop() {
    padding: 15px $padding-content-mobile 24px;
  }

  &__list {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 36px;

    & > li:nth-child(4) {
      display: none;
    }

    @include onSmallScreen() {
      flex-wrap: wrap;
    }

    @include onDesktop() {
      gap: 48px;

      & > li:nth-child(4) {
        display: inherit;
      }
    }

    list-style: none;
    margin: 0;
    padding: 0;

    @extend %menu-text;
  }

  &__item {

    &:last-child {
      white-space: nowrap;
    }
  }

  &__link {
    width: min-content;

    text-decoration: none;
    color: $color-primary;

    border-bottom: 1px solid transparent;

    @include hover(border-color, $color-primary);

    &.router-link-exact-active {
      @extend %h3-text;
      cursor: default;
      border-color: transparent;
    }
  }
}

.max-content-width {
  @extend %max-width-wrapper;
}
</style>
