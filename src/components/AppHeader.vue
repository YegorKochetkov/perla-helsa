<template>
  <header class="header">
    <div class="header__content max-content-width">
      <div class="header__menu-section">
        <svg
          role="button"
          width="30"
          height="21"
          viewBox="0 0 30 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon--menu"
        >
          <path
            d="M28 1.18238L2 1.18237"
            stroke="#FF8D06"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 10.1824L2 10.1824"
            stroke="#FF8D06"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 19.1824L2 19.1824"
            stroke="#FF8D06"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          role="button"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon--search"
        >
          <circle
            cx="10.0344"
            cy="9.2168"
            r="8.0668"
            stroke="#FF8D06"
            stroke-width="2.3"
          />
          <path
            d="M22.6868 23.4955C23.1359 23.9446 23.864 23.9446 24.3131
            23.4955C24.7622 23.0464 24.7622 22.3182 24.3131 21.8691L22.6868
            23.4955ZM14.8074 15.6162L22.6868 23.4955L24.3131 21.8691L16.4338
            13.9898L14.8074 15.6162Z"
            fill="#FF8D06"
          />
        </svg>
      </div>

      <AppLogo />

      <div class="header__menu-section">
        <svg
          role="button"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon--user"
        >
          <path
            d="M22 24C22 19.0294 17.5228 15 12 15C6.47715 15 2 19.0294 2 24"
            stroke="#FF8D06"
            stroke-width="2.3"
          />
          <circle
            cx="12"
            cy="6"
            r="4.85"
            stroke="#FF8D06"
            stroke-width="2.3"
          />
        </svg>

        <svg
          role="button"
          width="31"
          height="25"
          viewBox="0 0 31 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          :class="['icon', isBagEmpty ? 'icon--bag-empty' : 'icon--bag-full']"
        >
          <path
            d="M26.1555 4.55175H4.82878L4.5118 1.0202C4.46012 0.442709 3.97586 0 3.39623
            0H1.12036C0.501311 0 0 0.501311 0 1.12036C0 1.7394 0.501311 2.24071 1.12036
            2.24071H2.3723C3.05634 9.86266 1.28817 -9.83709 3.66047 16.5944C3.7521 17.629
            4.31095 18.7515 5.27362 19.5144C3.53741 21.7316 5.12392 25 7.94798 25C10.2921
            25 11.9451 22.6623 11.1412 20.4482H17.272C16.4692 22.6597 18.1191 25 20.4653
            25C22.3379 25 23.8615 23.4764 23.8615 21.6038C23.8615 19.7312 22.3379 18.2075
            20.4653 18.2075H7.95544C7.10465 18.2075 6.36307 17.694 6.0429 16.946L23.9452
            15.8938C24.4337 15.8651 24.8476 15.5225 24.9664 15.0473L27.2423 5.94327C27.4192
            5.23792 26.8848 4.55175 26.1555 4.55175ZM7.94798 22.7598C7.31082 22.7598 6.79247
            22.2415 6.79247 21.6043C6.79247 20.9671 7.31082 20.4488 7.94798 20.4488C8.58514
            20.4488 9.1035 20.9671 9.1035 21.6043C9.1035 22.2415 8.58514 22.7598 7.94798
            22.7598ZM20.4658 22.7598C19.8287 22.7598 19.3103 22.2415 19.3103 21.6043C19.3103
            20.9671 19.8287 20.4488 20.4658 20.4488C21.103 20.4488 21.6213 20.9671 21.6213
            21.6043C21.6213 22.2415 21.103 22.7598 20.4658 22.7598ZM22.9926 13.7059L5.74136
            14.7197L5.03015 6.79193H24.7214L22.9926 13.7059Z"
            fill="#FF8D06"
          />
          <circle
            cx="27"
            cy="4"
            r="4"
            fill="#00284F"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import MenuIcon from "@/components/UI/MenuIcon.vue";
import { ref } from "vue";

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
  cursor: pointer;

  &--menu {
    @extend %header-icons;

    & > path {
      stroke: $color-primary;
    }

    &:hover {
      & > path {
        stroke: $color-accent;
      }
    }

    &:active {
      transform: scale(0.9);
    }
  }

  &--search {
    @extend %header-icons;

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

    &:active {
      transform: scale(0.9);
    }
  }

  &--user {
    @extend %header-icons;

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

    &:active {
      transform: scale(0.9);
    }
  }

  &--bag-empty {
    @extend %header-icons;

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

    &:active {
      transform: scale(0.9);
    }
  }

  &--bag-full {
    @extend %header-icons;

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

    &:active {
      transform: scale(0.9);
    }
  }
}

.max-content-width {
  @extend %max-width-wrapper;
}
</style>
