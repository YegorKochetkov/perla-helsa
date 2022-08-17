<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="modal-menu__mask"
      @click="$emit('close')"
    >
      <aside
        class="modal-menu__content"
        @click.stop
      >
        <svg
          role="button"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="modal-menu__close icon icon--cross"
          @click="$emit('close')"
        >
          <path
            d="M13.0354 1L0.999926 13.0355"
            stroke="#00284F"
            stroke-width="1.7"
            stroke-linecap="round"
          />
          <path
            d="M1.00024 1L13.0357 13.0355"
            stroke="#00284F"
            stroke-width="1.7"
            stroke-linecap="round"
          />
        </svg>
      </aside>
    </div>
  </Transition>
</template>

<script setup lang="ts">
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

.modal-menu {
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

.icon {
  @extend %header-icons;
  width: 14px;

  @include onDesktop() {
    width: 20px;
  }
  &--cross {
    & > path {
      stroke: $color-primary;
    }

    &:hover {
      & > path {
        stroke: $color-accent;
      }
    }
  }
}
</style>
