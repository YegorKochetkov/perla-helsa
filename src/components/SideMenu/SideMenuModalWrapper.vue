<template>
  <Transition name="modal">
    <div
      v-if="showMenu"
      class="side-menu__mask"
      @click="toggleMenu"
    >
      <div
        id="aside"
        class="modal-container"
      >
        <aside
          :class="['side-menu__content', isMobile ? '' : 'side-menu__content--desktop']"
          @click.stop
        >
          <CrossIcon
            role="button"
            tabindex="0"
            class="side-menu__close"
            @click="toggleMenu"
          />
          <section class="side-menu__nav-section">
            <slot />
          </section>
          <SideMenuFooter class="side-menu__footer" />
        </aside>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import CrossIcon from "@/components/UI/CrossIcon.vue";
import SideMenuFooter from "@/components/SideMenu/SideMenuFooter.vue";
import useMenuStore from "@/stores/menu";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const storeMenu = useMenuStore();
const { toggleMenu } = useMenuStore();
const { showMenu } = storeToRefs(storeMenu);

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform);

onMounted(() => {
  // isMobile.value = navigator.userAgent.toLowerCase().match(/mobile/i) || false;
});
</script>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.side-menu {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: grid;
    overflow: auto;

    background-color: $color-background-modal;
    transition: opacity 0.3s ease;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: $padding-content-mobile;
    padding-bottom: 60px;

    @extend %h4-menu;
    background-color: $color-background-menu;
    transition: all 0.3s ease;

    &--desktop {
      width: $side-menu-width;
      padding-left: 44px;
      padding-right: 44px;
    }
  }

  &__close {
    display: flex;
    align-self: flex-end;
  }

  &__nav-section {
    position: relative;

    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__footer {
    margin-top: auto;
  }
}

.modal-container {
  height: 100%;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition-delay: 0.25s;
  transition: transform 0.3s;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translate(-100%);
}
</style>
