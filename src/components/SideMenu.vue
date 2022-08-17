<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="side-menu__mask"
      @click="$emit('close')"
    >
      <aside
        class="side-menu__content"
        @click.stop
      >
        <CrossIcon
          role="button"
          class="side-menu__close"
          @click="$emit('close')"
        />
      </aside>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import CrossIcon from "./UI/CrossIcon.vue";
defineEmits(['close']);
defineProps({
  show: Boolean
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

    background-color: $color-background-modal;
    transition: opacity 0.3s ease;
  }

  &__content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: $padding-content-mobile;
    padding-bottom: 60px;

    @include onDesktop() {
      width: $aside-menu-width;
      padding-left: 44px;
      padding-right: 44px;
    }

    background-color: $color-background-menu;
    transition: all 0.3s ease;
  }

  &__body {
    margin: 20px 0;
  }

  &__close {
    float: right;
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
