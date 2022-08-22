<template>
  <div class="side-menu-info">
    <section class="side-menu-info__section">
      <p class="side-menu-info__item">
        О компании
      </p>
      <p class="side-menu-info__item">
        Сертификаты
      </p>
      <p class="side-menu-info__item">
        Вопрос-ответ
      </p>
      <p class="side-menu-info__item">
        Блог
      </p>
    </section>

    <section class="side-menu-info__section">
      <p class="side-menu-info__item">
        Доставка и оплата
      </p>
      <p class="side-menu-info__item">
        Контакты
      </p>
      <p class="side-menu-info__item">
        Вакансии
      </p>
    </section>
    
    <SideMenuCall class="side-menu-info__call" />
  </div>
</template>

<script setup lang="ts">
import SideMenuCall from "@/components/SideMenu/SideMenuCall.vue";
</script>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.side-menu-info {
  height: 100%;

  &__section {
    display: flex;
    flex-direction: column;
    gap: $side-menu-gap;

    &:first-child {
      margin-bottom: auto;
    }
  }

  &__call {
    margin-top: 50px;
  }

  &__item {
    margin: 0;
    width: max-content;

    border-bottom: 1px solid transparent;
    @include hover(border-color, $color-primary);

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
