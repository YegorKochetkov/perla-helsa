<template>
  <SideMenuModalWrapper>
    <SideMenuNav class="side-menu__nav" />
    <SideMenuInfo class="side-menu__info" />
    <Transition name="menu">
      <SubMenuAdults
        v-if="showSubMenuAdults"
        class="side-menu__adult"
      />
    </Transition>
    <Transition name="menu">
      <SubMenuKids
        v-if="showSubMenuKids"
        class="side-menu__adult"
      />
    </Transition>
  </SideMenuModalWrapper>
</template>

<script setup lang="ts">
import SideMenuInfo from "@/components/SideMenu/SideMenuInfo.vue";
import SideMenuNav from "@/components/SideMenu/SideMenuNav.vue";
import SideMenuModalWrapper from "./SideMenuModalWrapper.vue";
import SubMenuAdults from "./SubMenuAdults.vue";
import SubMenuKids from "./SubMenuKids.vue";

import useMenuStore from "@/stores/menu";
import { storeToRefs } from "pinia";

const storeMenu = useMenuStore();

const {
  showSubMenuAdults,
  showSubMenuKids,
} = storeToRefs(storeMenu);
</script>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.side-menu {
  &__nav {
    margin-bottom: 36px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: $side-menu-gap;
  }

  &__adult,
  &__kids {
    position: absolute;

    width: 100%;
    height: 100%;

    background-color: $color-background-menu;
  }
}

.menu-enter-active ,
.menu-leave-active {
  transition: transform 0.3s;
}

.menu-enter-from,
.menu-leave-to {
  transform: translate(-100%);
}

</style>
