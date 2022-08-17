<template>
  <footer class="side-menu-footer">
    <section class="side-menu-footer__section">
      <label
        for="delivery-select"
        class="side-menu-footer__label"
      >
        Доставка
      </label>
      <select
        id="delivery-select"
        class="side-menu-footer__select"
      >
        <option>Украина</option>
        <option>Другие</option>
      </select>
    </section>

    <section class="side-menu-footer__section">
      <label
        for="lang-select"
        class="side-menu-footer__label"
      >
        Язык
      </label>
      <select
        id="lang-select"
        class="side-menu-footer__select"
      >
        <option>Русский</option>
        <option>Украинский</option>
      </select>
    </section>

    <section class="side-menu-footer__section">
      <label
        for="country-select"
        class="side-menu-footer__label"
      >
        Валюта
      </label>
      <select
        id="country-select"
        class="side-menu-footer__select"
      >
        <option>Грн</option>
        <option>USD</option>
      </select>
    </section>
  </footer>
</template>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.side-menu-footer {
  display: flex;
  justify-content: space-between;

  padding-top: 48px;
  border-top: 1.3px solid rgba(0, 40, 79, 0.1);

  &__section {
    display: flex;
    flex-direction: column;
  }

  &__label {
    @extend %main-text ;
    color: $color-secondary;
  }

  &__select {
    @extend %h4-menu;
    border: none;
    appearance: none;
    outline-color: $color-background-product;

    padding: 3px;
    padding-right: 30px;

    background: url("@/assets/arrow.png") no-repeat;
    background-position: right;
  }
}
</style>
