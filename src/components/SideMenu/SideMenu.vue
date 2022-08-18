<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="side-menu__mask"
      @click="$emit('close')"
    >
      <aside
        :class="[
          'side-menu__content modal-container',
          isMobile ? '' : 'side-menu__content--desktop'
        ]"
        @click.stop
      >
        <CrossIcon
          role="button"
          class="side-menu__close"
          @click="$emit('close')"
        />
        <section class="side-menu__nav">
          <SideMenuNav />
          <SideMenuInfo />
          <SideMenuCall class="side-menu__call" />
        </section>
        <SideMenuFooter class="side-menu__footer" />
      </aside>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import CrossIcon from "@/components/UI/CrossIcon.vue";
import SideMenuFooter from "@/components/SideMenu/SideMenuFooter.vue";
import SideMenuCall from "@/components/SideMenu/SideMenuCall.vue";
import SideMenuInfo from "@/components/SideMenu/SideMenuInfo.vue";
import SideMenuNav from "@/components/SideMenu/SideMenuNav.vue";
defineEmits(['close']);
defineProps({
  show: Boolean
});

const isMobile = navigator.maxTouchPoints >= 1;
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

    background-color: $color-background-modal;
    transition: opacity 0.3s ease;
  }

  &__content {
    display: flex;
    flex-direction: column;
    @extend %h4-menu;

    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: $padding-content-mobile;
    padding-bottom: 60px;

    background-color: $color-background-menu;
    transition: all 0.3s ease;

    &--desktop {
      width: $side-menu-width;
      padding-left: 44px;
      padding-right: 44px;
    }
  }

  &__body {
    margin: 20px 0;
  }

  &__close {
    display: flex;
    align-self: flex-end;
  }

  &__call {
    margin-top: 50px;
  }

  &__footer {
    margin-top: auto;
  }
}

.modal-enter-from ,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translate(-100%);
}
</style>
