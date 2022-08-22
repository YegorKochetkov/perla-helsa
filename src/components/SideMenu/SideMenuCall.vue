<template>
  <section class="call">
    <a
      href="tel:0 800 330 039"
      class="call__number"
    >
      0 800 330 039
    </a>
    <span class="call__info">
      Call-центр работает
      с&nbsp;7:00 до&nbsp;23:00
    </span>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.call {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 26px;

  &__number {
    position: relative;
    display: inline-block;
    min-width: max-content;
    padding-left: 34px;
    padding-bottom: 3px;

    @extend %phone-text;
    text-decoration: none;
    color: $color-primary;

    &::before {
      position: absolute;
      left: 0;

      content: "";
      display: block;
      height: 17px;
      width: 17px;

      background: url("@/assets/handset.png");
      @extend %background-images;
    }

    border-bottom: 1px solid transparent;
    @include hover(border-color, $color-primary);
  }

  &__info {
    display: inline-block;
    width: fit-content;
    @extend %h4-text;
    color: $color-secondary;
    font-size: 12px;
  }
}
</style>
