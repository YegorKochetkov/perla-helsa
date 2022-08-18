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
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/utils/typography.scss";
@import "@/styles/utils/colors.scss";
@import "@/styles/utils/mixins.scss";
@import "@/styles/utils/extends.scss";

.side-menu-info {
  display: flex;
  flex-direction: column;
  gap: 212px;

  &__section {
    display: flex;
    flex-direction: column;
    gap: $side-menu-gap;
  }

  &__item {
    margin: 0;
  }
}
</style>
