<template>
  <header class="header">
    <div class="header__content max-content-width">
      <div class="header__menu-section">
        <BurgerIcon
          role="button"
          tabindex="0"
          @click="toggleMenu"
        />

        <SearchIcon
          role="button"
          tabindex="0"
        />
      </div>

      <AppLogo />

      <div class="header__menu-section">
        <UserIcon
          role="button"
          tabindex="0"
        />

        <BagIcon
          role="link"
          tabindex="0"
          :is-bag-empty="isBagEmpty"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import { ref } from "vue";
import useMenuStore from "@/stores/menu";
import BurgerIcon from "./UI/BurgerIcon.vue";
import SearchIcon from "./UI/SearchIcon.vue";
import UserIcon from "./UI/UserIcon.vue";
import BagIcon from "./UI/BagIcon.vue";

const { toggleMenu } = useMenuStore();
const isBagEmpty = ref(false);
</script>

<style scoped lang="scss">
@import "@/styles/utils/variables.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";
@import "@/styles/utils/colors.scss";

.header {
  padding: $padding-content-mobile;
  background-color: $color-background-menu;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $header-gap-mobile;
  }

  &__menu-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $header-gap-mobile;

    @include onDesktop() {
      gap: $header-gap-desk;
    }
  }
}

.icon {
  @extend %header-icons;

  &--menu {

    & > path {
      stroke: $color-primary;
    }

    &:hover {
      & > path {
        stroke: $color-accent;
      }
    }
  }

  &--search {
    & > path,
    & > circle {
      stroke: $color-primary;
    }

    & > path {
      fill: $color-primary;
    }

    &:hover {
      & > path,
      & > circle {
        stroke: $color-accent;
      }

      & > path {
        fill: $color-accent;
      }
    }
  }

  &--user {
    & > path,
    & > circle {
      stroke: $color-primary;
    }

    &:hover {
      & > path,
      & > circle {
        stroke: $color-accent;
      }
    }
  }

  &--bag-empty {
    & > path {
      fill: $color-primary;
    }

    & > circle {
      display: none;
    }

    &:hover {
      & > path {
        fill: $color-accent;
      }
    }
  }

  &--bag-full {
    & > path {
      fill: $color-primary;
    }

    & > circle {
      fill: $color-accent;
    }

    &:hover {
      & > path {
        fill: $color-accent;
      }

      & > circle {
        fill: $color-primary;
      }
    }
  }
}

.max-content-width {
  @extend %max-width-wrapper;
}
</style>
